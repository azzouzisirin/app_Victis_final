
import React, { useState, useEffect } from 'react'
import Popup from "../../components/Popup";
import { Delete , Update} from '@material-ui/icons'
import './formateur.css'
import { Link ,useNavigate} from "react-router-dom";
import {BASE_URL} from "../../helper"

import Sidebar from '../../components/navBar/Sidebar';
import axios from 'axios';

import ModelFormateur from "./ModelFormations";
 
const Formations = () => {
  const [openPopup, setOpenPopup] = useState(false)
  const [recordForEdit, setRecordForEdit] = useState(null)

const [idforma,setIdforma] = useState('')
const [query, setQuery] = useState("");
const [data, setData] = useState([]);
const history = useNavigate();
const user = JSON.parse(localStorage.getItem("user"));

  const addOrEdit = ( resetForm) => {

  resetForm()
  setRecordForEdit(null)
  setOpenPopup(false)
}
useEffect(() => {
  if (!user) history.push("/");

  const fetchData = async () => {
    const res = await axios.get(`${BASE_URL}/formation/search?q=${query}`);
    setData(res.data);
  };
  if (query.length === 0 || query.length > 0) fetchData();
}, [query,openPopup]);


const deleteItem = async (id) => {
  try{
    const res = await axios.delete(`${BASE_URL}/formation/${id}`)
    const newListItems = data.filter(item=> item._id !== id);
    setData(newListItems);
  }catch(err){
    console.log(err);
  }
}
    return (
     <> 
      <Sidebar>
     <h1> Formations</h1>
   <button className="Newbuton"  onClick={() => { setOpenPopup(true); setRecordForEdit(null);setIdforma()}}>
   Nouvelle formation
   </button>
   <input type="text"    className='buttonSearch'        placeholder="recherche ..."
         onChange={(e) => setQuery(e.target.value.toLowerCase())}
/>
<div className='tabledecore'> 
 

   <table>
   <thead>
    <tr> 
      <th> Designation </th>
      <th>Type  </th>
      <th>Durée (en jours) </th>
      <th>Durée (en heures) </th>

      <th>Prix</th> 
      <th> Fichie pdf</th>

    <th> Action</th>
    </tr>
    </thead>
        <tbody>
  {data.map((item) => (
               

           <tr key={item._id}>
             <td>{item.designation}</td>
             
             <td>{item.type}</td>
             <td> {item.DureeJour}</td>
             <td> {item.DureeHeur}</td>
             <td> {item.Prix}</td> 
             <td> {item.nomFichie?<a href={BASE_URL+"/fileinfo/"+item.nomFichie }target="_blank"> Voir Fichier</a>:""} </td>
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
                title="Nouvelle formation "
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
                <ModelFormateur   recordForEdit={recordForEdit}  setOpenPopup={setOpenPopup}

                    addOrEdit={addOrEdit} idforma={idforma}/>
            </Popup>
            </Sidebar>
     </> 
    );
};

export default Formations;