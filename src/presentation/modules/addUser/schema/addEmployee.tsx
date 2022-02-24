import * as Yup from 'yup';
import { yupMessages } from '../../../../application/constants/yupMessageConstant';

const { email, required, validNumber, typeError } = yupMessages;

const addEmployee = Yup.object({
  fistName: Yup.string().required(required),
  lastName: Yup.string().required(required),
  ifscCode: Yup.string().required(required),
  email: Yup.string().required(required).email(email),
  mobile_no: Yup.number()
    .typeError(typeError)
    .integer(typeError)
    .required(required)
    .min(1000000000, validNumber)
    .max(9999999999, validNumber),
  bankName: Yup.string().required(required),
  address: Yup.string().required(required),
  branchName: Yup.string().required(required),
  pinCode: Yup.string().required(required),
  city: Yup.string().required(required),
  accountHolderName: Yup.string().required(required),
  state: Yup.string().required(required),
  country: Yup.string().required(required),
  accountNumber: Yup.string().required(required),
  designation: Yup.string().required(required),
  secretary: Yup.string().required(required),
  confirmAccountNumber: Yup.string().required(required),
});

export default addEmployee;
