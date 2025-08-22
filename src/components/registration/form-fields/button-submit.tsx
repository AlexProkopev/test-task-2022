import { buttonClass } from "../form-styles";

type SubmitButtonProps = {
  isSubmitting: boolean;
  isValid: boolean;
}

const SubmitButton = ({ isSubmitting, isValid }: SubmitButtonProps) => {
  const handleClick = () => {
    if (!isValid) return;
    const section = document.getElementById("users");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      type="submit"
      onClick={handleClick}
      disabled={!isValid}
      className={`${buttonClass} mt-[54px] ${
        !isValid
          ? "bg-gray-400 cursor-not-allowed text-white/90"
          : "bg-primary"
      }`}
    >
      {isSubmitting ? "Sign up..." : "Sign up"}
    </button>
  );
};


export default SubmitButton;
