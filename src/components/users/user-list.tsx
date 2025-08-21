import UserItem from "./user-item";
import { User } from "@/types/user";

interface UserListProps {
  userDataCurrent: User[];
}

const userListStyles = "flex flex-col gap-[20px] justify-center items-center  mt-[50px] md:flex-row md:flex-wrap md:gap-[16px] lg:gap-[29px] xl:w-[1168px] xl:mx-auto";

const UserList = ({ userDataCurrent }: UserListProps) => {
  return (
    <ul className={userListStyles}>
      {userDataCurrent.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </ul>
  );
};

export default UserList;
