import { useDispatch } from 'react-redux';
import { ForgotPasswordModal } from '../forgotPasswordModal';

export const useSetForgotPassword = () => {
  const dispatch = useDispatch();

  const handleOnSubmit = ({ email }: ForgotPasswordModal) => {
    
  };

  return { handleOnSubmit };
};
