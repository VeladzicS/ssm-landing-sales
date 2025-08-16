import { z } from "zod";

// ## Contact Form Schema
export const contactFormSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, {
      message: "First name is required.",
    })
    .max(100, { message: "First name must be less than 100 characters." })
    .refine((value) => /^[a-zA-Z]+$/.test(value), {
      message: "First name must only contain letters.",
    }),
  lastName: z
    .string()
    .trim()
    .min(1, {
      message: "Last name is required.",
    })
    .max(100, { message: "Last name must be less than 100 characters." })
    .refine((value) => /^[a-zA-Z]+$/.test(value), {
      message: "Last name must only contain letters.",
    }),
  email: z
    .string()
    .trim()
    .email({ message: "Invalid email address" })
    .min(1, {
      message: "Email is required.",
    })
    .max(100, { message: "Email must be less than 100 characters." }),
  phone: z
    .string()
    .trim()
    .min(1, { message: "Phone number is required." })
    .max(20, { message: "Phone number must be less than 20 characters." })
    .regex(/^[\d\s()+-]+$/, { message: "Invalid phone number format." }),
  subject: z
    .string()
    .trim()
    .min(1, { message: "Subject is required." })
    .max(100, { message: "Subject must be less than 100 characters." }),
  message: z
    .string()
    .trim()
    .min(1, {
      message: "Message is required.",
    })
    .max(1000, { message: "Message must be less than 1000 characters." }),
});

export type TContactFormSchema = z.infer<typeof contactFormSchema>;
