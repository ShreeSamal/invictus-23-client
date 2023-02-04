import React, { useState } from "react";
import './css/login_signup.css';
export default function Login_Signup() {
    const [name, setName] = useState("");
    const [contact, setContact] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function signup(e) {
        e.preventDefault();
        const res = await fetch("http://localhost:5000/user/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                contact,
                email,
                password
            }),
        });
        const data = await res.json();
        console.log(data);
        alert(data.message);
    }

    async function login(e) {
        e.preventDefault();
        const res = await fetch("http://localhost:5000/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password
            }),
        });
        const data = await res.json();
        console.log(data);
        alert(data.message);
    }

    return (
        <div class="login-main">
            <input type="checkbox" id="chk" aria-hidden="true"></input>
            <div class="signup">
                <form>
                    <label for="chk" aria-hidden="true">Sign up</label>
                    <input type="text" onChange={(e)=>{setName(e.target.value)}} name="txt" placeholder="User name" required=""></input>
                    <input type="text" onChange={(e)=>{setContact(e.target.value)}} name="contact" placeholder="Contact" required=""></input>
                    <input type="email" onChange={(e)=>{setEmail(e.target.value)}} name="email" placeholder="Email" required=""></input>
                    <input type="password" onChange={(e)=>{setPassword(e.target.value)}} name="pswd" placeholder="Password" required=""></input>
                    <button onClick={signup}>Sign up</button>
                </form>
            </div>
            <div class="login">
                <form>
                    <label for="chk" aria-hidden="true">Login</label>
                    <input type="email" onChange={(e)=>{setEmail(e.target.value)}} name="email" placeholder="Email" required=""></input>
                    <input type="password" onChange={(e)=>{setPassword(e.target.value)}} name="pswd" placeholder="Password" required=""></input>
                    <button onClick={login}>Login</button>
                </form>
            </div>
        </div>
    )
}
