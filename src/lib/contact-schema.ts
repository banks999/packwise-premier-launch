import { z } from "zod";

export const contactSchema = z.object({
  fullName: z.string().trim().min(2, "Full name required").max(100),
  email: z.string().trim().email("Valid corporate email required").max(255),
  company: z.string().trim().min(2, "Company name required").max(150),
  sector: z.enum(["Pharma Manufacturer", "Packaging Producer", "Other"], {
    message: "Select a sector",
  }),
  brief: z.string().trim().min(20, "Provide at least 20 characters").max(2000),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
