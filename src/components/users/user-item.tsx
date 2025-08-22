import { User } from "@/types/user";
import Image from "next/image";

interface UserItemProps {
  user: User;
}

const textStyles = "text-center mt-[20px] text-black-87 text-base font-normal  leading-relaxed truncate ";
const itemStyles = "w-[328px] py-[20px] px-[20px] bg-[#FFFFFF] rounded-[10px] md:w-[344px] lg:w-[282px]"

const UserItem = ({ user }: UserItemProps) => {


  return (
    <li
      className={itemStyles}
    >
      <Image
        src={user.photo}
        alt={user.name}
        width={70}
        height={70}
        className="rounded-full mx-auto"
      />
      <p className={textStyles + 'mt-[20px]'}>
        {user.name}
      </p>
      <p className={textStyles + 'mt-[20px]'}>
        {user.position}
      </p>
      <p className={textStyles}>
        {user.email}
      </p>
      <p className={textStyles}>
        {user.phone}
      </p>
    </li>
  );
};

export default UserItem;
