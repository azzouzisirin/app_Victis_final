import React, { useState, useEffect } from 'react'
import './Utilisateur.css'
import axios from 'axios';
 
 
export default function ModelFormateur(props ) {
  const { idutilisateur, setOpenPopup } = props;

    const [Nom, setNom] = useState('');
    const [titre, settitre] = useState('M.');
 
    const [Prenom, setPrenom] = useState('');
    const [Telephone, setTelephone] = useState('');
    const [portable, setportable] = useState('');
    const [password, setpassword] = useState('');
    const [RecentTelephone] = useState('');
    const [Recentportable, setRecentportable] = useState('');
    const [fonction, setfonction] = useState('');
    const [Mail, setMail] = useState('');
    const [Adresse_1, setAdresse_1] = useState('');
    const [Adresse_2, setAdresse_2] = useState('');
    const [CodeVille, setCodeVille] = useState('');
    useEffect(()=>{
      if(idutilisateur){
        const getItemsList = async () => {
          try{
            const res = await axios.get("/Utilisateur/"+idutilisateur)
            setportable(res.data.portable);
            settitre(res.data.titre);

            setNom(res.data.nom);
            setPrenom(res.data.prenom);
            setTelephone(res.data.tel);
            setpassword(res.data.password)
            setfonction(res.data.fonction);
            setMail(res.data.email);
            setAdresse_1(res.data.adresse_1);
            setAdresse_2(res.data.adresse_2);
            setCodeVille(res.data.codeVille)
            setfonction(res.data.fonction)
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
      if (Recentportable!==portable){
        while(j<portable.length+2){
          tel2=tel2+' '+portable.substring((j-2),(j))
        
      j=j+2
        }}else{
          tel2=portable
        }
      if(idutilisateur){
        try{
          const config = {
            headers: { 
              "Content-type": "application/json",
            },
          };
          const res = await axios.put("/utilisateur/"+idutilisateur, {
            username:Nom+"_"+Prenom,
            portable: tel2,
            nom: Nom,
            titre:titre, 

            prenom:  Prenom,
            password:password,
            tel:tel1,
            fonction: fonction,
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
          const res = await axios.post('/utilisateur/register', {
            portable: tel2,
            nom: Nom,
            titre:titre,
            prenom:  Prenom,
            tel:tel1,
            password:password,
            fonction: fonction,
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
        <label> Titre</label><br/> 
          <select value={titre}  style={{width:"300px"}}  onChange={e => {settitre(e.target.value)} } >
   
    <option value="M.">M.</option>
    <option value="Mme">Mme </option>
    <option value=" Mlle"> Mlle </option>
    </select>
      <label> Nom :</label><br/>
      <input type="text" placeholder='Nom' onChange={e => {setNom(e.target.value)} } value={Nom}/> <br/>
      <label>Prénom : </label><br/>
      <input type="text" placeholder='Prénom' onChange={e => {setPrenom(e.target.value)} } value={Prenom}/> <br/>
      <label>Téléphone : </label><br/>
      <input type="text" placeholder='Téléphone' onChange={e => {setTelephone(e.target.value)} } value={Telephone}/> <br/>
      <label> Portable :</label><br/>
      <input type="text" placeholder='Portable' onChange={e => {setportable(e.target.value)} } value={portable} /> <br/>
      <label>Fonction :</label><br/>
      <input type="text" placeholder='Fonction' onChange={e => {setfonction(e.target.value)} } value={fonction}/> <br/>
     
     
    </div>
      <div className='modelLeft'>
      <label>Mail :</label><br/>
      <input type="text" placeholder='Mail' onChange={e => {setMail(e.target.value)} } value={Mail}/> <br/>
      <label> Adresse 1 :</label><br/>
      <input type="text" placeholder='Adresse 1' onChange={e => {setAdresse_1(e.target.value)} } value={Adresse_1}/> <br/>
      <label> Adresse 2 :</label><br/>
      <input type="text" placeholder='Adresse 2' onChange={e => {setAdresse_2(e.target.value)} } value={Adresse_2}/> <br/>
      <label> Code postal et ville</label><br/>
      <input type="text" placeholder='Code postal et ville' onChange={e => {setCodeVille(e.target.value)} } value={CodeVille}/> <br/>
      <label> Password</label><br/>
      <input type="text" placeholder='password' onChange={e => {setpassword(e.target.value)} } value={password}/> <br/>
     
      </div>
     
    </div>
    <button type="submit" className='buttonEnregistre'>Add</button>
    </form>
    </>
    )
}
