import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Input, Button } from "../../Components/Common";
import { Helmet } from "react-helmet-async";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../Components/firebase";
import { google } from "../../assets";
import './login.css';
import { Link } from "react-router-dom";
import { ROUTES} from "../../Shared/Constants";
const provider = new GoogleAuthProvider();

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

const Login: React.FC = () => {
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Google sign-in successful:", result.user);
    } catch (error) {
      console.error("Google sign-in error:", error);
    }
  };




  return (
    <div className="signup-container">
      <Helmet>
        <title>Login Page</title>
        <meta name="author" content="by vanshika" />
      </Helmet>

      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={async (values, { resetForm }) => {
          try {
            await signInWithEmailAndPassword(auth, values.email, values.password);
            console.log("User logged in successfully");
          } catch (error) {
            console.error("Login error:", error);
          }
          console.log("Login Data:", values);
          resetForm();
        }}
      >
        {({ handleChange, values }) => (
          <Form className="signup-form">
            
            <h1>Login</h1>

            <label>Email</label>
            <Field as={Input} type="email" name="email" value={values.email} onChange={handleChange} />
            <ErrorMessage name="email" component="div" className="error" />

            <label>Password</label>
            <Field as={Input} type="password" name="password" value={values.password} onChange={handleChange} />
            <ErrorMessage name="password" component="div" className="error" />

            <Button label="Login" type="submit" />
            <div className="or-divider">OR</div>
            <button type="button" className="google-btn" onClick={handleGoogleSignIn}>
              <img src={google} alt="Google" />
            </button>
          <p>Don't have an account? <Link to={ROUTES.SIGNUP}>Sign up</Link></p>
          </Form>
          
        )}
      </Formik>
    </div>
  );
};

export default Login;
