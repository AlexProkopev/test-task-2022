"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";


const positionsFromApi = [1, 2, 3, 4];

const formSchema = z.object({
  name: z.string().min(2, "Name must be longer than 2 characters"),
  email: z.string().email("Enter a valid email"),
  phone: z
    .string()
    .regex(/^\+380\d{9}$/, "Number must start with +380 and contain 9 digits"),
  position_id: z
    .number()
    .refine((val) => positionsFromApi.includes(val), "Choose a valid position"),
 photo: z
  .any()
  .refine((files) => files?.[0] instanceof File, "File is required")
  .refine(
    (files) => files?.[0]?.type === "image/jpeg" || files?.[0]?.type === "image/jpg",
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

type FormData = z.infer<typeof formSchema>;


export default function UserForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({ resolver: zodResolver(formSchema) , mode: "all"});



  const onSubmit = async (data: FormData) => {
    console.log("Отправка формы:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 max-w-md mx-auto mt-10"
    >
   
      <input
        type="text"
        placeholder="Имя"
        {...register("name")}
        className="border px-3 py-2 rounded"
      />
      {errors.name && <p className="text-red-500">{errors.name.message}</p>}

    
      <input
        type="email"
        placeholder="Email"
        {...register("email")}
        className="border px-3 py-2 rounded"
      />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}

    
      <input
        type="text"
        placeholder="+380XXXXXXXXX"
        {...register("phone")}
        className="border px-3 py-2 rounded"
      />
      {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}

     
      <select {...register("position_id", { valueAsNumber: true })} className="border px-3 py-2 rounded">
  <option value="">Choose a position</option>
  {positionsFromApi.map((id) => (
    <option key={id} value={id}>
      Position {id}
    </option>
  ))}
</select>
      {errors.position_id && <p className="text-red-500">{errors.position_id.message}</p>}

     
      <input type="file" {...register("photo")} accept="image/jpeg, image/jpg" />
      {/* {errors.photo && <p className="text-red-500">{errors.photo.message}</p>} */}

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-blue-500 text-white rounded px-4 py-2"
      >
        {isSubmitting ? "Отправка..." : "Отправить"}
      </button>
    </form>
  );
}
