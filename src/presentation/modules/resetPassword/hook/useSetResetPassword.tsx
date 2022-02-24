import { useDispatch } from 'react-redux';

export const useSetResetPassword = () => {
  const dispatch = useDispatch();

  const handleOnSubmit = (data: any) => {
    
  };

  return { handleOnSubmit };
};