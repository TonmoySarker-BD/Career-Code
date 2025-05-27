import React from 'react';
import logo from '../../assets/logo.png';
import { NavLink } from 'react-router';

const Register = () => {
    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        alt="Opptly Logo"
                        src={logo}
                        className="mx-auto h-30 w-auto"
                    />
                    <h2 className=" text-center text-2xl/9 font-bold ">
                        Register your account
                    </h2>
                </div>

                <div className="mt-5 mx-auto w-full sm:max-w-sm">
                    <button className="btn btn-primary w-full flex  items-center justify-center gap-2 rounded-md bg-primary px-3 py-1.5 text-sm/6 font-semibold shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                        <svg aria-label="Google logo" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#ffffff00"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Register with Google
                    </button>

                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    {/* Or continue with  */}
                    <div className="relative mb-">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center text-sm/6">
                            <span className="bg-white px-2 text-gray-500">Or continue with</span>
                        </div>
                    </div>
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="Name" className="block text-sm/6 font-medium">
                                Name *
                            </label>
                            <div className="mt-2">
                                <input
                                    id="Name"
                                    name="Name"
                                    type="text"
                                    required
                                    autoComplete="name"
                                    className="block w-full rounded-md px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary  sm:text-sm/6"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="PhotoURL" className="block text-sm/6 font-medium">
                                Photo URL *
                            </label>
                            <div className="mt-2">
                                <input
                                    id="PhotoURL"
                                    name="PhotoURL"
                                    type="text"
                                    required
                                    autoComplete="email"
                                    className="block w-full rounded-md px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary  sm:text-sm/6"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm/6 font-medium">
                                Email address *
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    autoComplete="email"
                                    className="block w-full rounded-md px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary  sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm/6 font-medium">
                                Password *
                            </label>


                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    autoComplete="current-password"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary  sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-primary  px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary "
                            >
                                Sign in
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm/6 text-gray-500">
                        Not a member?{' '}
                        <NavLink to="/SignIn" className="font-semibold text-primary hover:text-indigo-500">Sign In</NavLink>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Register;