
import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import Link from "next/link";

export default function Joinin() {
  const loginSchema = yup.object().shape({
    email: yup.string().email().required("Email is required"),
    password: yup.string().required("Password is required"),
  });

  // logout the user
  const handleLogout = () => {};
  // login the user
  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    // send the email and password to the server
    console.log(values);
  };

  return (
    <div className="flex justify-center items-center bg-gray-100">
      <Formik
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
        initialValues={{
          email: "",
          password: "",
        }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          isValid,
          errors,
        }) => (
          <form
            noValidate
            onSubmit={handleSubmit}
            className="w-full max-w-md bg-white px-6 py-4 rounded-lg shadow-md"
          >
            <div className="flex flex-col gap-3">
              <button
                type="button"
                className="flex justify-center items-center w-full py-2 px-4 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition-colors duration-400"
              >
                <FaGoogle size={20} className="mr-auto" />
                <span className="flex-grow text-center text-black">Continue with Google</span>
              </button>
              <button
                type="button"
                className="flex justify-center items-center w-full py-2 px-4 border border-blue-800 text-blue-800 rounded-lg hover:bg-blue-800 hover:text-white transition-colors duration-400"
              >
                <FaFacebook size={20} className="mr-auto" />
                <span className="flex-grow text-center text-black">Continue with Facebook</span>
              </button>
              <p className="my-2 flex items-center font-semibold text-sm text-gray-700 before:content-[''] before:flex-1 before:border-b before:mr-2 after:content-[''] after:flex-1 after:border-b after:ml-2">
                Or connect with
              </p>
              <div className="mb-2">
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-lg ${errors.email ? "border-red-500" : "border-gray-300"}`}
                />
                {errors.email && (
                  <div className="text-red-500 text-sm mt-1">{errors.email}</div>
                )}
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-lg ${errors.password ? "border-red-500" : "border-gray-300"}`}
                />
                {errors.password && (
                  <div className="text-red-500 text-sm mt-1">{errors.password}</div>
                )}
              </div>
              <p className="text-sm text-gray-600">
                By continuing, you agree to our{" "}
                <span className="font-bold">Terms of Service</span> and{" "}
                <span className="font-bold">Privacy Policy</span>
              </p>
              <div className="mb-3 flex items-center">
              <input
               type="checkbox"
               className="mr-2"
               />
            <label className="mr-auto">Remember me</label>
            <Link href="#">
             <div className="text-black no-underline">Forgot Password?</div>
           </Link>
           </div>
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                <span className="font-bold">Agree and Continue</span>
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
