import { useDispatch } from 'react-redux';
import { AddEmployeeModal } from '../addEmployeeModal';

export const useSetAddUser = () => {
  const dispatch = useDispatch();

  const handleOnSubmit = ({
    accountHolderName,
    accountNumber,
    address,
    bankName,
    branchName,
    city,
    confirmAccountNumber,
    country,
    designation,
    email,
    fistName,
    ifscCode,
    lastName,
    mobile_no,
    pinCode,
    secretary,
    state,
  }: AddEmployeeModal) => {

  };

  return { handleOnSubmit };
};
