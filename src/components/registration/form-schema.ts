import * as z from "zod";

export const formSchema = z.object({
  name: z.string().min(2, "Name must be longer than 2 characters"),
  email: z.string().email("Enter a valid email"),
  phone: z
    .string()
    .regex(/^\+380\d{9}$/, "Number must start with +380 and contain 9 digits"),
  position_id: z.string(),
  photo: z
    .any()
    .refine((files) => files?.[0] instanceof File, "File is required")
    .refine(
      (files) =>
        files?.[0]?.type === "image/jpeg" || files?.[0]?.type === "image/jpg",
      "File must be JPEG/JPG"
    )
    .refine(
      (files) => files?.[0]?.size <= 5 * 1024 * 1024,
      "File size must be less than 5MB"
    )
    .refine(
      (files) =>
        new Promise((resolve) => {
          if (!files?.[0]) return resolve(false);
          const img = new Image();
          img.src = URL.createObjectURL(files[0]);
          img.onload = () => {
            resolve(img.width >= 70 && img.height >= 70);
          };
          img.onerror = () => resolve(false);
        }),
      "Minimum size 70x70px"
    ),
});

export type UserFormValues = z.infer<typeof formSchema>;
