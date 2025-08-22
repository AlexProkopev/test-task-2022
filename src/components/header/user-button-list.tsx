
interface UserButton {
  label: string;
}

const UserButton = ({ label }: UserButton) => {

  return (
    
      <button
        type="button"
        className="py-[4px] px-[29px] bg-primary text-black-87 rounded-[80px]"
      >
        {label}
      </button>
    
  );
};

export default UserButton;
