"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Proza_Libre } from "next/font/google";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import Heading from "../heading";
import Container from "../container";
import { cn } from "@/lib/utils";
import Image from "next/image";

const prozaLibre = Proza_Libre({ subsets: ["latin"], weight: "700" });

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required.",
  }),
  email: z.string().min(1, {
    message: "Email is required.",
  }),
  subject: z.string().min(1, {
    message: "Subject is required.",
  }),
  message: z.string().min(1, {
    message: "Message is required.",
  }),
});

const ContactsForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const formTemplate = {
      name: values.name,
      email: values.email,
      subject: values.subject,
      body: values.message,
    };

    // TODO: Change text to dictionary
    // Also add this variables to .env.
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formTemplate,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          toast.success("Email sent.");
          form.reset();
        },
        () => {
          toast.success("Something went wrong.");
        }
      );
  };

  return (
    <div className="flex-1 md:pb-32">
      <div className="flex flex-col space-y-4 pt-32 pb-24 items-center text-center md:items-start md:text-start">
        <h1 className={cn("text-4xl text-accent", prozaLibre.className)}>
          Get in touch
        </h1>
        <p className={"text-background/80"}>
          Need assistance? Send us a message
        </p>
      </div>
      <div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="text-background space-y-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        placeholder="Name"
                        {...field}
                      />
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
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        placeholder="Email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subject</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      placeholder="Subject"
                      {...field}
                    />
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
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      className=" resize-none"
                      disabled={isLoading}
                      placeholder="Message"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button variant={"secondary"} className="space-x-2 mt-8">
              <p>Send Message</p>
              <Image
                src={"/assets/icons/send-icon.svg"}
                alt="send"
                width={24}
                height={24}
              />
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ContactsForm;
