"use client";

import Link from "next/link";
import Header from "@/components/Header";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
      } else {
        alert("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while sending the message. Please try again later.");
    }
  };

  return (
    <div>
      <Header />
      <div className="container grid max-w-3xl px-4 gap-10 py-6 md:py-12">
        <div className="space-y-2">
          <div className="flex items-center">
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
                <a
                  href="https://www.instagram.com/sk.108"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="text-primary hover:text-primary-hover transition-colors cursor-pointer h-5 w-5" />
                </a>
              </div>
            </h1>
          </div>
          <p className="text-gray-500 dark:text-gray-400">
            feel free to reach out if you have any questions, if you want to
            work together, or you just want to say hi! i promise i won't byte.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">first name</Label>
              <Input
                id="firstName"
                placeholder="enter your first name"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">last name</Label>
              <Input
                id="lastName"
                placeholder="enter your last name"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">email</Label>
            <Input
              id="email"
              placeholder="enter your email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">message</Label>
            <Textarea
              className="min-h-[100px]"
              id="message"
              placeholder="enter your message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <Button type="submit">send message</Button>
        </form>
      </div>
    </div>
  );
}