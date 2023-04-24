import React, { useState, useEffect } from 'react'
import './formateur.css'
import axios from 'axios';

import {BASE_URL} from "../../helper"

export default function ModelFormations(props ) {
  const { idforma, setOpenPopup } = props;
  const [File , setFile ]= useState();
  const [nomFile , setnomFile ]= useState();

    const [designation, setdesignation] = useState('');
    const [Type, setType] = useState('');
    const [DureeJour, setDureeJour] = useState('');
    const [DureeHeur, setDureeHeur] = useState('');
 
    const [Prix, setPrix] = useState('');
     useEffect(()=>{
      if(idforma){
        const getItemsList = async () => {
          try{
            const res = await axios.get(BASE_URL+"/formation/"+idforma)
            setdesignation(res.data.designation);
            setType(res.data.type);
            setDureeJour(res.data.DureeJour);
            setDureeHeur(res.data.DureeHeur);

            setPrix(res.data.Prix);
           
          }catch(err){
            console.log(err);
          }
        }
        getItemsList()
      }
   
    },[]) 
    useEffect(() => {
      const s =DureeJour*7;
      setDureeHeur(s)
      }, [DureeJour]);
      useEffect(()=>{
     if(File){
      setnomFile(File.name)

        try{
          var formdata = new FormData();
          formdata.append("file", File);
          
          var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
          };
          
          fetch(BASE_URL+"/upload", requestOptions)
            .then(response => response.text())
            .catch(error => console.log('error', error));
            
            }catch(err){
              console.log(err);
            }
          }
      },[File])
    const addFormateur = async (e) => {
    

      e.preventDefault();

      if(idforma){
        try{
          const config = {
            headers: { 
              "Content-type": "application/json",
            },
          };
          const res = await axios.put(BASE_URL+"/formation/"+idforma, {
            type: Type,
            designation: designation,
            DureeJour:  DureeJour,
            DureeHeur:  DureeHeur,
            Prix:Prix,
           nomFichie: nomFile
         
        
        }  ,
        
        config
      );
      setOpenPopup(false)
        }catch(err){
          console.log(err);
        }
      }else{
        try{
          const config = {
            headers: { 
              "Content-type": "application/json",
            },
          };
          const res = await axios.post(BASE_URL+"/formation/register", {
            type: Type,
            designation: designation,
            DureeJour:  DureeJour,
            DureeHeur:  DureeHeur,
                        Prix:Prix,
            nomFichie: nomFile
        
        }  ,
        
        config
      );
      setOpenPopup(false)
        }catch(err){
          console.log(err);
        }
      }
      }
    return (
        <> 
<form className="formModel" onSubmit={e => addFormateur(e)}>
    <div className='modelDiv'>
        <div className='modelRight'>
            <label> Designation :</label><br/>
      <input type="text" placeholder='designation' onChange={e => {setdesignation(e.target.value)} } value={designation}/> <br/>
      <label>Module : </label><br/>
      <input type="text" placeholder='Module' onChange={e => {setType(e.target.value)} } value={Type}/> <br/>
      <label>Durée (en jours) : </label><br/>
      <input type="text" placeholder='Durée' onChange={e => {setDureeJour(e.target.value)} } value={DureeJour}/> <br/>
      <label>Durée (en heures): </label><br/>
      <input type="text" placeholder='Durée'  value={DureeHeur}/> <br/>
    
      <label>Prix  :</label><br/>
      <input type="text" placeholder='Prix' onChange={e => {setPrix(e.target.value)} } value={Prix}/> <br/>

      <label> Programme :</label><br/>
      <input type="file" accept=".pdf" onChange={e => {setFile(e.target.files[0])} }  />
 
    
    </div>
      
     
    </div>
    <button type="submit" className='buttonEnregistre'>Add</button>
    </form>
    </>
    )
}
