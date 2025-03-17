import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';

import { ROUTES, initialValues } from '../../Shared/Constants';
import { validationSchema, handleSignUpSubmit } from '../../Shared/signup';
import { Button } from '../../Components/Common';
import useSignUp from './hooks/useSignUp';

import { google } from '../../assets';
import './signup.css';

const SignUp: React.FC = () => {
  const { handleGoogleSignIn } = useSignUp();

  return (
    <div className="signup-container">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSignUpSubmit}
      >
        <Form className="signup-form">
          <h1>Sign Up</h1>

          <label>Email</label>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" className="error" />

          <label>Password</label>
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" className="error" />

          <label>Confirm Password</label>
          <Field type="password" name="confirmPassword" />
          <ErrorMessage
            name="confirmPassword"
            component="div"
            className="error"
          />

          <Button label="Sign Up" type="submit" />

          <div className="or-divider">OR</div>

          <button
            type="button"
            className="google-btn"
            onClick={handleGoogleSignIn}
          >
            <img src={google} alt="Google" />
          </button>
          <p>
            Already have an account?
            <Link to={ROUTES.LOGIN}> Login </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default SignUp;
