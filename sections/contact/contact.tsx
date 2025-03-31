"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Dribbble, Instagram, Twitter } from "lucide-react";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" }),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const headerRef = useRef(null);
  const bioRef = useRef(null);
  const contactInfoRef = useRef(null);
  const formRef = useRef(null);
  const socialRef = useRef(null);

  const headerInView = useInView(headerRef, { once: true, amount: 0.3 });
  const bioInView = useInView(bioRef, { once: true, amount: 0.3 });
  const contactInfoInView = useInView(contactInfoRef, {
    once: true,
    amount: 0.3,
  });
  const formInView = useInView(formRef, { once: true, amount: 0.1 });
  const socialInView = useInView(socialRef, { once: true, amount: 0.5 });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log("Form submitted:", data);
      toast("Thank you for your message. We'll get back to you soon.");
    } catch (error) {
      toast("Your message couldn't be sent. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id="contact"
      className="container mx-auto px-4 py-12 md:py-24 max-w-6xl scroll-mt-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <motion.div
            ref={headerRef}
            variants={containerVariants}
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            className="space-y-2"
          >
            <h1 className="text-4xl font-bold text-amber-500">
              Valentine Omonya —
            </h1>
            <h2 className="text-3xl text-muted-foreground text-amber-300">
              Software Engineer
            </h2>
          </motion.div>

          <motion.div
            ref={bioRef}
            variants={containerVariants}
            initial="hidden"
            animate={bioInView ? "visible" : "hidden"}
            className="border-t border-input pt-3"
          >
            <p className="text-muted-foreground mt-3">
              Creative devleloper with a passion for creating functional
              websites understanding customer needs and providing solutions.
            </p>
          </motion.div>

          <motion.div
            ref={contactInfoRef}
            variants={containerVariants}
            initial="hidden"
            animate={contactInfoInView ? "visible" : "hidden"}
            className="space-y-2"
          >
            <div>
              <h3 className="text-sm text-muted-foreground">E-mail</h3>
              <p className="font-medium">valomosh254@gmail.com</p>
            </div>

            <div>
              <h3 className="text-sm text-muted-foreground">Phone</h3>
              <p className="font-medium">+2547 68 133 220</p>
            </div>
          </motion.div>

          <motion.div
            ref={socialRef}
            variants={containerVariants}
            initial="hidden"
            animate={socialInView ? "visible" : "hidden"}
            className="flex gap-4"
          >
            <a
              href="#"
              className=" flex h-12 w-12 items-center justify-center rounded-full border border-b-0 bg-stone-100 dark:border-neutral-500/40 dark:bg-neutral-900 cursor-pointer"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="#"
              className=" flex h-12 w-12 items-center justify-center rounded-full border border-b-0 bg-stone-100 dark:border-neutral-500/40 dark:bg-neutral-900 cursor-pointer"
            >
              <Dribbble className="h-5 w-5" />
              <span className="sr-only">Dribbble</span>
            </a>
            <a
              href="#"
              className=" flex h-12 w-12 items-center justify-center rounded-full border border-b-0 bg-stone-100 dark:border-neutral-500/40 dark:bg-neutral-900 cursor-pointer"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>
          </motion.div>
        </div>

        <motion.div
          ref={formRef}
          variants={containerVariants}
          initial="hidden"
          animate={formInView ? "visible" : "hidden"}
          className="space-y-6"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">
                  Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="name"
                  placeholder="Your Name"
                  {...register("name")}
                />
                {errors.name && (
                  <p className="text-sm text-red-500">{errors.name.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">
                  Email <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  placeholder="Email Address"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">
                Message <span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="message"
                placeholder="Your message here"
                rows={10}
                {...register("message")}
              />
              {errors.message && (
                <p className="text-sm text-red-500">{errors.message.message}</p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full group flex items-center gap-x-3 py-2 px-4 rounded-lg border
                     bg-stone-100 focus:rounded-full focus:outline-none focus:ring-[1.5px] focus:ring-transparent focus:ring-offset-blue-500
                      focus-visible:ring-offset-2 focus-visible:ring-offset-blue-500 dark:border-x-0 dark:border-b-0 dark:border-t-[1px]
                       dark:border-neutral-500/40 dark:bg-neutral-900 dark:bg-none dark:focus:ring-offset-blue-500
                        dark:focus-visible:ring-offset-blue-500"
              disabled={isSubmitting}
            >
              Send a message
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
