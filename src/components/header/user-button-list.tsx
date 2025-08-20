interface UserButton {
  label: string;
  //   onClick: () => void;
}

const UserButton = ({ label }: UserButton) => {
  return (
    <li>
      <button
        type="button"
        className="py-[4px] px-[29px] bg-primary text-black-87 rounded-[80px]"
      >
        {label}
      </button>
    </li>
  );
};

export default UserButton;
