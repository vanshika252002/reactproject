import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Input, Button } from "../Components/Common";
import { Helmet } from "react-helmet-async";
import "./Global.css";

// Validation Schema using Yup
const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});

const SignUp: React.FC = () => {
  return (
    <div className="signup-container">
      <Helmet>
        <title>SignUp Page</title>
      </Helmet>

      <Formik
        initialValues={{ email: "", password: "", confirmPassword: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          alert("Form submitted successfully!");
          console.log("Form Data:", values);
          resetForm();
        }}
      >
        {({ handleChange, values }) => (
          <Form className="signup-form">
            <h1>Sign Up</h1>

            {/* Email Field */}
            <label>Email</label>
            <Field 
              as={Input} 
              type="email" 
              name="email"
              value={values.email}
              onChange={handleChange} 
            />
            <ErrorMessage name="email" component="div" className="error" />

            {/* Password Field */}
            <label>Password</label>
            <Field 
              as={Input} 
              type="password" 
              name="password" 
              value={values.password}
              onChange={handleChange} 
            />
            <ErrorMessage name="password" component="div" className="error" />

            {/* Confirm Password Field */}
            <label>Confirm Password</label>
            <Field 
              as={Input} 
              type="password" 
              name="confirmPassword"
              value={values.confirmPassword}
              onChange={handleChange} 
            />
            <ErrorMessage name="confirmPassword" component="div" className="error" />

            {/* Submit Button */}
            <Button label="Submit" type="submit" />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUp;
