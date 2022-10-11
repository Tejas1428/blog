import React from 'react'
import "./Register.css"
import { Link } from "react-router-dom"
import { useState } from 'react'
import axios from 'axios'
export default function Register() {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
       try {
        const res=await axios.post("/auth/register",{
            username,email,password
        })
        res.data && window.location.replace("/login" )
       } catch (error) {
        console.log(error)
       }
    }

    return (
        <div className='Register'>

            <label className='RegisterTitle'>Register</label>
            <form className='RegisterForm' onSubmit={handleSubmit}>
                <label>Username</label>
                <input className='RegisterInput' type="text" placeholder="Enter Your Username" onChange={e => setUsername(e.target.value)} />
                <label>Email</label>
                <input className='RegisterInput' type="text" placeholder="Enter Your Email" onChange={e => setEmail(e.target.value)} />
                <label>Password</label>
                <input className='RegisterInput' type="password" placeholder="Enter Your Password" onChange={e => setPassword(e.target.value)} />
                <button className='RegisterButton' type="submit">Register</button>
            </form>
            <button className='RegisterLoginButton' type="submit">
                <Link className="link" to="/login">Login</Link>
            </button>
        </div>


    )
}
