
import React, { useState, useEffect } from 'react'
import Popup from "../../components/Popup";
import { Delete , Update} from '@material-ui/icons'
import './Utilisateur.css'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

import Sidebar from '../../components/navBar/Sidebar';
import axios from 'axios';

import ModelFormateur from "./ModelUtilisateur";
 
const Formateur = () => {
  const [openPopup, setOpenPopup] = useState(false)
  const [recordForEdit, setRecordForEdit] = useState(null)
 
const [idutilisateur,setidutilisateur] = useState('')
const [query, setQuery] = useState("");
const [data, setData] = useState([]);
const history = useNavigate();
const user = JSON.parse(localStorage.getItem("user"));

  const addOrEdit = (values, resetForm) => {

  resetForm()
  setRecordForEdit(null)
  setOpenPopup(false)
}
useEffect(() => {
  if (!user) history.push("/");

  const fetchData = async () => {
    const res = await axios.get(`/utilisateur/search?q=${query}`);
    setData(res.data);
  };
  if (query.length === 0 || query.length > 0) fetchData();
}, [query,openPopup]);


const deleteItem = async (id) => {
  try{
    const res = await axios.delete(`/utilisateur/${id}`)
    const newListItems = data.filter(item=> item._id !== id);
    setData(newListItems);
  }catch(err){
    console.log(err);
  }
}
    return (
     <> 
      <Sidebar>
     <h1> Nos collaborateurs</h1>
   <button className="Newbuton"  onClick={() => { setOpenPopup(true); setRecordForEdit(null);setidutilisateur()}}>
   Nouveau collaborateur
   </button>
   <input type="text"    className='buttonSearch'        placeholder="recherche ..."
         onChange={(e) => setQuery(e.target.value.toLowerCase())}
/>
<div className='tabledecore'> 
 

   <table>
   <thead>
    <tr> 
     <th> Titre</th>
      <th> Nom </th>
      <th>Prénom  </th>
      <th>Téléphone  </th>
      <th>Portable</th>
      <th> Fonction</th>
       <th> Mail</th>
       
      <th>Adresse 1  </th>
      <th>Adresse 2</th>
      <th> Code postal et ville </th>
    <th> Action</th>
    </tr>
    </thead>
        <tbody>
  {data.map((item) => (
               

           <tr key={item._id}>
             <td>{item.titre}</td>
             <td>{item.nom}</td>
             <td> {item.prenom}</td>
             <td> {item.tel}</td>
             <td> {item.portable}</td>
             <td>{item.fonction} </td>
             <td>{item.email} </td>
             <td>{item.adresse_1} </td>
             <td>{item.adresse_2} </td>
             <td> {item.codeVille}</td>
             <td>

               <Link  onClick={() => deleteItem(item._id)}>   <Delete /></Link>
               <Link  onClick={() => { setOpenPopup(true); setRecordForEdit(null);setidutilisateur(item._id)}}>   <Update /></Link>


  </td>
  

           </tr>
          
         ))} 
      
      </tbody>
   </table>
   </div>
   <Popup
                title="Nouveau collaborateur "
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
                <ModelFormateur   recordForEdit={recordForEdit}  setOpenPopup={setOpenPopup}

                    addOrEdit={addOrEdit} idutilisateur={idutilisateur}/>
            </Popup>
            </Sidebar>
     </> 
    );
};

export default Formateur;