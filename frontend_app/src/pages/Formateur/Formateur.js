
import React, { useState, useEffect } from 'react'
import Popup from "../../components/Popup";
import { Delete , Update} from '@material-ui/icons'
import './formateur.css'
import { Link } from "react-router-dom";
import { useNavigate} from 'react-router-dom';
import {BASE_URL} from "../../helper"

import Sidebar from '../../components/navBar/Sidebar';
import axios from 'axios';
 
import ModelFormateur from "./ModelFormateur";
 
const Formateur = () => {
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
    const res = await axios.get(`${BASE_URL}/formateur/search?q=${query}`);
    setData(res.data);
  };
  if (query.length === 0 || query.length > 0) fetchData();
}, [query,openPopup]);

const newFormateur=async()=>{
  
  setOpenPopup(true); setRecordForEdit(null);setIdforma()
}
const deleteItem = async (id) => {
  try{
    const res = await axios.delete(`${BASE_URL}/formateur/${id}`)
    const newListItems = data.filter(item=> item._id !== id);
    setData(newListItems);
  }catch(err){
    console.log(err);
  }
}
    return (
     <> 
      <Sidebar>
     <h1> Formateur</h1>
   <button className="Newbuton"  onClick={newFormateur}>
   Nouveau Formateur
   </button>
   <input type="text"    className='buttonSearch'        placeholder="recherche ..."
         onChange={(e) => setQuery(e.target.value.toLowerCase())}
/>
   <div className='tableDiv tabledecore'> 

 
   <table>
   <thead>
    <tr> 
      <th style={{width:"8%"}}>Titre  </th>
      <th style={{width:"8%"}}> Raison Sociale </th>

      <th style={{width:"8%"}}> Nom </th>
      <th style={{width:"8%"}}>Prénom  </th>
      <th style={{width:"8%"}}>Téléphone  </th>
      <th style={{width:"8%"}}> Mail</th>
      <th style={{width:"8%"}}>Adresse 1  </th>
      <th style={{width:"8%"}}>Adresse 2</th>

      <th style={{width:"8%"}}> Code postal et ville </th>
      <th style={{width:"8%"}}>Formation</th>
      <th style={{width:"8%"}}>Prix</th>
      <th style={{width:"8%"}}> Charte du formateur</th>

    <th> Action</th>
    </tr>
    </thead>
        <tbody>
  {data.map((item) => (
               

           <tr key={item._id}>
             <td>{item.titre}</td>
             <td>{item.raisonSociale}</td>
             <td>{item.nom}</td>
             <td> {item.prenom}</td>
             <td> {item.tel}</td>
             <td>{item.email} </td>
             <td>{item.adresse_1} </td>
             <td>{item.adresse_2} </td>
             <td> {item.codeVille}</td>
             <td>    {item.frais.map((s) => (  
             <>  <hr/>
             <p style={{fontSize:'20px',fontFamily:"sans-serif"}}>{s.intitile} {s.categ}</p> 
             </>
                ))} </td>
             <td>   {item.frais.map((s) => (  
             <>  <hr/>
             <p style={{fontSize:'20px',fontFamily:"sans-serif"}}> {s.prix}  </p> 
             </>
              ))}</td>
             <td> {item.nomFichie?<a href={"http://localhost:4000/fileinfo/"+item.nomFichie }target="_blank"> Voir Fichier</a>:""} </td>

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
                title="Nouveau Formateur "
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

export default Formateur;