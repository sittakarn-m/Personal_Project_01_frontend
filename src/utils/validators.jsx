import { z } from "zod";

export const registerSchema = z
  .object({
    email: z
      .string()
      .trim()
      .email("Invalid email format")
      .describe("User email address"),
    firstname: z.string().min(3, "First name should be at least 3 characters"),
    lastname: z.string().min(3, "Last name should be at least 3 characters"),
    password: z.string().min(6, "Password should be at least 6 characters"),
    confirmPassword: z
      .string()
      .min(6, "Confirm password should be at least 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });



  export const loginSchema = z.object({
    email: z.string().email("email ไม่ถูกต้อง"),
    password: z.string().min(6, "Password shoud longer than 6"),
})
