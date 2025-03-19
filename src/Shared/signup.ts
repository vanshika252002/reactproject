import * as Yup from 'yup';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { FormikHelpers } from 'formik';
import { auth } from '../Components/firebase';
import { DATA } from '../Views';

interface SignUpFormValues {
  email: string;
  password: string;
  confirmPassword: string;
}
export const initialValues = { email: '', password: '', confirmPassword: '' };
export const validationSchema = Yup.object({
  email: Yup.string().email(DATA.InvalidEmail).required(DATA.EmailRequired),
  password: Yup.string()
    .min(6, DATA.PasswordLength)
    .required(DATA.PasswordRequired),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref(DATA.Password)], DATA.PasswordMatching)
    .required(DATA.ConfirmPasswordRequired),
});

export const handleSignUpSubmit = async (
  values: SignUpFormValues,
  { resetForm }: FormikHelpers<SignUpFormValues>
) => {
  try {
    await createUserWithEmailAndPassword(auth, values.email, values.password);
  } catch (error) {
    console.error(error);
  }
  resetForm();
};
