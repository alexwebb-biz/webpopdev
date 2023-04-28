import react from 'react';
import '../admin/styles/AdminLogin.css';
import Axios from 'axios';
import { useState, useEffect } from 'react';

const Register =()=>{
        
    const handleSubmit = async (e) => {
        e.preventDefault();

        const { username, password, email } = e.target.elements;

        let details = {
            username: username.value,
            password: password.value,
            email: email.value
        };

        let response = await fetch("https://webpopdevfinal.herokuapp.com/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        });
        console.log(response);
        e.target.reset();
    }
           

    return(
        <>
            <section className="adminLoginPage">
                <div className="form-container">
                    <h1>Admin Page Login</h1>
                    <form onSubmit = {handleSubmit} className="adminLoginForm">
                        <input type="text" placeholder="Username" id="username"/>
                        <input type="text" placeholder="Password" id="password"/>
                        <input type="text" placeholder="Password" id="email"/>
                        <button type="submit">Login</button>
                    </form>
                </div>
            </section>
        </>
    )
    
}
    

export default Register;