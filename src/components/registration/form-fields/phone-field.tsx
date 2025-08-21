import { FieldErrors, UseFormRegister } from "react-hook-form";
import { UserFormValues } from "../form-schema";
import { inputBaseClass } from "../form-styles";

type PhoneFieldInputProps = {
  register: UseFormRegister<UserFormValues>;
  errors: FieldErrors<UserFormValues>;
};

const PhoneFieldInput = ({ register, errors }: PhoneFieldInputProps) => {
  return (
    <fieldset className="mx-auto mt-[50px] border-0 p-0">
      <legend className="sr-only">Phone</legend>

      <input
        type="text"
        placeholder="Phone"
        {...register("phone")}
        className={inputBaseClass}
      />

      {errors.phone && (
        <p role="alert" className="text-red-500 mt-[5px]">
          {errors.phone.message}
        </p>
      )}

      <p className="text-gray-777 text-xs font-normal leading-none ml-[20px] mt-[5px]">
        +38 (XXX) XXX - XX - XX
      </p>
    </fieldset>
  );
};

export default PhoneFieldInput;
