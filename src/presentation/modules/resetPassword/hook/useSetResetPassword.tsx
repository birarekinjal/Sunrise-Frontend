import { useDispatch } from 'react-redux';
import { ResetPasswordModal } from '../resetPasswordModal';

export const useSetResetPassword = () => {
  const dispatch = useDispatch();

  const handleOnSubmit = ({ password, confirm_password }:ResetPasswordModal) => {
    
  };

  return { handleOnSubmit };
};