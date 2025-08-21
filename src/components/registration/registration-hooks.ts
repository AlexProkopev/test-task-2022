import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { createUser, fetchPosition } from '@/redux/users/services';
import { selectPosition } from '@/redux/users/user.selectors';
import { useEffect } from 'react'
import { SubmitHandler } from 'react-hook-form';
import { UserFormValues } from './form-schema';
import { fetchToken } from '@/redux/instance';

function RegistrationHooks() {
     const dispatch = useAppDispatch();
      const dataPosition = useAppSelector(selectPosition);
      
      useEffect(() => {
        dispatch(fetchPosition());
      }, [dispatch]);
    
      const onSubmit: SubmitHandler<UserFormValues> = async (data) => {
       
        const token = await  fetchToken()
        if (!token) throw new Error("No token");
        await dispatch(createUser(data));
      };
  return (
    {dataPosition, onSubmit}
  )
}

export default RegistrationHooks