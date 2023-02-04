import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/login_signup.css";
import { useCookies } from "react-cookie";
var CryptoJS = require("crypto-js");

export default function Login_Signup() {
    const [name, setName] = useState("");
    const [contact, setContact] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cookies, setCookie,removeCookie] = useCookies('user');

    const handle = () => {
        if(cookies){
        removeCookie('user');
        }
        var user = { email: email }
        var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(user), 'my-secret-key@123').toString();
        setCookie('user', ciphertext, { path: '/' });
        console.log('cookie created');
     };

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
        password,
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
        console.log(data.message);
        if(data.message === "Login Successful"){
            handle();
        }
        alert(data.message);
        window.location.href = "/";
    }

  return (
    <div className="login-container">
    <div className="login-main">
    <input type="checkbox" id="chk" aria-hidden="true"></input>
      <div className="signup">
        <form className="loginForm">
          <label htmlFor="chk" aria-hidden="true">
            Sign up
          </label>
          <input
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
            name="txt"
            placeholder="name"
            required=""
          ></input>
          <input
            type="tel"
            pattern="[0-9]{10}"
            onChange={(e) => {
              setContact(e.target.value);
            }}
            name="contact"
            placeholder="Contact"
            required=""
          ></input>
          <input
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            name="email"
            placeholder="Email"
            required=""
          ></input>
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            name="pswd"
            placeholder="Password"
            required=""
          ></input>
          <button onClick={signup}>Sign up</button>
        </form>
      </div>
      <div className="login">
        <form>
          <label htmlFor="chk" aria-hidden="true">
            Login
          </label>
          <input
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            name="email"
            placeholder="Email"
            required=""
          ></input>
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            name="pswd"
            placeholder="Password"
            required=""
          ></input>
          <button onClick={login}>Login</button>
        </form>
      </div>
    </div>
    </div>
  );
}
