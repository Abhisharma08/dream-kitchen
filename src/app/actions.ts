'use server';

import { z } from 'zod';

// Define schemas for each step
const step1Schema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
});

const step2Schema = z.object({
  email: z.string().email(), // Email is needed to find and update the contact
  designation: z.string(),
  location: z.string(),
});

const HUBSPOT_API_KEY = process.env.HUBSPOT_API_KEY || 'YOUR_HUBSPOT_API_KEY';

// Function to create a new contact
async function createHubspotContact(properties: { property: string; value: any }[]) {
  if (HUBSPOT_API_KEY === 'YOUR_HUBSPOT_API_KEY') {
    console.warn("HubSpot API Key is not set. Skipping contact creation.");
    return { success: true, message: "Contact creation skipped (API key not set)." };
  }

  const hubspotApiUrl = 'https://api.hubapi.com/crm/v3/objects/contacts';

  try {
    const response = await fetch(hubspotApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${HUBSPOT_API_KEY}`,
      },
      body: JSON.stringify({ properties: Object.fromEntries(properties.map(p => [p.property, p.value])) }),
    });

    if (response.ok) {
        const data = await response.json();
        return { success: true, message: 'Contact created successfully.', data };
    } else {
        const errorBody = await response.json();
        console.error('HubSpot API Error (Create):', errorBody);
        // Handle cases where contact already exists
        if (errorBody.category === 'CONFLICT') {
            return { success: true, message: 'Contact already exists, will be updated.' };
        }
        return { success: false, message: 'Failed to create contact in HubSpot.' };
    }
  } catch (error) {
    console.error('Error creating HubSpot contact:', error);
    return { success: false, message: 'An unexpected error occurred during contact creation.' };
  }
}

// Function to update an existing contact by email
async function updateHubspotContact(email: string, properties: { property: string; value: any }[]) {
    if (HUBSPOT_API_KEY === 'YOUR_HUBSPOT_API_KEY') {
        console.warn("HubSpot API Key is not set. Skipping contact update.");
        return { success: true, message: "Contact update skipped (API key not set)." };
    }

    // The API does not have a direct update-by-email endpoint.
    // The create endpoint will merge with an existing contact if the email matches.
    // This provides an "upsert" functionality.
    const hubspotApiUrl = 'https://api.hubapi.com/crm/v3/objects/contacts';
    
    const upsertPayload = {
        properties: Object.fromEntries(properties.map(p => [p.property, p.value]))
    };

    try {
        // First try to find the contact to get its ID. This is more robust.
        const searchUrl = `https://api.hubapi.com/crm/v3/objects/contacts/search`;
        const searchResponse = await fetch(searchUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${HUBSPOT_API_KEY}`,
            },
            body: JSON.stringify({
                filterGroups: [{
                    filters: [{
                        propertyName: 'email',
                        operator: 'EQ',
                        value: email
                    }]
                }]
            })
        });

        if (!searchResponse.ok) throw new Error('Failed to search for contact');

        const searchData = await searchResponse.json();
        
        if (searchData.results && searchData.results.length > 0) {
            const contactId = searchData.results[0].id;
            const updateUrl = `https://api.hubapi.com/crm/v3/objects/contacts/${contactId}`;
            const updateResponse = await fetch(updateUrl, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${HUBSPOT_API_KEY}`,
                },
                body: JSON.stringify(upsertPayload),
            });
            if (updateResponse.ok) {
                 return { success: true, message: 'Contact updated successfully.' };
            } else {
                const errorBody = await updateResponse.json();
                console.error('HubSpot API Error (Update):', errorBody);
                return { success: false, message: 'Failed to update contact in HubSpot.' };
            }
        } else {
            // This case should ideally not be hit if step 1 was successful.
            return createHubspotContact([...properties, {property: 'email', value: email}]);
        }

    } catch (error) {
        console.error('Error updating HubSpot contact:', error);
        return { success: false, message: 'An unexpected error occurred during contact update.' };
    }
}


export async function submitStep1(data: z.infer<typeof step1Schema>) {
  const [firstName, ...lastNameParts] = data.name.split(' ');
  const lastName = lastNameParts.join(' ');
  
  const properties = [
    { property: 'firstname', value: firstName },
    { property: 'lastname', value: lastName || '' },
    { property: 'email', value: data.email },
    { property: 'phone', value: data.phone },
  ];
  return await createHubspotContact(properties);
}

export async function submitStep2(data: z.infer<typeof step2Schema>) {
  const properties = [
    { property: 'jobtitle', value: data.designation },
    { property: 'city', value: data.location },
  ];
  return await updateHubspotContact(data.email, properties);
}
