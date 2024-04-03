<<<<<<< HEAD:gallery-of-journeys/src/pages/login.jsx

=======
>>>>>>> f6afd6745595792f8058559292df7181aac20c52:client/src/pages/login.jsx
import React from "react";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
<<<<<<< HEAD:gallery-of-journeys/src/pages/login.jsx
=======


>>>>>>> f6afd6745595792f8058559292df7181aac20c52:client/src/pages/login.jsx
const Login = () => {
    return (
        <div>
            <div className="">
                <h1> Login </h1>
                <form action="">
                    <div>
                        <input type="email" placeholder="Email"/>
                        <label htmlFor=""> </label>
                        <MdEmail size={20} />
                    </div>
                    <div>
                        <input type="password" placeholder="Password"/>
                        <label htmlFor=""></label>
                        <RiLockPasswordLine size={20} />
                    </div>
                    <button type="submit"> Login </button>
                    <span> Sign Up <Link to='/signup'> Click Here to Join</Link> </span>
                </form>
            </div>
        </div>
    );
};
<<<<<<< HEAD:gallery-of-journeys/src/pages/login.jsx
export default Login;

React

Reply










=======

export default Login;
>>>>>>> f6afd6745595792f8058559292df7181aac20c52:client/src/pages/login.jsx
