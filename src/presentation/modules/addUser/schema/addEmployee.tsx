import * as Yup from 'yup';

const addEmployee = Yup.object({
  fistName: Yup.string().required('This field is required.'),
  lastName: Yup.string().required('This field is required.'),
  ifscCode: Yup.string().required('This field is required.'),
  email: Yup.string()
    .required('This field is required.')
    .email('Email is invalid'),
  mobile_no: Yup.number()
    .typeError('Value must be a number.')
    .integer('Value must be a number.')
    .required('Required.')
    .min(1000000000, 'Enter valid number')
    .max(9999999999, 'Enter valid number'),
  bankName: Yup.string().required('This field is required.'),
  address: Yup.string().required('This field is required.'),
  branchName: Yup.string().required('This field is required.'),
  pinCode: Yup.string().required('This field is required.'),
  city: Yup.string().required('This field is required.'),
  accountHolderName: Yup.string().required('This field is required.'),
  state: Yup.string().required('This field is required.'),
  country: Yup.string().required('This field is required.'),
  accountNumber: Yup.string().required('This field is required.'),
  designation: Yup.string().required('This field is required.'),
  secretary: Yup.string().required('This field is required.'),
  confirmAccountNumber: Yup.string().required('This field is required.'),
});

export default addEmployee;
