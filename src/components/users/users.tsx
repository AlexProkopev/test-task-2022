"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchUsers, User, UserReq } from "@/redux/users/services";
import { selectCurrentUser, selectUsers } from "@/redux/users/user.selectors";
import Image from "next/image";
import { useEffect, useState } from "react";

const Users = () => {
  const dispatch = useAppDispatch();
  const userData: UserReq | null = useAppSelector(selectUsers);
  const userDataCurrent: User[] | [] = useAppSelector(selectCurrentUser);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchUsers({ page, count: 6 }));
  }, [dispatch, page]);

  const handleLoadMore = (): void => {
    if (userData!.page < userData!.total_pages) setPage((prev) => prev + 1);
  };

  return (
    <section className="pt-[140px]">
      <h3 className="w-[297px] text-center mx-auto text-black-87 text-4xl font-normal leading-10">
        Working with GET request
      </h3>
      <ul className="flex flex-col gap-[20px] justify-center items-center  mt-[50px] md:flex-row md:flex-wrap md:gap-[16px] lg:gap-[29px] xl:w-[1168px] xl:mx-auto">
        {userDataCurrent.map((user) => (
          <li
            key={user.id}
            className="w-[328px] py-[20px] px-[20px] bg-[#FFFFFF] rounded-[10px] md:w-[344px] lg:w-[282px]"
          >
            <Image
              src={user.photo}
              alt={user.name}
              width={70}
              height={70}
              className="rounded-full mx-auto"
            />
            <p className="text-center mt-[20px] text-black-87 text-base font-normal  leading-relaxed truncate">
              {user.name}
            </p>
            <p className="text-center mt-[20px] text-black-87 text-base font-normal  leading-relaxed truncate">
              {user.position}
            </p>
            <p className="text-center  text-black-87 text-base font-normal  leading-relaxed truncate">
              {user.email}
            </p>
            <p className="text-center  text-black-87 text-base font-normal  leading-relaxed truncate">
              {user.phone}
            </p>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={handleLoadMore}
        disabled={!userData || userData.page >= userData.total_pages}
        className={`block mx-auto mt-[40px] text-center text-black-87 bg-primary text-base font-normal leading-relaxed rounded-[80px] py-[4px] px-[22px] ${
          userData && userData.page < userData.total_pages ? "" : "bg-gray-200"
        }`}
      >
        Load more
      </button>
    </section>
  );
};

export default Users;
