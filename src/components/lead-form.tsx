"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { submitStep1, submitStep2 } from "@/app/actions";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
  designation: z.string().min(2, {
    message: "Designation is required.",
  }),
  location: z.string().min(2, {
    message: "Location is required.",
  }),
});

export default function LeadForm() {
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const router = useRouter();
    const { toast } = useToast();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            designation: "",
            location: "",
        },
    });

    async function handleNext() {
        const isStep1Valid = await form.trigger(["name", "email", "phone"]);
        if (!isStep1Valid) return;

        setIsSubmitting(true);
        const step1Data = form.getValues();
        const result = await submitStep1({
            name: step1Data.name,
            email: step1Data.email,
            phone: step1Data.phone,
        });

        setIsSubmitting(false);

        if (result.success) {
            setStep(2);
        } else {
            toast({
                title: "Submission Failed",
                description: result.message || "Could not save your details. Please try again.",
                variant: "destructive",
            });
        }
    }

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true);
        const result = await submitStep2({
            email: values.email,
            designation: values.designation,
            location: values.location,
        });

        setIsSubmitting(false);

        if (result.success) {
            router.push('/thank-you');
        } else {
            toast({
                title: "Submission Failed",
                description: result.message || "Could not save your project details. Please try again.",
                variant: "destructive",
            });
        }
    }

    return (
        <Card className="bg-background/90 backdrop-blur-sm border-border/50">
            <CardHeader>
                <CardTitle className="font-headline text-2xl text-primary">Get a Free Consultation</CardTitle>
                <CardDescription>
                    {step === 1 ? "Step 1 of 2: Your details" : "Step 2 of 2: Project details"}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        {step === 1 && (
                            <>
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Full Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="John Doe" {...field} disabled={isSubmitting} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email Address</FormLabel>
                                            <FormControl>
                                                <Input placeholder="you@example.com" {...field} disabled={isSubmitting} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="phone"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Phone Number</FormLabel>
                                            <FormControl>
                                                <Input placeholder="e.g. 123-456-7890" {...field} disabled={isSubmitting} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </>
                        )}
                        
                        {step === 2 && (
                             <>
                                <FormField
                                    control={form.control}
                                    name="designation"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Designation</FormLabel>
                                            <FormControl>
                                                <Input placeholder="e.g. Architect, Project Manager" {...field} disabled={isSubmitting} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="location"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Location</FormLabel>
                                            <FormControl>
                                                <Input placeholder="e.g. New York, NY" {...field} disabled={isSubmitting} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                             </>
                        )}
                        
                        <div className="flex gap-2 justify-end pt-2">
                            {step === 2 && (
                                <Button type="button" variant="ghost" onClick={() => setStep(1)} disabled={isSubmitting}>
                                    Back
                                </Button>
                            )}
                            {step === 1 ? (
                                <Button type="button" onClick={handleNext} className="w-full" disabled={isSubmitting}>
                                    {isSubmitting && <Loader2 className="animate-spin mr-2" />}
                                    Next
                                </Button>
                            ) : (
                                <Button type="submit" className="w-full" disabled={isSubmitting}>
                                    {isSubmitting && <Loader2 className="animate-spin mr-2" />}
                                    Request Consultation
                                </Button>
                            )}
                        </div>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
}
