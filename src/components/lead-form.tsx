"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

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
  requirement: z.string({
    required_error: "Please select a requirement.",
  }),
  message: z.string().optional(),
});

export default function LeadForm() {
    const [step, setStep] = useState(1);
    const { toast } = useToast();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            requirement: undefined,
            message: "",
        },
    });

    async function handleNext() {
        const isStep1Valid = await form.trigger(["name", "email", "phone"]);
        if (isStep1Valid) {
            setStep(2);
        }
    }

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        toast({
            title: "Quote Requested!",
            description: "Thank you for your interest. We will be in touch with you shortly.",
        });
        form.reset();
        setStep(1);
    }

    return (
        <Card className="bg-background/90 backdrop-blur-sm border-border/50">
            <CardHeader>
                <CardTitle className="font-headline text-2xl text-primary">Request a Free Quote</CardTitle>
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
                                                <Input placeholder="John Doe" {...field} />
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
                                                <Input placeholder="you@example.com" {...field} />
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
                                                <Input placeholder="e.g. 123-456-7890" {...field} />
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
                                    name="requirement"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Requirement</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select a requirement" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="Single Sliding Doors">Single Sliding Doors</SelectItem>
                                                    <SelectItem value="Pocket Sliding Doors">Pocket Sliding Doors</SelectItem>
                                                    <SelectItem value="Minimal Ghost Doors">Minimal Ghost Doors</SelectItem>
                                                    <SelectItem value="Multi-Panel Sliding Doors">Multi-Panel Sliding Doors</SelectItem>
                                                    <SelectItem value="Slide Fold Internal Partitions">Slide Fold Internal Partitions</SelectItem>
                                                    <SelectItem value="Other">Other</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Message (Optional)</FormLabel>
                                            <FormControl>
                                                <Textarea placeholder="Tell us more about your project..." {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                             </>
                        )}
                        
                        <div className="flex gap-2 justify-end">
                            {step === 2 && (
                                <Button type="button" variant="ghost" onClick={() => setStep(1)}>
                                    Back
                                </Button>
                            )}
                            {step === 1 ? (
                                <Button type="button" onClick={handleNext} className="w-full">
                                    Next
                                </Button>
                            ) : (
                                <Button type="submit" className="w-full">
                                    Get My Free Quote
                                </Button>
                            )}
                        </div>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
}
