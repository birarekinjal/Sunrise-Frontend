import * as Yup from 'yup';
import { yupMessages } from '../../../../application/constants/yupMessageConstant';

const { email, required } = yupMessages;

const forgotPassword = Yup.object({
  email: Yup.string().required(required).email(email),
});

export default forgotPassword;
