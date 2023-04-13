import React, { useState, useEffect } from 'react'
import Popup from "../../components/Popup";
import { Delete , Update} from '@material-ui/icons'
import './location.css'
import { Link } from "react-router-dom";
import {BASE_URL} from "../../helper"
import { useNavigate} from 'react-router-dom';

import Sidebar from '../../components/navBar/Sidebar';
import axios from 'axios';

import Modellocation from "./ModelLocation";
 
const Location = () => {
  const [openPopup, setOpenPopup] = useState(false)
  const [recordForEdit, setRecordForEdit] = useState(null)

const [idforma,setIdforma] = useState('')
const [query, setQuery] = useState("");
const [data, setData] = useState([]);
const user = JSON.parse(localStorage.getItem("user"));
const history = useNavigate();

  const addOrEdit = ( resetForm) => {

  resetForm()
  setRecordForEdit(null)
  setOpenPopup(false)
}
useEffect(() => {
 
  if (!user) history.push("/");
}, [history]); 
useEffect(() => {

  const fetchData = async () => {
    const res = await axios.get(`${BASE_URL}/location/search?q=${query}`);
    setData(res.data);
  };
  if (query.length === 0 || query.length > 0) fetchData(); 
}, [query,openPopup]);


const deleteItem = async (id) => {
  try{
    const res = await axios.delete(`${BASE_URL}/location/${id}`)
    const newListItems = data.filter(item=> item._id !== id);
    setData(newListItems);
  }catch(err){
    console.log(err);
  }
}
    return (
     <> 
      <Sidebar>
     <h1> Location des salles de formation</h1>
   <button className="Newbuton"  onClick={() => { setOpenPopup(true); setRecordForEdit(null);setIdforma()}}>
   Nouvelle salle de formation
   </button>
   <input type="text"    className='buttonSearch'        placeholder="recherche ..."
         onChange={(e) => setQuery(e.target.value.toLowerCase())}
/>
<div className='tabledecore'> 

 
   <table>
   <thead>
    <tr> 
      <th style={{width:"900px"}} >Raison Sociale  </th>
      <th style={{width:"900px"}} > Nom </th>
      <th style={{width:"900px"}} >Prénom  </th>
      <th style={{width:"900px"}}>Téléphone  </th>
      <th style={{width:"900px"}}>Portable</th>
      <th style={{width:"900px"}} > Mail</th>
      <th style={{width:"900px"}} >Adresse 1  </th>
      <th style={{width:"900px"}}>Adresse 2</th>
      <th style={{width:"900px"}}> Code postal et ville </th>
     
      <th style={{width:"900px"}}>Bureau </th>
              <th style={{width:"900px"}}> Nombre de post</th>
              <th style={{width:"900px"}} >Observation </th>
              <th style={{width:"900px"}}> Prix HT</th>
             
      <th style={{width:"900px"}}> Formule petit déjeuner</th>
      <th style={{width:"900px"}}> Total HT</th>
      <th style={{width:"900px"}} > Total TTC</th>
      <th style={{width:"900px"}}>Observation </th>

  
    <th style={{width:"100px"}}> Action</th>
    </tr>
    </thead>
        <tbody>
  {data.map((item) => (
               

           <tr key={item._id}>
             <td>{item.raisonSociale}</td>
             <td>{item.nom}</td>
             <td> {item.prenom}</td>
             <td> {item.tel}</td>
             <td>{item.portable} </td>
             <td>{item.email} </td>
             <td>{item.adresse_1} </td>
             <td>{item.adresse_2} </td>
             <td> {item.codeVille}</td>
          
             <td> 
            {item.frais.map((s) => (  
           
             <p className='themeh1'> {s.burau} </p> 
      
              ))} 
               </td>
               <td>
                
                {item.frais.map((s) => (  
          <p className='themeh1'> {s.nbPost} </p> 
       
              ))}  </td>
                <td>   {item.frais.map((s) => (  
                   
                   <p className='themeh1'> {s.observation} </p> 
               
              ))} 
              </td>
              <td>   {item.frais.map((s) => (  
               
                   <p className='themeh1'> {s.prixHt} </p> 
                  
                 
              ))} 
              </td>
              <td>   {item.frais.map((s) => (  
                
                   <p className='themeh1'> {s.petitDej} </p> 
                  
              
              ))} 
              </td> 
              <td>   {item.frais.map((s) => (  
                
                   <p className='themeh1'> {s.totalHt} </p> 
                  
                 
              ))} 
              </td> 
              <td>   {item.frais.map((s) => (  
             
                   <p className='themeh1'> {s.totalTTC} </p> 
                  
                 
              ))} 
              </td> 
             <td>{item.observation}</td>

             <td>

               <Link  onClick={() => deleteItem(item._id)}>   <Delete /></Link>
               <Link  onClick={() => { setOpenPopup(true); setRecordForEdit(null);setIdforma(item._id)}}>   <Update /></Link>


  </td>
  

           </tr>
          
         ))} 
      
      </tbody>
   </table>
   </div>
   <Popup
                title=" Nouvelle salle de formation"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
                <Modellocation   recordForEdit={recordForEdit}  setOpenPopup={setOpenPopup}

                    addOrEdit={addOrEdit} idforma={idforma}/>
            </Popup>
            </Sidebar>
     </> 
    );
};

export default Location;