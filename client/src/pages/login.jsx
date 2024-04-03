import React from "react"
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

const Login = () => {
    return(
        <div>
            <div className="">
                <h1> Login </h1>
                <form action="">
                    <div>
                        <input type="email"/>
                        <label htmlFor=""> Email </label>
                        <MdEmail size={20} />
                    </div>
                    <div>
                        <input type="password"/>
                        <label htmlFor=""> Password </label>
                        <RiLockPasswordLine size={20} />
                    </div>
                    <button type="submit"> Login </button>
                    <span> Sign Up <Link to='Signup'> Click Here to Join</Link> </span>
                </form>
            </div>
        </div>
    )
}

export default Login;