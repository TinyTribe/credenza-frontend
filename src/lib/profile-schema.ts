import * as z from "zod"

export const profileFormSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters" }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  professionalTitle: z.string().min(2, { message: "Professional title is required" }),
  skills: z.array(z.string()).min(1, { message: "Add at least one skill" }),
  profileImage: z.string().optional(),
})

export type ProfileFormValues = z.infer<typeof profileFormSchema>
