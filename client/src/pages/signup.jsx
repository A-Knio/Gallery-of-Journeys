import React from "react"
import { FaRegUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

const Signup = () => {
    return(
        <div>
            <div className="">
                <h1> Sign Up </h1>
                <form action="">
                    <div>
                        <input type="email"/>
                        <label htmlFor=""> Email </label>
                        <FaRegUser size={20} />
                    </div>
                    <div>
                        <input type="username"/>
                        <label htmlFor=""> Username </label>
                        <MdEmail size={20} />
                    </div>
                    <div>
                        <input type="password"/>
                        <label htmlFor=""> Password </label>
                        <RiLockPasswordLine size={20} />
                    </div>
                    <button type="submit"> Sign Up  </button>
                </form>
            </div>
        </div>
    )
}

export default Signup;