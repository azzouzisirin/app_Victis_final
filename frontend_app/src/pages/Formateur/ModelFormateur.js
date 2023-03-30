import React, { useState, useEffect } from 'react'
import { Delete , Update,Add} from '@material-ui/icons'

import './formateur.css'
import axios from 'axios';

import {BASE_URL} from "../../helper"

export default function ModelFormateur(props ) {
  const { idforma, setOpenPopup } = props;
  const [checktva, setchecktva] = useState(false)
  const [dataFormationModule, setDataFormationModule] = useState([]);
  const [File , setFile ]= useState();
  const [nomFile , setnomFile ]= useState();

  const [checkDeplacement, setcheckDeplacement] = useState()
  const [Deplacement, setDeplacement] = useState();
  const [assujtTva, setassujtTva] = useState(false);
  const [checkfrais, setcheckfrais] = useState(false);
  const [RecentTelephone, setRecentTelephone] = useState('');
  const [tva, settva] = useState();
  const [Visibletva, setVisibletva] = useState('hidden');
  const [VisibleDeplacement, setVisibleDeplacement] = useState('hidden');

    const [Titre, setTitre] = useState('M.');
    const [Nom, setNom] = useState('');
    const [raisonSocial, setraisonSocial] = useState('');

    const [listintitile, setlistintitile] = useState([]);
    const [intitile, setintitile] = useState('');
 
    const [Prenom, setPrenom] = useState('');
    const [Telephone, setTelephone] = useState('');
    const [Taux, setTaux] = useState('');
    const [Mail, setMail] = useState('');
    const [Adresse_1, setAdresse_1] = useState('');
    const [Adresse_2, setAdresse_2] = useState('');
    const [CodeVille, setCodeVille] = useState('');
    useEffect(()=>{
      if(idforma){
        const getItemsList = async () => {
          try{
            const res = await axios.get(BASE_URL+"/formateur/"+idforma)
            setTitre(res.data.titre);
            setNom(res.data.nom); 
            setraisonSocial(res.data.raisonSociale)
            setPrenom(res.data.prenom);
            setTelephone(res.data.tel);
            settva(res.data.tva);
            setRecentTelephone(res.data.tel);
            setassujtTva(res.data.assujtTva)
            setcheckfrais(res.data.checkfrais)
            setTaux(res.data.taux);
            setMail(res.data.email);
            setAdresse_1(res.data.adresse_1);
            setAdresse_2(res.data.adresse_2);
            setPersos(res.data.frais)
            setDeplacement(res.data.fraisDeplaccement)
            setCodeVille(res.data.codeVille)
          }catch(err){
            console.log(err);
          }
        }
        getItemsList()
      }
   
    },[]) 
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
           
           fetch("/upload", requestOptions)
             .then(response => response.text())
             .catch(error => console.log('error', error));
             
             }catch(err){
               console.log(err);
             }
           }
       },[File])
    useEffect(() => {

      const fetchFormation = async () => {
      try{ 
        const res = await axios.get(BASE_URL+"/formation/findByCateg/"+intitile)
        setDataFormationModule(res.data);
        }catch(err){
        console.log(err);
      }
    }
    fetchFormation()
  
    }, [intitile]);
    useEffect(()=>{
      if(assujtTva==false){
        setchecktva(false)
        setVisibletva('hidden')

      }else{
      setchecktva(true)
    
      setVisibletva('visible')
   
      }
    },[assujtTva]) 

    useEffect(()=>{
      if(checkfrais==false){
        setcheckDeplacement(false)
        setVisibleDeplacement('hidden')
   
      }else{
      setcheckDeplacement(true)
      setVisibleDeplacement('visible')
   
      }
       }
      ,[checkfrais]) 
 
    const addFormateur = async (e) => {
      e.preventDefault();
      var i=0
      var tel1=''

      if (RecentTelephone!==Telephone){
        while(i<Telephone.length+2){
          tel1=tel1+' '+Telephone.substring((i-2),(i))
        
      i=i+2
        }
      }else{
        tel1=Telephone
      }
    
   
 

      if(idforma){
       
        try{
          const config = {
            headers: { 
              "Content-type": "application/json",
            },
          };
          const res = await axios.put(BASE_URL+"/formateur/"+idforma, {
            username:Nom+"_"+Prenom,
            titre: Titre,
            raisonSociale:raisonSocial,
            nom: Nom,
            tva:tva,
            assujtTva:checktva,
            checkfrais:checkfrais,
            prenom:  Prenom,
            tel:tel1,
            taux: Taux,
            email: Mail,
            adresse_1: Adresse_1,
            adresse_2: Adresse_2,
            codeVille:  CodeVille,
            fraisDeplaccement:Deplacement,
            frais:persos,
            nomFichie: nomFile

        
        }  ,
        
        config
      );
    
        }catch(err){
          console.log(err);
        }
        setOpenPopup(false)
      }else{
        try{
          const config = {
            headers: { 
              "Content-type": "application/json",
            },
          }; 
          const res = await axios.post(BASE_URL+"/formateur/register", {
            titre: Titre,
            nom: Nom,
            tva:tva,
            raisonSociale:raisonSocial,
            assujtTva:checktva,
            checkfrais:checkfrais,
            prenom:  Prenom,
            tel:Telephone,
            taux: Taux,
            email: Mail,
            adresse_1: Adresse_1,
            adresse_2: Adresse_2,
            codeVille:  CodeVille,
            fraisDeplaccement:Deplacement,
            frais:persos,
            nomFichie: nomFile

        }  ,
        
        config
      );
   
        }catch(err){
          console.log(err);
        }
        setOpenPopup(false)
      }
      }
      const handleChangeVisibletva = (event) => { 
        if (event.target.checked) {
          setchecktva(true)

          setVisibletva("visible")
        } else {
          setchecktva(false)


          setVisibletva("hidden")
        }
      }; 
      const handleChangeVisibleDeplacement = (event) => { 
        if (event.target.checked) {
          setcheckDeplacement(true) 
          setcheckfrais(true)
          setVisibleDeplacement("visible")
        } else {
          setcheckDeplacement(false)
          setcheckfrais(false)

 
          setVisibleDeplacement("hidden")
        }
      }; 
      const [new_data, setNew_data] = useState({
        intitile: "",
        categ: "",
        prix: ""
      }); 
      const [persos, setPersos] = useState([
     
      ]);
   
      useEffect(() => {

        const fetchData = async () => {
          try{ 
          const res = await axios.get(`${BASE_URL}/formation`);
          setlistintitile(res.data)
          setintitile(res.data[0])
        }catch(err){
          console.log(err);
        }
      }
         fetchData();
    
      }, []);
   
   const changeIntitile=e=>{
    setNew_data({ ...new_data, intitile: e.target.value })
    setintitile(e.target.value)
   }
      const addhandler = e => {
        e.preventDefault();
     

        setPersos([...persos, new_data]);
        setNew_data({ intitile: "", categ: "", prix:"" });
      };
      const deleteItem = async (intitile) => {
        const newList = persos.filter((item) => item.intitile !== intitile);
 
        setPersos(newList);    }
    return (
        <> 
<form className="formModel" onSubmit={e => addFormateur(e)}>

    <div className='modelDiv'>
        <div className='modelRight'>
          <label> Titre</label><br/> 
          <select value={Titre}  style={{width:"300px"}}  onChange={e => {setTitre(e.target.value)} } >
   
    <option value="M.">M.</option>
    <option value="Mme">Mme </option>
    <option value=" Mlle"> Mlle </option>
    </select>
    <br/> 
    <label> Raison sociale :</label><br/>
      <input type="text" placeholder='Raison sociale' onChange={e => {setraisonSocial(e.target.value)} } value={raisonSocial}/> <br/>
   
      <label> Nom :</label><br/>
      <input type="text" placeholder='Nom' onChange={e => {setNom(e.target.value)} } value={Nom}/> <br/>
      <label>Prénom : </label><br/>
      <input type="text" placeholder='Prénom' onChange={e => {setPrenom(e.target.value)} } value={Prenom}/> <br/>
      <label>Téléphone : </label><br/>
      <input type="tel" placeholder='Téléphone' onChange={e => {setTelephone(e.target.value)} } value={Telephone}  /> <br/>
      <label>Mail :</label><br/>
      <input type="email" placeholder='Mail' onChange={e => {setMail(e.target.value)} } value={Mail}/> <br/>
      <label> Adresse 1 :</label><br/>
      <input type="text" placeholder='Adresse 1' onChange={e => {setAdresse_1(e.target.value)} } value={Adresse_1}/> <br/>
      <label> Adresse 2 :</label><br/>
      <input type="text" placeholder='Adresse 2' onChange={e => {setAdresse_2(e.target.value)} } value={Adresse_2}/> <br/>
      <label> Code postal et ville</label><br/>
      <input type="text" placeholder='Code postal et ville' onChange={e => {setCodeVille(e.target.value)} } value={CodeVille}/> <br/>
     
     
    </div>
      <div className='modelLeft' >
  
  
      <div className='divflex'  >
  <div>  <input  type="checkbox"  checked={checktva}  style={{marginLeft:'-100px'}}  onChange={handleChangeVisibletva}/></div>
  <div className='divflexlabel' style={{width:'250px'}}>  <label  > Assujetti à la TVA</label></div>
  <div>  
  <select value={tva} className='divflexinput' onChange={e => {settva(e.target.value)} } style={{visibility: Visibletva,width:"170px"}} >
    <option value="20" >20 </option>
    <option value="10">10  </option>
    <option value="5.5"> 5,5 </option>
    <option value="0"> Pas de TVA</option>
    </select>
  </div>
  <div style={{visibility: Visibletva}}>   <p >% </p></div> 
  </div>
  <div className='divflex'   >
  <div>  <input  type="checkbox"  checked={checkDeplacement}  style={{marginLeft:'-100px'}}  onChange={handleChangeVisibleDeplacement}/></div>
  <div className='divflexlabel' style={{width:'250px'}}>  <label  > Frais de déplacement
</label></div>


  <div>  
  <input type="text" value={Deplacement} className='divflexinput' onChange={e => {setDeplacement(e.target.value)} } style={{visibility: VisibleDeplacement,width:"170px"}} />
 
  </div>
  <div style={{visibility: VisibleDeplacement}}>   <p >€</p></div> 
  </div>

  <br/> 
  <label> Charte du formateur :</label><br/>
      <input type="file" accept=".pdf" onChange={e => {setFile(e.target.files[0])} }  />
 
    
<br/> 
<div className='tableDiv tabledecore'> 
  <table  >
        <thead>
          <tr>
            <th style={{width:"8%"}}>Intitulé</th>
            <th style={{width:"8%"}}>Module</th>
            <th style={{width:"8%"}}>prix (€)</th>
            <th style={{width:"2%"}}> Action</th>
          </tr> 
        </thead>
        <tbody>
          {persos.map(p => (
            <tr key={p.id}>
              <td>{p.intitile}</td>
              <td>{p.categ}</td>
              <td>{p.prix}</td>
              <td> <button  onClick={() => deleteItem(p.intitile)}>   <Delete /></button></td>
            </tr>
          ))}
        </tbody>
        <tfoot>
      <tr>
    <td>  <select style={{width:"100px"}}   
             onChange={changeIntitile}>   
                 <option value="" selected>choisir</option>

            { listintitile.map((option)=>{
    return(   <option>{option} </option> )
       })}</select> </td> 
    <td>       <select   style={{width:"100px"}} onChange={e => setNew_data({ ...new_data, categ: e.target.value })}  >
    <option value="" selected>choisir</option>
            {dataFormationModule.map((option) => ( 
              
              <option value={option.type}>{option.type}</option>
            ))}
    </select> </td>
    <td>     <input
              type="text"
              style={{  width: "100px"}}              value={new_data.prix}
              onChange={e => setNew_data({ ...new_data, prix: e.target.value })}
            /> </td>
            <td>      <button onClick={addhandler} style={{margin:"20px" , background:"#D0E3FA",border:"none"}}><Add/></button>
 </td>

    </tr>
    </tfoot>
      </table></div>

  </div>
    </div>
    <button type="submit" className='buttonEnregistre'>Add</button>
    </form>
    </>
    )
}
