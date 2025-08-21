import { FieldErrors, UseFormRegister } from "react-hook-form";
import { inputBaseClass } from "../form-styles";
import { UserFormValues } from "../form-schema";

type EmailFieldInputProps = {
    register: UseFormRegister<UserFormValues>;
    errors: FieldErrors<UserFormValues>;
}

const EmailFieldInput = ({ register, errors }: EmailFieldInputProps) => {
  return (
    <fieldset className="mx-auto mt-[50px]">
      <legend className="sr-only">Email</legend>
      <input
        type="email"
        placeholder="Email"
        {...register("email")}
        className={inputBaseClass}
      />
      {errors.email && <p className="text-red-500 mt-[5px]">{errors.email.message}</p>}
      </fieldset>
  );
};

export default EmailFieldInput;