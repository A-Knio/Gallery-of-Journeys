import React from "react";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";


const Login = () => {
    return (
        <div className="w-full h-screen">
            <img className="hidden sm:block absolute w-full h-full object-cover" src="https://images.unsplash.com/photo-1547623641-d2c56c03e2a7?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
                <div className="fixed w-full px-4 py-4 z-50">
                    <div className="rounded max-w-[450px] h-[600px]  mx-auto bg-black/45 text-slate-200">
                        <div className="max-w-[320px] mx-auto py-16">
                            <h1 className="text-center text-4xl font-semibold"> Login </h1>
                            <form className="w-full flex flex-col py-4" action="">  
                                <label className="text-lg font-medium">Email</label>
                                <input className="p-3 my-2 bg-stone-600" type="email" placeholder="Enter your email"/>
                                {/* <MdEmail className="" size={20} /> */}
                                
                                <label className="text-lg font-medium">Password</label>
                                <input className="p-3 my-2 bg-stone-600" type="password" placeholder="Enter your password"/>
                                {/* <RiLockPasswordLine size={20} /> */}
                                   
                                <button className="bg-gray-900 py-3 my-6 rounded font-semibold" type="submit"> Login </button>
                                <p className="py-8">
                                <span className="text-gray-400"> Want to be a member?  </span>
                                <Link to='/signup'> Click Here to Join</Link>
                                </p>
                </form>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

