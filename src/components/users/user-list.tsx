import UserItem from "./user-item";
import { User } from "@/types/user";
import UsersSkeleton from "./users-skeleton";
import { useAppSelector } from "@/redux/hooks";
import { selectIsLoading } from "@/redux/users/user.selectors";

interface UserListProps {
  userDataCurrent: User[];
}

const userListStyles =
  "flex flex-col gap-[20px] justify-center items-center  mt-[50px] md:flex-row md:flex-wrap md:gap-[16px] lg:gap-[29px] xl:w-[1168px] xl:mx-auto";

const UserList = ({ userDataCurrent }: UserListProps) => {
  const isLoading = useAppSelector(selectIsLoading);

  if (isLoading) {
    return (
      <ul className={userListStyles}>
        {[...Array(3)].map((_, i) => (
          <li key={`skeleton-${i}`}>
            <UsersSkeleton />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className={userListStyles}>
      {userDataCurrent.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </ul>
  );
};

export default UserList;
