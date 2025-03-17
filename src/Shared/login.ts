import * as Yup from 'yup';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FormikHelpers } from 'formik';
import { auth } from '../Components/firebase';
import { updateAuthTokenRedux } from '../Store/Common';

interface ValuesLogin {
  email: string;
  password: string;
}
export const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

export const onSubmit = async (
  values: ValuesLogin,
  { resetForm }: FormikHelpers<ValuesLogin>,
  dispatch: any
) => {
  try {
    console.log('Submitting login form with values:', values);
    const userCredential = await signInWithEmailAndPassword(
      auth,
      values.email,
      values.password
    );
    const token = await userCredential.user.getIdToken();
    console.log('User token via email ', token);
    dispatch(updateAuthTokenRedux({ token }));

    console.log(
      'User token  logged in successfully:',
      userCredential.user.getIdToken()
    );
    alert('Login successful!');
  } catch (error: any) {
    console.error('Login error:', error);
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
