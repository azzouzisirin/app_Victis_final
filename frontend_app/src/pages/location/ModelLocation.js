import React, { useState, useEffect } from 'react'
import { Delete ,Check,Update} from '@material-ui/icons'

import './location.css'
import axios from 'axios';
import {BASE_URL} from "../../helper"

  
export default function Modellocation(props ) {
  const { idforma, setOpenPopup } = props;
 
  const [observation, setobservation] = useState();

  const [frais, setfrais] = useState([]);
 const [totalHt,settotalHt]=useState(0)
 const [prixHt,setprixHt]=useState(0)
 const [petitdej,setpetitdej]=useState(0)
 const [prixTTC,setprixTTC]=useState(0)
 const [Titre, setTitre] = useState('M.');

    const [raisonSociale, setraisonSociale] = useState('');
    const [Nom, setNom] = useState('');
    const [updtouNon, setupdtouNon] = useState(0);
const[ indexp,setindexp]= useState();
    const [Prenom, setPrenom] = useState('');
    const [Telephone, setTelephone] = useState('');
    const [portable, setportable] = useState('');
    const [RecentTelephone, setRecentTelephone] = useState('');
    const [Recentportable, setRecentportable] = useState('');
    const [Mail, setMail] = useState('');
    const [Adresse_1, setAdresse_1] = useState('');
    const [Adresse_2, setAdresse_2] = useState('');
    const [CodeVille, setCodeVille] = useState('');
    
    var somme=0
    var sommeTva=0

    const [new_data, setNew_data] = useState({
      burau: " ", nbPost:" ",observation:" ",prixHt:" ",petitDej:" ",totalHt:" ",totalTTC:" "
    }); 
   useEffect(()=>{
   
     somme=prixHt+petitdej
    settotalHt(somme)
    setNew_data({ ...new_data, totalHt: somme.toString() })

   },[prixHt,petitdej])
   useEffect(()=>{
    sommeTva=(totalHt*0.2).toFixed(2)
    setprixTTC(sommeTva)
    setNew_data({ ...new_data, totalTTC: sommeTva.toString() })


   },[totalHt])
    useEffect(()=>{
      if(idforma){
        const getItemsList = async () => {
          try{
            const res = await axios.get(BASE_URL+"/location/"+idforma)
            setTitre(res.data.titre);

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
            titre: Titre,
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
            titre: Titre,

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
 
  const ValuePrixHT =((e)=>{

    setNew_data({ ...new_data, prixHt: e.target.value })
    setprixHt(Number(e.target.value))

  })
  const ValuePetitDej =((e)=>{
setpetitdej(Number(e.target.value))
    setNew_data({ ...new_data, petitDej: e.target.value })

  })
    
      const addhandler=((e)=>{
        e.preventDefault(); 
        somme=0
        sommeTva=0
        setprixHt(0)
       setpetitdej(0)
if(updtouNon==0){
  setfrais([...frais, new_data]);
        setNew_data({ burau: "", nbPost:"",observation:"",prixHt:"",petitDej:"",totalHt:"",totalTTC:""});

}else{

   const newState = frais.map((obj,index) => {
      if (index === indexp) {
        return {...obj, burau: new_data.burau, nbPost:new_data.nbPost,observation:new_data.observation,prixHt:new_data.prixHt,petitDej:new_data.petitDej,totalHt:new_data.totalHt,totalTTC:new_data.totalTTC};
      }

      return obj;
    });

    setfrais(newState);
    setNew_data({ burau: "", nbPost:"",observation:"",prixHt:"",petitDej:"",totalHt:"",totalTTC:""});
    setupdtouNon(0)

}
       


            })
      const deleteItem = async (burau) => {

       const newList = frais.filter((item) => item.burau !== burau);

       setfrais(newList);    }
 
       const updateItem=({p,index})=>{
   
        setNew_data({ ...new_data, burau: p.burau ,nbPost: p.nbPost,observation: p.observation,prixHt: p.prixHt,petitDej: p.petitDej , totalHt: p.totalHt,totalTTC: p.totalTTC })
        setprixHt(Number(p.prixHt))
       
        setpetitdej(Number(p.petitDej))
        setupdtouNon(1)
        setindexp(index) 


       }
    return (
        < div className="formModel">  

    <div className='modelDiv'>
        <div className='modelRight'>
          <label> Raison Sociale</label><br/> 
          <input type="text" placeholder='Raison Sociale' value={raisonSociale}  onChange={e => {setraisonSociale(e.target.value)} } />
    
    <br/>  
    <label> Titre</label><br/> 
          <select value={Titre}  style={{width:"300px"}}  onChange={e => {setTitre(e.target.value)} } >
   
    <option value="M.">M.</option>
    <option value="Mme">Mme </option>
    <option value=" Mlle"> Mlle </option>
    </select>
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
      <table style={{width:"1000px"}}  >
        <thead>
          <tr> 
            <th style={{width:"900px"}} title="salle de réunion ou bureau, Nom du bureau ... ">Bureau</th> 
            <th style={{width:"900px"}}>Nombre de post</th>
            <th style={{width:"900px"}}>Observation</th>
            <th style={{width:"900px"}}>Prix HT</th>
            <th style={{width:"900px"}}>Formule petit déjeuner</th>
            <th style={{width:"900px"}}> Total HT</th>
            <th style={{width:"900px"}}> Total TTC</th>
            <th style={{width:"900px"}}> Action</th>
          </tr>
        </thead>
        <tbody>
          {frais.map((p,index) => ( 
            <tr >
           
    <td>  {p.burau}  
            </td>
  
            <td>
           {p.nbPost}
             
              </td>
              <td> {p.observation}
              </td>
  
            <td>
           {p.prixHt}
              
 </td>
 <td>
        {p.petitDej}
            
 </td>
 <td>
            {p.totalHt}
           
 </td>
 <td>
           {p.totalTTC}
             
 </td>
             
              <td> 
              <button onClick={() => updateItem({p,index})} style={{margin:"20px" , background:"#D0E3FA",border:"none"}}><Update/></button>

                <button  onClick={() => deleteItem(p.burau)}>   <Delete /></button>
              
              </td>

            </tr> 
          ))}
        </tbody>
        <tfoot>
      <tr>
    <td>   <input
              type="text"
              style={{  width: "100%"}}
              value={new_data.burau}
              onChange={e => setNew_data({ ...new_data, burau: e.target.value })}
            /></td>
  
            <td>
            <input
              type="text"
              value={new_data.nbPost}
              style={{  width: "100%"}}
              onChange={e => setNew_data({ ...new_data, nbPost: e.target.value })}
            />
              </td>
              <td>   <input
              type="text"
              style={{  width: "100%"}}
              value={new_data.observation}
              onChange={e => setNew_data({ ...new_data, observation: e.target.value })}
            /></td>
  
            <td>
            <input
              type="text"
              value={new_data.prixHt}
              style={{  width: "100%"}}
              onChange={ValuePrixHT}
            />
 </td>
 <td>
            <input
              type="text"
              value={new_data.petitDej}
              style={{  width: "100%"}}
              onChange={ValuePetitDej}
            />
 </td>
 <td>
            <input
              type="text"
              value={new_data.totalHt}
              style={{  width: "100%"}}
            />
 </td>
 <td>
            <input
              type="text"
              value={new_data.totalTTC}
              style={{  width: "100%"}}
            />
 </td>
               <td> 

              <button onClick={addhandler} style={{margin:"20px" , background:"#D0E3FA",border:"none"}}><Check/></button>

              </td>
      </tr>

        </tfoot>
      </table>
      </div>
 <br/>
     

     
 
    
    <button onClick={e => addlocation(e)} className='buttonEnregistre'>Add</button>
    </div>
    )
}