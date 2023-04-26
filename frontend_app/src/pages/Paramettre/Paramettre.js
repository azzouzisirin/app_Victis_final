
import React, { useState, useEffect ,useRef} from 'react'
import axios from 'axios';
import {BASE_URL} from "../../helper"
import toast, { Toaster } from 'react-hot-toast';

import Sidebar from '../../components/navBar/Sidebar';
function Paramettre(){
  const [shemaDossie, setshemaDossie] = useState('');
  const [password, setpassword] = useState('');
  const [passEmail, setpassEmail] = useState('');
  const [host, sethost] = useState('');

    const userId = JSON.parse(localStorage.getItem("user"))._id;
    useEffect(()=>{ 
    
        const getItemsList = async () => {
          try{
            const res = await axios.get(BASE_URL+"/utilisateur/"+userId)
            setshemaDossie(res.data.shemaDossie)
        setpassword(res.data.password)
        setpassEmail(res.data.PassEmail)
        sethost(res.data.host)
          }catch(err){
            console.log(err);
          }
        }
        getItemsList()
     
   
    },[]) 

    const addFormateur = async (e) => {
        e.preventDefault();
          try{ 
            const config = {
              headers: { 
                "Content-type": "application/json",
              },
            };
            const res = await axios.put(BASE_URL+"/utilisateur/"+userId, {
            
              password:password,
              PassEmail:passEmail,
              host:host,
              shemaDossie:shemaDossie,
          }  ,
          
          config
        );
        toast.success('information bien Modifier !')

          }catch(err){
            toast.error(err)

            console.log(err);
          }
        
        }
return(
    <>  
    <Sidebar>
    <form className="formModel" onSubmit={e => addFormateur(e)}>

    <div className='modelDiv'>
        <div className='modelRight'> 
    
          <label> schéma Document :</label><br/>
      <input type="text" title=" C:/User..." value={shemaDossie} onChange={e => {setshemaDossie(e.target.value)} }/> <br/>
      <label> mot de passe :</label><br/>
      <input type="text"  value={password} onChange={e => {setpassword(e.target.value)} }/> <br/>
  </div>
      <div className='modelLeft'>
      <label>Nom d'hôte :</label><br/>
      <input type="text" placeholder="Nom d'hôte :"  value={host} onChange={e => {sethost(e.target.value)} }/> <br/>
      <label>mot de passe Email :</label><br/>
      <input type="text" placeholder='Mail'  value={passEmail} onChange={e => {setpassEmail(e.target.value)} }/> <br/>

      </div>
       
    </div>
    <button className='buttonEnregistre'> Modifier</button>
    </form>
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
    </Sidebar>
</>
)

}

export default Paramettre