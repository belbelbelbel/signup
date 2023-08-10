import React, { useState } from 'react'
import "./Signup.css"
export default function Signup() {
    const [error,seterror] = useState({})
    const [formdata, setformdata] = useState({
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
    })
    function handlechange(e) {
        const { name, value } = e.target;
        setformdata({
            ...formdata,
            [name]: value,
        })
    }
    function handlesubmit(e) {
        e.preventDefault()
        const validateerror = []
        if (!formdata.username.trim()) {
            validateerror.username = "Username is required";
        }
        if (!formdata.email.trim()) {
            validateerror.email = "Email is required";
        }
        else if (!/\S+@\S+\.\S+/.test(formdata.email)) {
            validateerror.email = " Email is invalid";
        }
        if (!formdata.password.trim()) {
            validateerror.password = "Password needed";
        }
        else if (formdata.password.length < 6) {
            validateerror.password = "Password should be atlest 6 char";
        }
        if (formdata.confirmpassword !== formdata.password) {
            validateerror.confirmpassword = "Type in the correct password";
        }
        seterror(validateerror);
        if(Object.keys(validateerror).length === 0) {
            alert("Form Submitted Sucessfully")
        }

    }

    return (
        <div>
            <h1>Sign Up App</h1>
            <form onSubmit={handlesubmit}>
                <div>
                    
                    <input type='text'
                     name="username" 
                     placeholder='username' 
                     autoComplete='off'
                      onChange={handlechange}></input>
                    {error.username && <span>{error.username}</span>}
                </div>
                <div>
                    <input type='text' 
                    name="email" placeholder='email' 
                    autoComplete='off' 
                    onChange={handlechange}></input>
                    {error.email && <span>{error.email}</span>}
                </div>
                <div>
                    <input  name="password" 
                    placeholder='******'
                     onChange={handlechange}></input>
                    {error.password && <span>{error.password}</span>}
                </div>
                <div>
                    <input type='password'
                     name="confirmpassword"
                      placeholder='*******'
                       onChange={handlechange}></input>
                    {error.confirmpassword && <span>{error.confirmpassword}</span>}
                </div>
                <button type='submit'>Sign up</button>
            </form>
        </div>
    )
}
