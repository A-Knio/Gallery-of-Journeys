import React, {useState} from "react";
import Logo from "../images/gjlogo.svg";
import { Link } from "react-router-dom";
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';
import {useForm} from 'react-hook-form'




    function Signupform(props) {
        const [formState, setFormState] = useState({ email: '', username: '', password: '' });
        const [addUser] = useMutation(ADD_USER);
    
        const handleFormSubmit = async (event) => {
            event.preventDefault();
            try {
                const { data } = await addUser({
                    variables: {
                        email: formState.email,
                        username: formState.username,
                        password: formState.password,
                    },
                });
                const token = data.addUser.token;
                Auth.login(token);
            } catch (err) {
                console.error('Error signing up:', err);
            }
        };
    
        const handleChange = (event) => {
            const { name, value } = event.target;
            setFormState({
                ...formState,
                [name]: value,
            });
        };
    
        return(

        <div>
            <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
                <div>
                    <a href="/">
                        <img src={Logo} alt="" />
                    </a>
                </div>
                <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
                    <form onSubmit={handleFormSubmit}>
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Username
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    name="username"
                                    className="block hover:bg-slate-100 focus:bg-white w-full h-7 mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    onChange={handleChange}
                               />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Email
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="email"
                                    name="email"
                                    className="block hover:bg-slate-100 focus:bg-white w-full mt-1 h-7 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Password
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="password"
                                    name="password"
                                    className="block hover:bg-slate-100 focus:bg-white w-full mt-1 h-7 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    onChange={handleChange}
                               />
                            </div>
                        </div>
                        {/* <div className="mt-4">
                            <label
                                htmlFor="password_confirmation"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Confirm Password
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="password"
                                    name="password_confirmation"
                                    className="block hover:bg-slate-100 focus:bg-white w-full mt-1 h-7 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    onChange={handleChange}
                                />
                            </div>
                        </div> */}
                        <a
                            href="#"
                            className="text-xs text-lime-700 hover:underline"
                        >
                            Forget Password?
                        </a>
                        <div className="flex items-center mt-4">
                            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-lime-700 rounded-md hover:bg-lime-600 focus:outline-none focus:bg-lime-600"
                            type="submit"
                            >        
                                Signup
                            </button>
                        </div>
                    </form>
                    <div className="mt-4 text-grey-600">
                        Already have an account?{" "}
                        <span>
                            <Link to='/login' className="text-lime-700 hover:underline" >
                                Log in
                            </Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Signupform;