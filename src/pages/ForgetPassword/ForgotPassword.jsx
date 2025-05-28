import React, { use } from 'react';
import { NavLink } from 'react-router';
import Lottie from 'lottie-react';
import logo from '../../assets/logo.png';
import ForgotAnimation from '../../assets/lottie/register.json';
import { AuthContext } from '../../context/auth/AuthContext';

const ForgotPassword = () => {
  const {forgotPassword} = use(AuthContext)
  const handleReset = (e) => {
    e.preventDefault();
    // Add password reset logic (e.g., Firebase)
    const email = e.target.email.value;
    forgotPassword(email)
      .then(() => {
        alert('Password reset email sent');
      })
      .catch((error) => {
        console.error('Error sending password reset email:', error);
        alert(error.message);
      });
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row items-center max-w-5xl mx-auto px-6 py-12 lg:px-8">
      {/* Form Section */}
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="sm:mx-auto sm:w-full">
          <img
            alt="Opptly Logo"
            src={logo}
            className="mx-auto h-20 w-auto"
          />
          <h2 className="text-center text-2xl font-bold mt-4">
            Reset your password
          </h2>
          <p className="mt-2 text-center text-sm text-base-500">
            Enter your email address and we’ll send you a link to reset your password.
          </p>
        </div>

        <form onSubmit={handleReset} className="mt-6 space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email address *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="mt-1 block w-full rounded-md px-3 py-2 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <button
            type="submit" onClick={handleReset}
            className="w-full rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            Send Reset Link
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          Back to{' '}
          <NavLink to="/signin" className="font-semibold text-primary hover:text-indigo-500">
            Sign In
          </NavLink>
        </p>
      </div>

      {/* Animation Section */}
      <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
        <Lottie animationData={ForgotAnimation} loop={true} style={{ height: 500 }} />
      </div>
    </div>
  );
};

export default ForgotPassword;
