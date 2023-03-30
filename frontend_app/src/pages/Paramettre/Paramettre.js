
import React, { useState, useEffect ,useRef} from 'react'
import axios from 'axios';
import {BASE_URL} from "../../helper"
 
import Sidebar from '../../components/navBar/Sidebar';
function Paramettre(){
  const [shemaDossie, setshemaDossie] = useState('');
  const [password, setpassword] = useState('');
  const [passEmail, setpassEmail] = useState('');

    const user = JSON.parse(localStorage.getItem("user"));
    useEffect(()=>{ 
      if(user){
        const getItemsList = async () => {
          try{
            const res = await axios.get(BASE_URL+"/client/"+user._id)
            setshemaDossie(res.data.shemaDossie)
        setpassword(res.data.password)
        setpassEmail(res.data.PassEmail)
          }catch(err){
            console.log(err);
          }
        }
        getItemsList()
      }
   
    },[user]) 

    const addFormateur = async (e) => {
        e.preventDefault();
          try{ 
            const config = {
              headers: { 
                "Content-type": "application/json",
              },
            };
            const res = await axios.put(BASE_URL+"/utilisateur/"+user._id, {
            
              password:password,
              PassEmail:passEmail,
              shemaDossie:shemaDossie,
          }  ,
          
          config
        );
          }catch(err){
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
      <input type="text" placeholder='C:/Users/'  value={shemaDossie} onChange={e => {setshemaDossie(e.target.value)} }/> <br/>
      <label> mot de passe :</label><br/>
      <input type="text" placeholder='mot de passe '  value={password} onChange={e => {setpassword(e.target.value)} }/> <br/>
  </div>
      <div className='modelLeft'>
      <label>mot de passe Email :</label><br/>
      <input type="text" placeholder='Mail'  value="{user.PassEmail}" onChange={e => {setpassEmail(e.target.value)} }/> <br/>

      </div>
      
    </div>
    <button className='buttonEnregistre'> Modifier</button>
    </form>
 
    </Sidebar>
</>
)

}

export default Paramettre