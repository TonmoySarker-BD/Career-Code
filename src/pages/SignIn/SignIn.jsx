import React, { use } from 'react';
import { NavLink } from 'react-router';
import Lottie from 'lottie-react';
import logo from '../../assets/logo.png';
import SignInAnimation from '../../assets/lottie/register.json'; // use another lottie if available
import { AuthContext } from '../../context/auth/AuthContext';


const SignIn = () => {
    const {signInUser, signInWithGoogle} = use(AuthContext);

    // Handle Google Sign In
    const handleGoogleSignIn = async () => {
        try { 
            const userCredential = await signInWithGoogle();
            const user = userCredential.user;
            console.log('User signed in with Google:', user);
        } catch (error) {
            console.error('Error signing in with Google:', error);  
            alert("Google sign-in failed: " + error.message);
        }
    };

    // Handle Sign In
    const handleSignIn = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("Signed in:", user);
            })
            .catch((error) => {
                console.error(error.message);
                alert("Login failed: " + error.message);
            });
    };

    return (
        <div className="flex flex-col lg:flex-row items-center max-w-5xl mx-auto px-6 py-12 lg:px-8">
            {/* Form Section */}
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <div className="sm:mx-auto sm:w-full">
                    <img
                        alt="Opptly Logo"
                        src={logo}
                        className="mx-auto h-20 w-auto"
                    />
                    <h2 className="text-center text-2xl font-bold mt-4">
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-6">
                    <button onClick={handleGoogleSignIn} className="w-full flex items-center justify-center gap-2 rounded-md bg-primary px-3 py-1.5 text-sm font-semibold text-white shadow hover:bg-indigo-500 focus:outline-2 focus:outline-offset-2 focus:outline-primary">
                        <svg
                            aria-label="Google logo"
                            width="24"
                            height="24"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                        >
                            <path d="M0 0h512v512H0z" fill="none" />
                            <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341" />
                            <path fill="#4285f4" d="M386 400a140 175 0 0053-179H260v74h102q-7 37-38 57" />
                            <path fill="#fbbc02" d="M90 341a208 200 0 010-171l63 49q-12 37 0 73" />
                            <path fill="#ea4335" d="M153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55" />
                        </svg>
                        Sign in with Google
                    </button>
                </div>

                <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="bg-white px-2 text-gray-500">Or continue with</span>
                    </div>
                </div>

                <form onSubmit={handleSignIn} className="space-y-5">
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

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium">
                            Password *
                        </label>
                        {/* Forgot Password Link */}
                        <div className="">
                            <NavLink
                                to="/forgot-password"
                                className="text-sm font-medium text-primary hover:text-indigo-500"
                            >
                                Forgot password?
                            </NavLink>
                        </div>
                        </div>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            autoComplete="current-password"
                            className="mt-1 block w-full rounded-md px-3 py-2 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>



                    <button
                        type="submit"
                        className="w-full rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                    >
                        Sign In
                    </button>


                </form>

                <p className="mt-6 text-center text-sm text-gray-500">
                    Don't have an account?{' '}
                    <NavLink
                        to="/Register"
                        className="font-semibold text-primary hover:text-indigo-500"
                    >
                        Register
                    </NavLink>
                </p>
            </div>

            {/* Animation Section */}
            <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
                <Lottie animationData={SignInAnimation} loop={true} style={{ height: 500 }} />
            </div>
        </div>
    );
};

export default SignIn;
