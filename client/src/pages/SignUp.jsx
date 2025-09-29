import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import AppHeader from "../components/AppHeader";
import Toast from "../components/Toast";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[!@#$%^&*(),.?":{}|<>]/, "Password must contain at least one symbol")
    .matches(/\d/, "Password must contain at least one number")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], "Passwords must match")
    .required("Please confirm your password")
});

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [toast, setToast] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Wake up the server
    fetch('https://fit-fam-server.onrender.com/exercises').catch(() => {});
  }, []);

  const getPasswordRequirements = (password) => ({
    length: password.length >= 8,
    symbol: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    number: /\d/.test(password)
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    const { email, password } = values;
    const username = email.split('@')[0];
    
    try {
      const response = await fetch('https://group-fitness-app.onrender.com/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ username, email, password })
      });
      
      if (response.ok) {
        const data = await response.json();
        setToast({ message: "Sign up successful!", type: "success" });
        
        setTimeout(() => {
          navigate('/dashboard');
        }, 1000);
      } else {
        const error = await response.json();
        setToast({ message: error.error || "Sign up failed!", type: "error" });
      }
    } catch (error) {
      setToast({ message: "Sign up failed!", type: "error" });
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <div className="bg-background-light dark:bg-background-dark font-display min-h-screen">
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
      <AppHeader isAuthenticated={false} showAuthButtons={true} currentPage="signup" />
      <div className="flex flex-col min-h-screen">
      <main className="flex-grow flex items-center justify-center py-4 sm:py-8 lg:py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row w-full max-w-4xl mx-auto">
          <div className="lg:w-1/2 hidden lg:block">
            <img
              alt="Fitness class"
              className="h-full w-full object-cover rounded-l-xl"
              src="bruce-mars.jpg"
            />
          </div>
          <div className="w-full lg:w-1/2 space-y-4 lg:space-y-8">
            <div className="bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm p-4 sm:p-6 lg:p-8 shadow-xl rounded-xl lg:rounded-r-xl h-full flex flex-col justify-center">
              <div>
                <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl font-black text-background-dark dark:text-background-light">
                  Rise and Shine
                </h1>
                <h2 className="mt-2 lg:mt-4 text-center text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-background-dark dark:text-background-light">
                  Create your account
                </h2>
                <p className="mt-1 lg:mt-2 text-center text-xs sm:text-sm text-background-dark/70 dark:text-background-light/70">
                  Join our community and start your fitness journey today.
                </p>
              </div>
              <Formik
                initialValues={{ email: "", password: "", confirmPassword: "" }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting, values, errors, touched }) => {
                  const requirements = getPasswordRequirements(values.password);
                  const isPasswordValid = Object.values(requirements).every(Boolean);
                  const showRequirements = values.password.length > 0 && !isPasswordValid;
                  const passwordsMatch = values.password === values.confirmPassword && values.confirmPassword !== "";
                  
                  return (
                    <Form className="mt-4 lg:mt-8 space-y-4 lg:space-y-6">
                      <div>
                        <label className="sr-only" htmlFor="email">
                          Email address
                        </label>
                        <Field
                          autoComplete="email"
                          className={`appearance-none rounded-lg relative block w-full px-3 py-2 sm:px-4 sm:py-3 border-2 bg-background-light dark:bg-background-dark placeholder-background-dark/50 dark:placeholder-background-light/50 text-background-dark dark:text-background-light focus:outline-none focus:z-10 text-sm sm:text-base ${
                            errors.email && touched.email
                              ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                              : "border-primary/20 focus:ring-primary focus:border-primary"
                          }`}
                          id="email"
                          name="email"
                          placeholder="Email address"
                          type="email"
                        />
                        <ErrorMessage name="email" component="div" className="mt-1 text-sm text-red-500" />
                      </div>
                      <div className="relative">
                        <label className="sr-only" htmlFor="password">
                          Password
                        </label>
                        <Field
                          autoComplete="new-password"
                          className={`appearance-none rounded-lg relative block w-full px-3 py-2 sm:px-4 sm:py-3 pr-10 sm:pr-12 border-2 transition-all duration-300 bg-background-light dark:bg-background-dark placeholder-background-dark/50 dark:placeholder-background-light/50 text-background-dark dark:text-background-light focus:outline-none focus:z-10 text-sm sm:text-base ${
                            values.password && isPasswordValid
                              ? "border-green-500 shadow-green-500/20 shadow-lg focus:ring-green-500 focus:border-green-500"
                              : values.password && !isPasswordValid
                              ? "border-red-500 shadow-red-500/20 shadow-lg focus:ring-red-500 focus:border-red-500"
                              : "border-primary/20 focus:ring-primary focus:border-primary"
                          }`}
                          id="password"
                          name="password"
                          placeholder="Password"
                          type={showPassword ? "text" : "password"}
                        />
                        <button
                          type="button"
                          className="absolute inset-y-0 right-0 pr-3 flex items-center"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <svg className="h-5 w-5 text-background-dark/50 dark:text-background-light/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                            </svg>
                          ) : (
                            <svg className="h-5 w-5 text-background-dark/50 dark:text-background-light/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                          )}
                        </button>
                        
                        {/* Password Requirements Dropdown */}
                        <div className={`absolute top-full left-0 right-0 mt-2 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm border border-primary/20 rounded-lg p-4 shadow-lg transition-all duration-300 z-10 ${
                          showRequirements ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
                        }`}>
                          <div className="space-y-2">
                            <div className={`flex items-center gap-2 transition-colors duration-200 ${
                              requirements.length ? "text-green-600" : "text-red-500"
                            }`}>
                              {requirements.length ? (
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                              ) : (
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                              )}
                              <span className="text-sm">At least 8 characters</span>
                            </div>
                            <div className={`flex items-center gap-2 transition-colors duration-200 ${
                              requirements.symbol ? "text-green-600" : "text-red-500"
                            }`}>
                              {requirements.symbol ? (
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                              ) : (
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                              )}
                              <span className="text-sm">At least one symbol (!@#$%^&*)</span>
                            </div>
                            <div className={`flex items-center gap-2 transition-colors duration-200 ${
                              requirements.number ? "text-green-600" : "text-red-500"
                            }`}>
                              {requirements.number ? (
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                              ) : (
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                              )}
                              <span className="text-sm">At least one number</span>
                            </div>
                          </div>
                        </div>
                        <ErrorMessage name="password" component="div" className="mt-1 text-sm text-red-500" />
                      </div>
                      <div className="relative">
                        <label className="sr-only" htmlFor="confirmPassword">
                          Confirm Password
                        </label>
                        <Field
                          autoComplete="new-password"
                          className={`appearance-none rounded-lg relative block w-full px-3 py-2 sm:px-4 sm:py-3 pr-10 sm:pr-12 border-2 transition-all duration-300 bg-background-light dark:bg-background-dark placeholder-background-dark/50 dark:placeholder-background-light/50 text-background-dark dark:text-background-light focus:outline-none focus:z-10 text-sm sm:text-base ${
                            values.confirmPassword && passwordsMatch
                              ? "border-green-500 shadow-green-500/20 shadow-lg focus:ring-green-500 focus:border-green-500"
                              : values.confirmPassword && !passwordsMatch
                              ? "border-red-500 shadow-red-500/20 shadow-lg focus:ring-red-500 focus:border-red-500"
                              : "border-primary/20 focus:ring-primary focus:border-primary"
                          }`}
                          id="confirmPassword"
                          name="confirmPassword"
                          placeholder="Confirm Password"
                          type={showConfirmPassword ? "text" : "password"}
                        />
                        <button
                          type="button"
                          className="absolute inset-y-0 right-0 pr-3 flex items-center"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                          {showConfirmPassword ? (
                            <svg className="h-5 w-5 text-background-dark/50 dark:text-background-light/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                            </svg>
                          ) : (
                            <svg className="h-5 w-5 text-background-dark/50 dark:text-background-light/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                          )}
                        </button>
                        
                        {/* Password Match Warning */}
                        {values.confirmPassword && !passwordsMatch && (
                          <div className="absolute top-full left-0 right-0 mt-2 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg animate-pulse">
                            <div className="flex items-center gap-2 text-red-600 dark:text-red-400">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                              </svg>
                              <span className="text-sm font-medium">Passwords do not match</span>
                            </div>
                          </div>
                        )}
                        <ErrorMessage name="confirmPassword" component="div" className="mt-1 text-sm text-red-500" />
                      </div>
                      <div>
                        <button
                          className="group relative w-full flex justify-center py-2 sm:py-3 px-4 border border-transparent text-sm sm:text-base font-bold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background-light dark:focus:ring-offset-background-dark text-background-dark bg-primary hover:bg-primary/90 focus:ring-primary disabled:opacity-50"
                          type="submit"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Signing up..." : "Sign Up"}
                        </button>
                      </div>
                    </Form>
                  );
                }}
              </Formik>
              <div className="mt-4 lg:mt-6 text-center">
                <p className="text-xs sm:text-sm text-background-dark/70 dark:text-background-light/70">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="font-medium text-primary hover:text-primary/90"
                  >
                    Log in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      </div>
    </div>
  );
}
