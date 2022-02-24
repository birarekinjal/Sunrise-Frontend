import { useDispatch } from 'react-redux';

export const useSetAddUser = () => {
  const dispatch = useDispatch();

  const handleOnSubmit = (data: any) => {
    
  };

  return { handleOnSubmit };
};
