import React, { useState } from "react";
import axios from "axios";
import {BASE_URL} from "../../helper"

import './authentification.css'
import {  useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

function Login() {
  const navigate = useNavigate();
 
  const [email, setemail] = useState();
 
  const [password, setpassword] = useState({ email: "", password: "" });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const config = {
        headers: { 
          "Content-type": "application/json",
        },
      };
      const     res = await axios.post(
      BASE_URL+ "/utilisateur/login",  
        {
          email:email,
          password:password,
        },config
      );
    if(res.data._id){
      toast.error(res.data._id)

      localStorage.setItem("user", JSON.stringify(res.data));

      navigate('/accueil')
 
    }else{
      toast.error(res.data.resultat)

    }
   
    } catch (ex) {
      console.log(ex);
    }
  };
  return (
    <div>
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
            onChange={e => {setemail(e.target.value)} }
          />
        </div>
        <div>
          <label htmlFor="password">Mot de passe</label>
          <br/>
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={e => {setpassword(e.target.value)} }
          />
        </div>
        <br/>
        <button type="submit">Login</button>
      
      </form>
  
    </div>
        <Toaster   position="bottom-right"  toastOptions={{
          success: {
            style: {
              width: '700px',
              height:'70px',
              border:'green',
              borderStyle: "solid",
              fontSize:'25px',
            },
          },
          error: {
            style: {
              width: '700px',
              height:'70px',
              border:'red',
              borderStyle: "solid",
              fontSize:'25px',
      
            },
          }, 
        }}
        reverseOrder={false}/>
    </div>
  );
}

export default Login;
