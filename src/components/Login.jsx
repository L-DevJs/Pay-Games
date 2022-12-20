import React, { useState } from "react";
import loginImg from "../assets/bluelock.jpg";
import "../style/style_login.css";
import { useAuth } from "../context/authContext.js";
import { useNavigate } from "react-router-dom";

export function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handlerChanger = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handlerSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/dashboard");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block">
        <img className="w-full h-full object-cover" src={loginImg} alt=""></img>
      </div>
      <div className="bg">
        <form
          className="formulario rounded-lg p-4 px-8"
          onSubmit={handlerSubmit}
        >
          <div class="logo"></div>

          <div className="flex flex-col text-black py-2">
            <label className="text-white">Email:</label>
            <input
              name="email"
              className="rounded-lg bg-slate-200 mt-2 p-2 focus:border-purple-700 focus:bg-purple-300 focus:outline-none"
              placeholder="email@gmail.com"
              type="email"
              onChange={handlerChanger}
            />
          </div>
          <div className="flex flex-col text-black py-2">
            <label className="text-white">Password:</label>
            <input
              name="password"
              className="rounded-lg bg-slate-200 mt-2 p-2 focus:border-purple-700 focus:bg-purple-300 focus:outline-none"
              placeholder="********"
              type="password"
              onChange={handlerChanger}
            />
          </div>
          <div>{error && <p className="text-white">{error} </p>}</div>
          <button className="text-white">Login</button>
          <div className="gmailcontainer">
          <a href="http://localhost:3000/registro">
            <span>Google Login</span>
            <i></i>
          </a>
        </div>
        </form>
        
      </div>
    </div>
  );
}
