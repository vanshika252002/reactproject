import React from 'react'; // third party libraries
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { ROUTES } from '../../Shared/Constants';
import { Button } from '../../Components/Common'; // constants
import { validationSchema, onSubmit } from '../../Shared/login';
import useLogin from './hooks/useLogin';

import { google } from '../../assets';
import './login.css'; // for styling

const initialValues = { email: '', password: '' };

const Login: React.FC = () => {
  const { handleGoogleLogin } = useLogin();
  const dispatch = useDispatch();

  return (
    <div className="signup-container">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, formikHelpers) =>
          onSubmit(values, formikHelpers, dispatch)
        }
      >
        <Form className="signup-form">
          <h1>Login</h1>

          <label>Email</label>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" className="error" />

          <label>Password</label>
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" className="error" />

          <Button label="Login" type="submit" />

          <div className="or-divider">OR</div>
          <button
            type="button"
            className="google-btn"
            onClick={handleGoogleLogin}
          >
            <img src={google} alt="Google" />
          </button>

          <p>
            Don't have an account? <Link to={ROUTES.SIGNUP}>Sign up</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
