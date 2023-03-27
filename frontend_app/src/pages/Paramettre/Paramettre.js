
import React, { useState, useEffect ,useRef} from 'react'
import axios from 'axios';

import Sidebar from '../../components/navBar/Sidebar';

function Paramettre(){
    const user = JSON.parse(localStorage.getItem("user"));
    const addFormateur = async (e) => {
        e.preventDefault();
  
          try{ 
            const config = {
              headers: { 
                "Content-type": "application/json",
              },
            };
            const res = await axios.put("/client/"+user._id, {
            
          
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
      <input type="text" placeholder='Raison sociale'  value={user.shemaDossie}/> <br/>
      <label> mot de passe :</label><br/>
      <input type="text" placeholder='Raison sociale'  value={user.password}/> <br/>
  </div>
      <div className='modelLeft'>
      <label>mot de passe Email :</label><br/>
      <input type="email" placeholder='Mail'  value="{user.PassEmail}"/> <br/>

      </div>
      
    </div>
    <button className='buttonEnregistre'> Modifier</button>
    </form>
 
    </Sidebar>
</>
)

}

export default Paramettre