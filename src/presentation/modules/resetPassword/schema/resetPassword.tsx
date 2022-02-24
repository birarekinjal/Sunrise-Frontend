import * as Yup from 'yup';
import { yupMessages } from '../../../../application/constants/yupMessageConstant';

const { required, oneOf, matches } = yupMessages;

const resetPassword = Yup.object({
  password: Yup.string()
    .required(required)
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      matches,
    ),
  confirm_password: Yup.string()
    .required(required)
    .oneOf([Yup.ref('password')], oneOf)
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      matches,
    ),
});

export default resetPassword;
