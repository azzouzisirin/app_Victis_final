import React, { useState, useEffect } from 'react'
import { Delete ,Add} from '@material-ui/icons'

import './location.css'
import axios from 'axios';
import {BASE_URL} from "../../helper"

  
export default function Modellocation(props ) {
  const { idforma, setOpenPopup } = props;
 
  const [observation, setobservation] = useState();

  const [frais, setfrais] = useState([]);
 
    const [raisonSociale, setraisonSociale] = useState('');
    const [Nom, setNom] = useState('');

    const [Prenom, setPrenom] = useState('');
    const [Telephone, setTelephone] = useState('');
    const [portable, setportable] = useState('');
    const [RecentTelephone, setRecentTelephone] = useState('');
    const [Recentportable, setRecentportable] = useState('');
    const [Mail, setMail] = useState('');
    const [Adresse_1, setAdresse_1] = useState('');
    const [Adresse_2, setAdresse_2] = useState('');
    const [CodeVille, setCodeVille] = useState('');
    
    const [new_data, setNew_data] = useState({
      type: "", prix:"",observation:"",nbPost:""
    }); 
   
    
    useEffect(()=>{
      if(idforma){
        const getItemsList = async () => {
          try{
            const res = await axios.get(BASE_URL+"/location/"+idforma)
            setraisonSociale(res.data.raisonSociale);
            setNom(res.data.nom);
            setPrenom(res.data.prenom);
            setTelephone(res.data.tel);
            setRecentportable(res.data.portable);
            setRecentTelephone(res.data.tel);
            setportable(res.data.portable);
            setRecentportable(res.data.portable);
            setRecentTelephone(res.data.tel);
            setMail(res.data.email);
            setAdresse_1(res.data.adresse_1);
            setAdresse_2(res.data.adresse_2);
            setCodeVille(res.data.codeVille)
             setfrais(res.data.frais)
            setobservation(res.data.observation)

          }catch(err){
            console.log(err);
          }
        }
        getItemsList()
      }
   
    },[]) 

    const addlocation = async (e) => {
      e.preventDefault();
      var i=0
      var j=0

      var tel1=''
      var tel2=''
    
if (RecentTelephone!==Telephone){
      while(i<Telephone.length+2){
        tel1=tel1+' '+Telephone.substring((i-2),(i))
      
    i=i+2
      }
    }else{
      tel1=Telephone
    }
    if (Recentportable!==portable){

      while(j<portable.length+2){
        tel2=tel2+' '+portable.substring((j-2),(j))
      
    j=j+2
      }}else{
        tel2=portable
      }
      if(idforma){
        try{
          const config = {
            headers: { 
              "Content-type": "application/json",
            },
          };
          const res = await axios.put(BASE_URL+"/location/"+idforma, {
            raisonSociale: raisonSociale,
            observation:observation,
            nom: Nom,
            prenom:  Prenom,
            tel:tel1,
            portable: tel2,
            email: Mail,
            adresse_1: Adresse_1,
            adresse_2: Adresse_2,
            codeVille:  CodeVille,
            frais:frais
        
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
          const res = await axios.post(BASE_URL+"/location/register", {
            raisonSociale: raisonSociale,
            nom: Nom,
            observation:observation,
            prenom:  Prenom,
            tel:tel1,
            portable: tel2,
            email: Mail,
            adresse_1: Adresse_1,
            adresse_2: Adresse_2,
            codeVille:  CodeVille,
            frais:frais,
        
        }  ,
        
        config
      );
      setOpenPopup(false)
        }catch(err){
          console.log(err);
        }
      }
      }
 
  
    
      const addhandler = e => {
        e.preventDefault();
        setfrais([...frais, new_data]);
        setNew_data({ type: "", prix:"",observation:"",nbPost:"" });
      };
      const deleteItem = async (type) => {
       const newList = frais.filter((item) => item.type !== type);

       setfrais(newList);    }
    return (
        <> 
<form className="formModel" onSubmit={e => addlocation(e)}>

    <div className='modelDiv'>
        <div className='modelRight'>
          <label> Raison Sociale</label><br/> 
          <input type="text" placeholder='Raison Sociale' value={raisonSociale}  onChange={e => {setraisonSociale(e.target.value)} } />
   
    <br/>  
      <label> Nom :</label><br/>
      <input type="text" placeholder='Nom' onChange={e => {setNom(e.target.value)} } value={Nom}/> <br/>
      <label>Prénom : </label><br/>
      <input type="text" placeholder='Prénom' onChange={e => {setPrenom(e.target.value)} } value={Prenom}/> <br/>
      <label>Téléphone : </label><br/>
      <input type="tel" placeholder='Téléphone' onChange={e => {setTelephone(e.target.value)} } value={Telephone} /> <br/>
      <label>Portable : </label><br/>
      <input type="tel" placeholder='Portable' onChange={e => {setportable(e.target.value)} } value={portable} /> <br/>
     
     
    </div>
      <div className='modelLeft'>
      <label>Mail :</label><br/>
      <input type="email" placeholder='Mail' onChange={e => {setMail(e.target.value)} } value={Mail}/> <br/>
      
      <label> Adresse 1 :</label><br/>
      <input type="text" placeholder='Adresse 1' onChange={e => {setAdresse_1(e.target.value)} } value={Adresse_1}/> <br/>
      <label> Adresse 2 :</label><br/>
      <input type="text" placeholder='Adresse 2' onChange={e => {setAdresse_2(e.target.value)} } value={Adresse_2}/> <br/>
      <label> Code postal et ville</label><br/>
      <input type="text" placeholder='Code postal et ville' onChange={e => {setCodeVille(e.target.value)} } value={CodeVille}/> <br/>
      <label> Observation</label><br/>
      <input type="text" placeholder='observation' onChange={e => {setobservation(e.target.value)} } value={observation}/> <br/>
      
      <br/>
  </div>
  </div>
  <div className='tabledecore'> 
      <table  >
        <thead>
          <tr> 
            <th>Type de bureau</th>
            <th>Nombre de post</th>
            <th>observation</th>
            <th>prix (€)</th>
            <th> Action</th>
          </tr>
        </thead>
        <tbody>
          {frais.map((p) => ( 
            <tr key={p.id}>
              <td>{p.type}</td>
              <td>{p.nbPost}</td>
              <td>{p.observation}</td>
              <td>{p.prix}</td>
              <td> <button  onClick={() => deleteItem(p.type)}>   <Delete /></button></td>

            </tr>
          ))}
        </tbody>
        <tfoot>
      <tr>
    <td>   <input
              type="text"
              style={{  width: "80px"}}
              value={new_data.type}
              onChange={e => setNew_data({ ...new_data, type: e.target.value })}
            /></td>
  
            <td>
            <input
              type="text"
              value={new_data.nbPost}
              style={{  width: "80px"}}
              onChange={e => setNew_data({ ...new_data, nbPost: e.target.value })}
            />
              </td>
              <td>   <input
              type="text"
              style={{  width: "80px"}}
              value={new_data.observation}
              onChange={e => setNew_data({ ...new_data, observation: e.target.value })}
            /></td>
  
            <td>
            <input
              type="text"
              value={new_data.prix}
              style={{  width: "80px"}}
              onChange={e => setNew_data({ ...new_data, prix: e.target.value })}
            />
              </td>
               <td> 
              <button onClick={addhandler} style={{margin:"20px" , background:"#D0E3FA",border:"none"}}><Add/></button>

              </td>
      </tr>

        </tfoot>
      </table>
      </div>
 <br/>
     

     
 
    
    <button type="submit" className='buttonEnregistre'>Add</button>
    </form>
    </>
    )
}
