import { useDispatch } from 'react-redux';

export const useSetForgotPassword = () => {
  const dispatch = useDispatch();

  const handleOnSubmit = (data: any) => {
    
  };

  return { handleOnSubmit };
};
