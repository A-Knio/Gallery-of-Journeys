import React, {useState} from "react"
import { Link } from "react-router-dom";
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';



function Signup(props) {
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
        <div className="w-full h-screen">
        <img className="hidden sm:block absolute w-full h-full object-cover" src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
            <div className="fixed w-full px-4 py-20 z-50">
                <div className="rounded max-w-[450px] h-[600px]  mx-auto bg-black/25 text-slate-200">
                    <div className="max-w-[320px] mx-auto py-20">
                <h1 className="text-center text-4xl font-semibold"> Sign Up </h1>

                <form onSubmit={handleFormSubmit}  className="w-full flex flex-col py-4">
                        <label htmlFor="email"  className="text-lg font-medium"> Email </label>
                        <input 
                            className="rounded p-3 my-2 bg-white-600" 
                            name='email'
                            placeholder="Enter your email"
                            onChange={handleChange}
                        />
        
                        
                        <label htmlFor="username" className="text-lg font-medium"> Username </label>
                        <input 
                            className="rounded p-3 my-2 bg-white-600"  
                            name="username"
                            placeholder="Enter in a username"
                            onChange={handleChange}
                        />
                        
                        <label htmlFor="password"className="text-lg font-medium"> Password </label>
                        <input 
                           className=" rounded p-3 my-2 bg-white-600"
                           name="password" 
                            type="password"
                            placeholder="******"
                            onChange={handleChange}/>
                   
                        <button 
                            className="bg-gray-600 py-3 my-6 rounded font-semibold" 
                            type="submit"> Sign Up  
                            </button>
                        <p className="py-8">
                            <span className="text-gray-600"> Already a member?  </span>
                            <Link to='/login'> Click Here to Login </Link>
                        </p>
                </form>

            </div>
            </div>
            </div>
        </div>
    )
}

export default Signup;