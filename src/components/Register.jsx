import { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

export function Registrar() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handlerChanger = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const { signup } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handlerSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {

      await signup(user.email, user.password);
      navigate('/');
    
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      {error && <p>{error}</p>}

      <form onSubmit={handlerSubmit}>
        <lable htmlFor="email">Email:</lable>
        <input
          name="email"
          type="email"
          placeholder="email@gmail.com"
          onChange={handlerChanger}
        ></input>
        <lable htmlFor="password">Password:</lable>
        <input
          name="password"
          type="password"
          placeholder="********"
          onChange={handlerChanger}
        ></input>

        <button>Register</button>
      </form>
    </div>
  );
}
