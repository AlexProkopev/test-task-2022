import { FieldErrors, UseFormRegister } from "react-hook-form";
import { UserFormValues } from "../form-schema";
import { inputBaseClass } from "../form-styles";

type NameFieldInputProps = {
    register: UseFormRegister<UserFormValues>;
    errors: FieldErrors<UserFormValues>;
};

const NameFieldInput = ({register, errors }: NameFieldInputProps) => {
  return (
    <fieldset className="mx-auto ">
      <legend className="sr-only">Name</legend>
      <input
        type="text"
        placeholder="Your name"
        {...register("name")}
        className={inputBaseClass}
      />
      {errors.name && <p className="text-red-500 mt-[5px]">{errors.name.message}</p>}
    </fieldset>
  );
};

export default NameFieldInput;