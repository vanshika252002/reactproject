// import React from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import { Input, Button } from '../../Components/Common';
// import { Helmet } from 'react-helmet-async';
// import {
//   createUserWithEmailAndPassword,
//   signInWithPopup,
//   GoogleAuthProvider,
// } from 'firebase/auth';
// // import { auth } from '../../Components/firebase';
// //import { google } from '../../assets';
// import './signup.css';
// import { Link } from 'react-router-dom';
// //import { ROUTES } from '../../Shared/Constants';

// const provider = new GoogleAuthProvider();

// const validationSchema = Yup.object({
//   email: Yup.string()
//     .email('Invalid email format')
//     .required('Email is required'),
//   password: Yup.string()
//     .min(6, 'Password must be at least 6 characters')
//     .required('Password is required'),
//   confirmPassword: Yup.string()
//     .oneOf([Yup.ref('password')], 'Passwords must match')
//     .required('Confirm Password is required'),
// });

// const SignUp: React.FC = () => {
//   const handleGoogleSignIn = async () => {
//     try {
//       const result = await signInWithPopup(auth, provider);
//       console.log('Google sign-in successful:', result.user);
//     } catch (error) {
//       console.error('Google sign-in error:', error);
//     }
//   };

//   //console.log(" google provider  returns me ",provider);

//   return (
//     <div className="signup-container">
//       <Helmet>
//         <title>SignUp Page</title>
//         <meta name="author" content="by vanshika" />
//       </Helmet>
//       <Formik
//         initialValues={{ email: '', password: '', confirmPassword: '' }}
//         validationSchema={validationSchema}
//         onSubmit={async (values, { resetForm }) => {
//           try {
//             await createUserWithEmailAndPassword(
//               auth,
//               values.email,
//               values.password
//             );
//             console.log('User registered successfully');
//           } catch (error) {
//             console.error(error);
//           }
//           alert('Form submitted successfully!');
//           console.log('Form Data:', values);
//           resetForm();
//         }}
//       >
//         {({ handleChange, values }) => (
//           <Form className="signup-form">
//             <h1>Sign Up</h1>

//             <label>Email</label>
//             <Field
//               as={Input}
//               type="email"
//               name="email"
//               value={values.email}
//               onChange={handleChange}
//             />
//             <ErrorMessage name="email" component="div" className="error" />

//             <label>Password</label>
//             <Field
//               as={Input}
//               type="password"
//               name="password"
//               value={values.password}
//               onChange={handleChange}
//             />
//             <ErrorMessage name="password" component="div" className="error" />

//             <label>Confirm Password</label>
//             <Field
//               as={Input}
//               type="password"
//               name="confirmPassword"
//               value={values.confirmPassword}
//               onChange={handleChange}
//             />
//             <ErrorMessage
//               name="confirmPassword"
//               component="div"
//               className="error"
//             />

//             <Button label="Sign Up" type="submit" />

//             <div className="or-divider">OR</div>

//             <button
//               type="button"
//               className="google-btn"
//               onClick={handleGoogleSignIn}
//             >
//               <img src={'google'} alt="Google" />
//             </button>
//             <p>
//               Already have an account?
//               <Link to={'ROUTES.LOGIN'}> Login </Link>
//             </p>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export default SignUp;
