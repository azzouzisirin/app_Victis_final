
import React, { useState, useEffect } from 'react'
import { Delete , Update,Warning} from '@material-ui/icons'
import { Link } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

import { useNavigate} from 'react-router-dom';
import {BASE_URL} from "../../helper"

import Sidebar from '../../components/navBar/Sidebar';
import axios from 'axios';

 
const Accueil = () => { 
  const navigate = useNavigate(); 


const [query, setQuery] = useState(""); 
const [dataoffress, setDataoffress] = useState([]);



 const history = useNavigate();
 const user = JSON.parse(localStorage.getItem("user"));







useEffect(() => {
      if (!user) history.push("/");
 
  const fetchData = async () => {
    setDataoffress([])
    const res3 = await axios.get(`${BASE_URL}/session/search?q=${query}`);
    setDataoffress(res3.data); 
  };
  if (query.length === 0 || query.length > 0) fetchData();
}, [query]);
 

const deleteItem = async (id,nomDossie) => {
  try{ 
    const res = await axios.delete(`${BASE_URL}/session/${id}`)
    let data = JSON.stringify({
      "shemaDossie": user.shemaDossie+"/"+nomDossie
    });
    
    let config = {
      method: 'delete',
      maxBodyLength: Infinity,
      url: `${BASE_URL}/deletFile`,
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios.request(config)
    .then((response) => {
      toast.success('Session supprime')
    })
    .catch((error) => {
      console.log(error);
    });
 
 setQuery('')
 window.location.reload(false);
  }catch(err){
    console.log(err); 
    toast.error(err)

  }
}
const addSession= async () => {
  localStorage.setItem("nouveau", "true")
   try{
    const config = {
      headers: { 
        "Content-type": "application/json",
      },
    }; 
    const res = await axios.post(`${BASE_URL}/session/register`,{
      pathDossier:user.shemaDossie,
    }  ,
  
  config

);


  navigate("/process/"+res.data.newSession._id)

  }catch(err){
    console.log(err);
  }

  
  }



  function handleClick(id) {
    localStorage.setItem("nouveau", "false")
  navigate("/process/"+id)
  }
  useEffect(()=>{

  },[user])


    return (
     <> 
      <Sidebar>
     <h1> Session</h1>

 <button onClick={addSession} className="Newbuton">Nouvelle Session</button>   

   <input type="text" placeholder="recherche ..." className='buttonSearch'
         onChange={(e) => setQuery(e.target.value.toLowerCase())}/>
     <div className='tabledecore'> 

   <table>
   <thead>
    <tr >  
    <th style={{width:"230px"}}> Session </th>

      <th style={{width:"300px"}}>Formation  </th>

      <th style={{width:"270px"}}> Client </th>
      <th style={{width:"270px"}}>Formateur  </th>
      <th style={{width:"150px"}}>Téléphone  </th>
      <th style={{width:"150px"}}>Durée (en jours)</th>
      <th style={{width:"150px"}}> Date de début</th>
      <th style={{width:"150px"}}> Date de fin</th>
      <th style={{width:"150px"}}> Remarque</th>

      <th style={{width:"340px"}}>Etat  </th>
     <th style={{width:"100PX"}}> Action</th>
    </tr> 
    </thead>
        <tbody>
    {dataoffress.map((item) => (
               
              
               <tr > 
            
                 <td key={item.id} onClick={() =>handleClick(item.id)} > {item.session}</td> 
               <td key={item.id} onClick={() =>handleClick(item.id)}>{item.nomFormation}</td>
               <td key={item.id} onClick={() =>handleClick(item.id)}>{item.nomClient}</td>
               <td key={item.id} onClick={() =>handleClick(item.id)}>{item.nomFormateur}</td>
               <td key={item.id} onClick={() =>handleClick(item.id)}>{item.tel}</td>
               <td key={item.id} onClick={() =>handleClick(item.id)}>{item.DureeJour}</td>
               <td key={item.id} onClick={() =>handleClick(item.id)}>{item.dateDebut}</td>
               <td key={item.id} onClick={() =>handleClick(item.id)}>{item.dateFin}</td>
               <td key={item.id} onClick={() =>handleClick(item.id)}>{item.remarque}</td>
               <td key={item.id} onClick={() =>handleClick(item.id)}>
                {item.DifferenceDate==1? <Warning style={{fontSize:"40px",color:"red",marginRight:"10px"}}/> :null}
               {item.etatSession} 

                
                </td>

                 <td key={item.id} onClick={() =>deleteItem(item.id,item.nomDossie)}>
     
                    <Delete />
    
    
      </td>
      
               </tr>
              
             ))}
    </tbody>
   </table>  
</div>
            </Sidebar>
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
     </> 
    );
};

export default Accueil;