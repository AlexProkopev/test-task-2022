import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { fetchUsers } from '@/redux/users/services';
import { selectCurrentUser, selectUsers } from '@/redux/users/user.selectors';
import { User, UserReq } from '@/types/user';
import { useEffect, useState } from 'react'

export default function UsersHooks() {
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
    {handleLoadMore,userDataCurrent,userData}
  )
}
