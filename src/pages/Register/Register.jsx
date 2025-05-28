import React, { use } from 'react';
import { NavLink } from 'react-router';
import Lottie from 'lottie-react';
import logo from '../../assets/logo.png';
import RegisterAnimation from '../../assets/lottie/register.json';
import { AuthContext } from '../../context/auth/AuthContext';

const Register = () => {

    const { createUser } = use(AuthContext);


    const handleRegister = async(e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.Name.value;
        const photoURL = form.PhotoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        try {
            const userCredential = await createUser(email, password);
            const user = userCredential.user;

            // Update display name and photo URL
            // await user.updateProfile({ displayName: name, photoURL });

            console.log('User registered and profile updated:', user);

            // Optional: Reset form and provide success feedback
            form.reset();
            alert('Registration successful!');
        } catch (error) {
            console.error('Error registering user:', error);
            alert(error.message);
        }
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
                        Register your account
                    </h2>
                </div>

                <div className="mt-6">
                    <button className="w-full flex items-center justify-center gap-2 rounded-md bg-primary px-3 py-1.5 text-sm font-semibold text-white shadow hover:bg-indigo-500 focus:outline-2 focus:outline-offset-2 focus:outline-primary">
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
                        Register with Google
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

                <form onSubmit={handleRegister} className="space-y-5">
                    <div>
                        <label htmlFor="Name" className="block text-sm font-medium">
                            Name *
                        </label>
                        <input
                            id="Name"
                            name="Name"
                            type="text"
                            required
                            autoComplete="name"
                            className="mt-1 block w-full rounded-md px-3 py-2 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>

                    <div>
                        <label htmlFor="PhotoURL" className="block text-sm font-medium">
                            Photo URL *
                        </label>
                        <input
                            id="PhotoURL"
                            name="PhotoURL"
                            type="text"
                            required
                            autoComplete="off"
                            className="mt-1 block w-full rounded-md px-3 py-2 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                    </div>

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
                        <label htmlFor="password" className="block text-sm font-medium">
                            Password *
                        </label>
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
                        Register
                    </button>
                </form>

                <p className="mt-6 text-center text-sm text-gray-500">
                    Already have an account?{' '}
                    <NavLink
                        to="/SignIn"
                        className="font-semibold text-primary hover:text-indigo-500"
                    >
                        Sign In
                    </NavLink>
                </p>
            </div>

            {/* Animation Section */}
            <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
                <Lottie animationData={RegisterAnimation} loop={true} style={{ height: 500 }} />
            </div>
        </div>
    );
};

export default Register;
