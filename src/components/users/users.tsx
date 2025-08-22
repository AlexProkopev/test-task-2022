"use client";

import UsersHooks from "./users-hooks";
import UserList from "./user-list";
import { UserReq } from "@/types/user";

export const titleStyle =
  "w-[297px] text-center mx-auto text-black-87 text-4xl font-normal leading-10 md:text-4xl md:w-[704px]";
const buttonStyle = (userData: UserReq | null) =>
  `block mx-auto mt-[40px] text-center text-black-87 bg-primary text-base font-normal leading-relaxed rounded-[80px] py-[4px] px-[22px] ${
    userData && userData.page < userData.total_pages ? "" : "bg-gray-200"
  }`;

const Users = () => {
  const { handleLoadMore, userDataCurrent, userData } = UsersHooks();

  return (
    <section className="pt-[140px]" id="users">
      <h3 className={titleStyle}>Working with GET request</h3>
      <UserList userDataCurrent={userDataCurrent} />

      {!userData || userData.page >= userData.total_pages ? (
        <p className="text-center text-gray-500 mt-[20px]">No more users to load</p>
      ) : (
        <button
          type="button"
          onClick={handleLoadMore}
          disabled={!userData || userData.page >= userData.total_pages}
          className={buttonStyle(userData)}
        >
          Load more
        </button>
      )}
    </section>
  );
};

export default Users;
