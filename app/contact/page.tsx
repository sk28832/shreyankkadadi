"use client";

import Link from "next/link";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from '@emailjs/browser';
import "animate.css";

const formSchema = z.object({
    firstName: z.string().min(2, {
        message: "First name must be at least 2 characters.",
    }),
    lastName: z.string().min(2, {
        message: "Last name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Invalid email address.",
    }),
    message: z.string().min(10, {
        message: "Message must be at least 10 characters.",
    }),
});

export default function Contact() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            message: "",
        },
    });

    const handleSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                values,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );

            alert("Message sent successfully!");
            form.reset();
        } catch (error) {
            console.error("Error:", error);
            alert(error);
        }
    };

    return (
        <div>
            <Header />
            <div className="animate__animated animate__fadeIn animate__faster">
                <div className="container max-w-3xl px-4 py-6 md:py-12">
                    <div className="space-y-2">
                        <div className="flex flex-col items-start md:flex-row md:items-center">
                            <h1 className="text-4xl font-bold tracking-tighter flex items-center gap-4">
                                get in touch
                                <div className="flex items-center gap-2">
                                    <a
                                        href="https://www.linkedin.com/in/shreyank-kadadi/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaLinkedin className="text-primary hover:text-primary-hover transition-colors cursor-pointer h-5 w-5" />
                                    </a>
                                    <a
                                        href="https://twitter.com/sk28832"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaXTwitter className="text-primary hover:text-primary-hover transition-colors cursor-pointer h-5 w-5" />
                                    </a>
                                    {/* <a
                                        href="https://www.instagram.com/sk.108"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaInstagram className="text-primary hover:text-primary-hover transition-colors cursor-pointer h-5 w-5" />
                                    </a> */}
                                </div>
                            </h1>
                        </div>
                        <p className="text-gray-500 dark:text-gray-400">
                            feel free to reach out! i promise i won&apos;t byte :)
                        </p>
                    </div>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <FormField
                                    control={form.control}
                                    name="firstName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>first name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="enter your first name" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="lastName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>last name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="enter your last name" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="enter your email" type="email" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>message</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                className="min-h-[100px]"
                                                placeholder="enter your message"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit">send message</Button>
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    );
}