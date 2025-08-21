import { FieldErrors, UseFormRegister, UseFormWatch } from "react-hook-form";
import { UserFormValues } from "../form-schema";

type PhotoFieldInputProps = {
  register: UseFormRegister<UserFormValues>;
  errors: FieldErrors<UserFormValues>;
  watch: UseFormWatch<UserFormValues>;
};

const PhotoFieldInput = ({ register, errors, watch }: PhotoFieldInputProps) => {
  return (
    <fieldset className="relative flex items-center w-[328px] mx-auto md:w-[380px] border-0 p-0 m-0">
      <legend className="sr-only">Upload photo</legend>

      <label
        htmlFor="photo"
        className="py-[14px] px-[15px] rounded-l cursor-pointer border border-black/90
               text-black-87 text-base font-normal leading-relaxed
               hover:bg-gray-777 transition"
      >
        Upload
      </label>

      <span
        className="flex-1 border border-stone-300 rounded-r px-3 py-[14px] bg-white 
                  text-gray-777 text-base font-normal leading-relaxed"
      >
        {watch("photo")?.[0]?.name || "Upload your photo"}
      </span>

      <input
        type="file"
        id="photo"
        {...register("photo")}
        accept="image/jpeg, image/jpg"
        className="hidden"
      />

      {errors.photo && (
        <p
          role="alert"
          className="text-red-500 text-base font-normal leading-relaxed text-center mt-1 absolute top-[60px]"
        >
          {errors.photo.message as string}
        </p>
      )}
    </fieldset>
  );
};

export default PhotoFieldInput;
