"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

import { z } from "zod";

const schema = z.object({
  email: z
    .string({
      invalid_type_error: "Invalid Email",
    })
    .email({
      message: "Invalid Email",
    }),
  name: z
    .string({
      invalid_type_error: "Invalid Name",
    })
    .min(1, {
      message: "Name is required",
    }),
  message: z
    .string({
      invalid_type_error: "Invalid Message",
    })
    .min(1, {
      message: "Message is required",
    }),
});

export async function sendMessage(prevState: any, formData: FormData) {
  "use server";
  // Replace with actual email logic, e.g., using nodemailer or an API route

  const validatedFields = schema.safeParse({
    email: formData.get("email"),
    name: formData.get("name"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      status: "error",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    await resend.emails.send({
      from: "robert@kochie.io",
      to: ["robert@kochie.io", validatedFields.data.email],
      subject: "New Inquiry from " + validatedFields.data.name,
      text: validatedFields.data.message,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      status: "error",
      errors: error.message,
    };
  }

  return {
    status: "success",
    message: "Message sent successfully!",
  };
}
