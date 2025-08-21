import { FieldErrors, UseFormRegister } from "react-hook-form";
import { UserFormValues } from "../form-schema";
import { radioClass } from "../form-styles";
import { Position } from "@/types/user";

type PositionsRadioButtonProps = {
  register: UseFormRegister<UserFormValues>;
  errors: FieldErrors<UserFormValues>;
  dataPosition: Position | null;
};

const PositionsRadioButton = ({
  register,
  errors,
  dataPosition,
}: PositionsRadioButtonProps) => {
  return (
    <fieldset className="flex flex-col gap-3  text-black-87 text-base font-normal leading-relaxed">
      <legend className="sr-only">Upload photo</legend>
      <p>Select your position</p>
      {dataPosition?.positions?.map((position) => (
        <label
          key={position.id}
          className="flex items-center gap-3 cursor-pointer "
        >
          <input
            type="radio"
            value={position.id}
            {...register("position_id")}
            className={radioClass}
          />
          <span>{position.name}</span>
        </label>
      ))}

      {errors.position_id && (
        <p className="text-red-500">{errors.position_id.message}</p>
      )}
    </fieldset>
  );
};

export default PositionsRadioButton;
