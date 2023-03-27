import React, { useState, useEffect } from "react";
import axios from "axios";
import './authentification.css'
import {  useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";

function Login() {
  const [cookies] = useCookies([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (cookies.jwt) {
      navigate("/");
    }
  }, [cookies, navigate]);

  const [values, setValues] = useState({ email: "", password: "" });
  const generateError = (error) =>
    toast.error(error, {
      position: "bottom-right",
    });
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post(
        "/utilisateur/login",  
        {
          ...values,
        },
        { withCredentials: true }
      );
      if (data) {
        if (data.errors) {
          const { email, password } = data.errors;
          if (email) generateError(email);
          else if (password) generateError(password);
        } else {
          localStorage.setItem("user", JSON.stringify(data));

          navigate("/accueil");
        }
      }
    } catch (ex) {
      console.log(ex);
    }
  };
  return (
    <div className="Login">
     
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
        <h2>Connexion</h2>

          <label htmlFor="email">Email</label>
          <br/>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="password">Mot de passe</label>
          <br/>
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            }
          />
        </div>
        <br/>
        <button type="submit">Login</button>
      
      </form>
      <ToastContainer />
    </div>
  );
}

export default Login;
