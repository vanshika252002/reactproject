import * as Yup from 'yup';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FormikHelpers } from 'formik';
import { auth } from '../Components/firebase';
import { DATA } from '../Views';

import { updateAuthTokenRedux } from '../Store/Common';

interface ValuesLogin {
  email: string;
  password: string;
}
export const initialValues = { email: '', password: '' };
export const validationSchema = Yup.object({
  email: Yup.string().email(DATA.InvalidEmail).required(DATA.EmailRequired),
  password: Yup.string()
    .min(6, DATA.PasswordLength)
    .required(DATA.PasswordRequired),
});

export const onSubmit = async (
  values: ValuesLogin,
  { resetForm }: FormikHelpers<ValuesLogin>,
  dispatch: any
) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      values.email,
      values.password
    );
    const token = await userCredential.user.getIdToken();
    dispatch(updateAuthTokenRedux({ token }));
  } catch (error: any) {
    if (error.code === 'auth/user-not-found') {
      alert('No account found with this email. Please sign up.');
    } else if (error.code === 'auth/wrong-password') {
      alert('Incorrect password. Please try again.');
    } else {
      alert('Login failed. Please check your connection and try again.');
    }
  } finally {
    resetForm();
  }
};
