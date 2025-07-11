'use server';

import { z } from 'zod';

// Define schemas for each step
const step1Schema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
});

const step2Schema = z.object({
  email: z.string().email(), // Email is needed to associate step 2 with step 1
  designation: z.string(),
  location: z.string(),
});

// IMPORTANT: Replace these with your actual HubSpot Portal ID and Form GUID
// You can find these in your HubSpot account.
const HUBSPOT_PORTAL_ID = process.env.HUBSPOT_PORTAL_ID || 'YOUR_HUBSPOT_PORTAL_ID';
const HUBSPOT_FORM_GUID = process.env.HUBSPOT_FORM_GUID || 'YOUR_HUBSPOT_FORM_GUID';

async function submitHubspotForm(fields: { name: string; value: string }[]) {
  if (HUBSPOT_PORTAL_ID === 'YOUR_HUBSPOT_PORTAL_ID' || HUBSPOT_FORM_GUID === 'YOUR_HUBSPOT_FORM_GUID') {
    console.warn("HubSpot credentials are not set. Skipping form submission.");
    // Return a success-like response in dev environments to not block UI flow
    return { success: true, message: "Submission skipped (credentials not set)." };
  }
  
  const hubspotApiUrl = `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_GUID}`;

  try {
    const response = await fetch(hubspotApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ fields }),
    });

    if (response.ok) {
      return { success: true, message: 'Form submitted successfully.' };
    } else {
      const errorBody = await response.json();
      console.error('HubSpot API Error:', errorBody);
      return { success: false, message: 'Failed to submit form to HubSpot.' };
    }
  } catch (error) {
    console.error('Error submitting to HubSpot:', error);
    return { success: false, message: 'An unexpected error occurred.' };
  }
}

export async function submitStep1(data: z.infer<typeof step1Schema>) {
  const fields = [
    { name: 'firstname', value: data.name },
    { name: 'email', value: data.email },
    { name: 'phone', value: data.phone },
  ];
  return await submitHubspotForm(fields);
}

export async function submitStep2(data: z.infer<typeof step2Schema>) {
  const fields = [
    { name: 'email', value: data.email }, // Use email as the key to merge contacts
    { name: 'jobtitle', value: data.designation },
    { name: 'city', value: data.location },
  ];
  return await submitHubspotForm(fields);
}
