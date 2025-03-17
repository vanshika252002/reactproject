import * as Yup from 'yup';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { FormikHelpers } from 'formik';
import { auth } from '../Components/firebase';

interface SignUpFormValues {
  email: string;
  password: string;
  confirmPassword: string;
}

export const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm Password is required'),
});

export const handleSignUpSubmit = async (
  values: SignUpFormValues,
  { resetForm }: FormikHelpers<SignUpFormValues>
) => {
  try {
    await createUserWithEmailAndPassword(auth, values.email, values.password);
    console.log('User registered successfully');
  } catch (error) {
    console.error(error);
  }
  alert('Form submitted successfully!');
  console.log('Form Data:', values);
  resetForm();
};
