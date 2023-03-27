import React, { useState, useEffect } from 'react'
import './financeur.css'
import axios from 'axios';

 
export default function ModelFormateur(props ) {
  const { idforma, setOpenPopup } = props;

    const [Nom, setNom] = useState('');
    const [raisonSocial, setraisonSocial] = useState('');
    const [remarque, setremarque ]= useState('');

    const [Prenom, setPrenom] = useState('');
    const [Telephone, setTelephone] = useState('');
    const [Portable, setPortable] = useState('');
    const [RecentTelephone, setRecentTelephone] = useState('');
    const [Recentportable, setRecentportable] = useState('');
    const [Mail, setMail] = useState('');
    const [Adresse_1, setAdresse_1] = useState('');
    const [Adresse_2, setAdresse_2] = useState('');
    const [CodeVille, setCodeVille] = useState('');
    useEffect(()=>{ 
      if(idforma){
        const getItemsList = async () => {
          try{
            const res = await axios.get("/financeur/"+idforma)
            setPortable(res.data.portable);
            setraisonSocial(res.data.raisonSocial)
            setNom(res.data.nom);
            setremarque(res.data.remarque)
            setPrenom(res.data.prenom);
            setTelephone(res.data.tel);
            setRecentportable(res.data.portable);
            setRecentTelephone(res.data.tel);
            setMail(res.data.email);
            setAdresse_1(res.data.adresse_1);
            setAdresse_2(res.data.adresse_2);
            setCodeVille(res.data.codeVille)
          }catch(err){
            console.log(err);
          }
        }
        getItemsList()
      }
   
    },[]) 

    const addFormateur = async (e) => {
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
      if (Recentportable!==Portable){
  
        while(j<Portable.length+2){
          tel2=tel2+' '+Portable.substring((j-2),(j))
        
      j=j+2
        }}else{
          tel2=Portable
        }
      if(idforma){
        try{
          const config = {
            headers: { 
              "Content-type": "application/json",
            },
          };
          const res = await axios.put("/financeur/"+idforma, {
            portable: tel2,
            raisonSocial:raisonSocial,
            nom: Nom,
            remarque:remarque,
            prenom:  Prenom,
            tel:tel1,
            email: Mail,
            adresse_1: Adresse_1,
            adresse_2: Adresse_2,
            codeVille:  CodeVille,
        
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
          const res = await axios.post('/financeur/register',
           {
            portable: tel2,
            raisonSocial:raisonSocial,
            nom: Nom,
            remarque:remarque,
            prenom:  Prenom,
            tel:tel1,
            email: Mail,
            adresse_1: Adresse_1,
            adresse_2: Adresse_2,
            codeVille:  CodeVille,
        
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
        <label> Raison Sociale :</label><br/>
      <input type="text" placeholder='raison Sociale' onChange={e => {setraisonSocial(e.target.value)} } value={raisonSocial}/> <br/>
  
          <label> Nom :</label><br/>
      <input type="text" placeholder='Nom' onChange={e => {setNom(e.target.value)} } value={Nom}/> <br/>
      <label>Prénom : </label><br/>
      <input type="text" placeholder='Prénom' onChange={e => {setPrenom(e.target.value)} } value={Prenom}/> <br/>
      <label>Téléphone : </label><br/>
      <input type="tel" placeholder='Téléphone' onChange={e => {setTelephone(e.target.value)} } value={Telephone}  /> <br/>
      <label>Portable  :</label><br/>
      <input type="tel" placeholder='Portable' onChange={e => {setPortable(e.target.value)} } value={Portable}  /> <br/>
      <label>Remarque  :</label><br/>
      <input type="text" placeholder='Remarque' onChange={e => {setremarque(e.target.value)} } value={remarque}/> <br/>
     
     
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
     
      </div>
     
    </div>
    <button type="submit" className='buttonEnregistre'>Add</button>
    </form>
    </>
    )
}
