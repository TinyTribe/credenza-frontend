import * as z from "zod"

export const organizationFormSchema = z.object({
  organizationName: z.string().min(2, { message: "Organization name must be at least 2 characters" }),
  country: z.string().min(1, { message: "Please select a country" }),
  state: z.string().min(1, { message: "Please select a state" }),
  organizationType: z.string().min(1, { message: "Please select an organization type" }),
  organizationEmail: z.string().email({ message: "Please enter a valid email address" }),
  companyLogo: z.string().optional(),
})

export type OrganizationFormValues = z.infer<typeof organizationFormSchema>
