import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, UserFormValues } from "./form-schema";
import NameFieldInput from "./form-fields/name-field";
import EmailFieldInput from "./form-fields/email-field";
import PhoneFieldInput from "./form-fields/phone-field";
import PositionsRadioButton from "./form-fields/positions-field";
import PhotoFieldInput from "./form-fields/photo-field";
import SubmitButton from "./form-fields/button-submit";
import RegistrationHooks from "./registration-hooks";

const formStyles =
  "flex flex-col gap-4 max-w-md mx-auto w-[328px] mt-[50px] md:w-[380px]";

const UserForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    watch,
  } = useForm<UserFormValues>({
    resolver: zodResolver(formSchema),
    mode: "all",
  });

  const { dataPosition, onSubmit } = RegistrationHooks();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={formStyles}>
      <fieldset className="space-y-[50px]">
        <legend className="sr-only">Personal information</legend>
        <NameFieldInput register={register} errors={errors} />
        <EmailFieldInput register={register} errors={errors} />
        <PhoneFieldInput register={register} errors={errors} />
      </fieldset>

      <PositionsRadioButton
        register={register}
        errors={errors}
        dataPosition={dataPosition}
      />
      <PhotoFieldInput register={register} errors={errors} watch={watch} />
      <SubmitButton isSubmitting={isSubmitting} isValid={isValid} />
    </form>
  );
};

export default UserForm;
