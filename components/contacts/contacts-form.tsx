"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Proza_Libre } from "next/font/google";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import Image from "next/image";
import emailjs from "@emailjs/browser";

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
import { cn } from "@/lib/utils";

const prozaLibre = Proza_Libre({ subsets: ["latin"], weight: "700" });

type TContactsForm = {
  inputs: {
    [key: string]: {
      label: string;
      placeholder: string;
    };
  };
  heading: {
    title: string;
    subtitle: string;
  };
  buttonLabel: string;
  messageError: {
    [key: string]: {
      message: string;
    };
  };
  toasts: {
    success: string;
    error: string;
  };
};

const ContactsForm = ({
  inputs,
  heading,
  buttonLabel,
  messageError,
  toasts,
}: TContactsForm) => {
  const formSchema = z.object({
    name: z.string().min(1, {
      message: messageError.name.message,
    }),
    email: z.string().min(1, {
      message: messageError.email.message,
    }),
    subject: z.string().min(1, {
      message: messageError.subject.message,
    }),
    message: z.string().min(1, {
      message: messageError.message.message,
    }),
  });

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

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formTemplate,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          toast.success(toasts.success);
          form.reset();
        },
        () => {
          toast.success(toasts.error);
        }
      );
  };

  return (
    <div className="flex-1 md:pb-32">
      <div className="flex flex-col space-y-4 pt-32 pb-24 items-center text-center md:items-start md:text-start">
        <h1 className={cn("text-4xl text-accent", prozaLibre.className)}>
          {heading.title}
        </h1>
        <p className={"text-background/80"}>{heading.subtitle}</p>
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
                    <FormLabel>{inputs.name.label}</FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        placeholder={inputs.name.placeholder}
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
                    <FormLabel>{inputs.email.label}</FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        placeholder={inputs.email.placeholder}
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
                  <FormLabel>{inputs.subject.label}</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      placeholder={inputs.subject.placeholder}
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
                  <FormLabel>{inputs.message.label}</FormLabel>
                  <FormControl>
                    <Textarea
                      className=" resize-none"
                      disabled={isLoading}
                      placeholder={inputs.message.placeholder}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-fit"
            >
              <Button
                variant={"secondary"}
                className="space-x-2 mt-8"
                disabled={isLoading}
              >
                <p>{buttonLabel}</p>
                <Image
                  src={"/assets/icons/send-icon.svg"}
                  alt="send"
                  width={24}
                  height={24}
                />
              </Button>
            </motion.div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ContactsForm;
