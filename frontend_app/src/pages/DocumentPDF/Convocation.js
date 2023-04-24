import React ,{ useEffect,useState } from 'react'; 
import { Link } from "react-router-dom";
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import {BASE_URL} from "../../helper"

import {  Add,Delete } from '@material-ui/icons'

  
  function Convocation(props){

    const { id} = props;
const [chekResponsable , setchekResponsable ]= useState(false);
const [chekAutres, setchekAutres ]= useState(false);

const [object, setobject] = useState("");
const [text0, settext0] = useState("");
const [Contact, setContact] = useState()

const [typeFormation,settypeFormation]=useState("")
const [nomDossier,setnomDossier]=useState("")
const [NumSession,setNumSession]=useState("")
const [nomClient, setnomClient] = useState()
const [     heurDebut,setheurDebut] = useState()
const [  heurFin,setheurFin] = useState()
const user = JSON.parse(localStorage.getItem("user")); 

var username=user.titre+" "+user.nom+" "+user.prenom
const [text1, settext1] = useState("");
const [text2, settext2] = useState("");
const [text3, settext3] = useState("");
const [persos, setPersos] = useState([]);
const [sousResponsable, setsousResponsable] = useState([]);

const [adressFormation, setadressFormation] = useState("");
const [CodePostalFormation, setCodePostalFormation] = useState("");
const [adressClient, setadressClient] = useState("");
const [dureeFormation, setdureeFormation] = useState("");
const [dateFin, setdateFin] = useState("");
const [dateDebut, setdateDebut] = useState("");
const [emailClient, setemailClient] = useState("");
const [CodePostalClient , setCodePostalClient]=useState("")
const [nomFormation, setnomFormation] = useState("");


  const [new_data, setNew_data] = useState({
    titre:"M.",prenom:"", nom: "", fonction: "", email:"",envoye:false
  }); 
  const [new_dataResponsable, setNew_dataResponsable] = useState({
    titre:"M.",prenom:"", nom: "", fonction: "", email:""
  }); 
  useEffect(() => {
  
    const fetchData = async () => { 
      const res = await axios.get(`${BASE_URL}/session/getDonneConvocation/`+id+'/'+username);
      setNumSession(res.data.NumSession)
      setContact(res.data.Contact) 
      setnomClient(res.data.nomClient) 
      setheurDebut(res.data.heurDebut)
       setheurFin(res.data.heurFin)
      settypeFormation(res.data.typeFormation)
       setadressFormation(res.data.adressFormation)
      setCodePostalFormation(res.data.CodePostalFormation)
      setnomFormation(res.data.nomFormation)
       setadressClient(res.data.adressClient)
       setCodePostalClient(res.data.CodePostalClient)
       setnomFormation(res.data.nomFormation)
       setemailClient(res.data.emailClient)
      setdureeFormation(res.data.dureeFormation)
      setdateFin(res.data.dateFin) 
      setdateDebut(res.data.dateDebut)
      setnomDossier(res.data.nomDossie)
    };
    fetchData();
    
    
    }, []);


    

    
  const SaveConvocation = async () => { 


    const config = {  
      headers: { 
        "Content-type": "application/json",
      },
    }; 
 const res1=  await axios.post(BASE_URL+"/newfolder/3_Convocations",{
        pathDossier:user.shemaDossie,
        addpath:nomDossier
     
      },config)  

      for(var i=0 ; i<persos.length; i++){
  
      const res2=     axios.post(BASE_URL+"/session/createPdfConcocation/sendConditaure", {
            NumSession:NumSession,
            nomStagaire:persos[i].titre+" "+persos[i].prenom+" "+persos[i].nom,
           Contact:Contact, 
           nomClient:nomClient,
           CodePostalClient:CodePostalClient,
           heurDebut:heurDebut,
           heurFin:heurFin,
           adressFormation:adressFormation,
           CodePostalFormation:CodePostalFormation,
           nomFormation:nomFormation,
           adressClient:adressClient,
           dureeFormation:dureeFormation, 
           dateFin:dateFin, 
           dateDebut:dateDebut,
           typeFormation:typeFormation,
           filePath:"./documents/Convocation.pdf",
        filecopy:user.shemaDossie+"/"+nomDossier+"/3_Convocations/Convocation Formation "+nomFormation+" - "+persos[i].titre+" "+persos[i].prenom+" "+persos[i].nom+".pdf",

       } ,config) 
      }
  
      
      
    
   
        const res = await axios.put(`${BASE_URL}/offre/${id}`, {
          listStagaire: persos,
          listSousResponsable:sousResponsable,
      
      }  ,
       
      config
    );
     
   
    toast.success('Convocation bien Enregistre !')
  
   
  
  
  }
 
  useEffect(() => {
    const fetchData = async () => {
      try{  
      const res = await axios.get(`${BASE_URL}/offre/${id}`);
      settypeFormation(res.data.TypeFormation)
      setPersos(res.data.listStagaire) 
      setsousResponsable(res.data.listSousResponsable)
    
    }catch(err){
      console.log(err);
    }
  }
  fetchData();

  }, []);


  const handleChangePersonne = (event) => { 
    if (event.target.checked) {
      setNew_data({ ...new_data, envoye: true })
        } else {
          setNew_data({ ...new_data, envoye: false })
        }
  }; 

  const handleChangeResponsable = (event) => { 
    if (event.target.checked) {
      setchekResponsable(true)
    } else {
      setchekResponsable(false)
    }
  }; 
  const handleChangechekAutres = (event) => { 
    if (event.target.checked) {
      setchekAutres(true)
    } else {
      setchekAutres(false)
      setsousResponsable([])
    }
  }; 
  const deleteItem = (nom) => {
    const newList = persos.filter((item) => item.nom !== nom);

    setPersos(newList);  
   } 
   const chekemail = (nom) => {
    const newList = persos.map((obj) => {

      if (obj.nom == nom) {

       obj.envoye=!obj.envoye;
      }
      setPersos(newList);  
    })
   } 
   const addhandler = e => {
    e.preventDefault();
    setPersos([...persos, new_data]);
    setNew_data({titre:"M.",prenom:"", nom: "", fonction: "", email:"",envoye:false });
  };

  const addhandlerResponsable = e => {
    e.preventDefault();
    setsousResponsable([...sousResponsable, new_dataResponsable]);
    setNew_dataResponsable({...new_dataResponsable,titre:"M.",prenom:"", nom: "", fonction: "", email:""});
  };
  useEffect(()=>{
    if(typeFormation=="En intra-entreprise"){
    
      settext0("Bonjour ")
      settext1("Veuillez trouver ci-joint la convocation.")
      settext2("Vous souhaitant une excellente formation.")
    
    }
    if(typeFormation=="En inter-enterprise"){
      settext0("Bonjour ")
      settext1("Veuillez trouver ci-joint la convocation ainsi que le livret d'accueil stagiaire.")
      settext2("Vous souhaitant une excellente formation.")
      settext3("")
    
    }
    if(typeFormation=="En distanciel"){
      settext0("Bonjour ")
      settext1("Veuillez trouver ci-joint la convocation, le lien Teams ainsi que la procédure de formation.")
      settext2("Si vous avez le moindre problème le jour de la formation, n'hésitez pas à contacter directement le formateur.")
      settext3("Vous souhaitant une excellente formation.")
    
    }
    },[typeFormation])

    const SendEmail = async (e) => { 
      e.preventDefault() 
      toast.success('email envoye !')
 
  if(chekResponsable==false){
          for(var i=0 ; i<persos.length; i++){
      
        const res = await axios.post(`${BASE_URL}/session/sendPdfConcocation/sendConditaure`,{
        
          subject:"Convocation Formation "+nomFormation  +"- Perfectionnement_"+persos[i].titre+" "+ persos[i].nom+" " +persos[i].prenom,
      
          linun:text0,
          lindeux:text1 ,
          lintrois: text2,
          linquatre: text3, 
          email:persos[i].email,
          ccemail:emailClient,
          EmailUser:user.email,
          PassEmail:user.PassEmail,
          host:user.host,
          typeFormation:typeFormation,
          filepath:user.shemaDossie+"/"+nomDossier+"/3_Convocations",
          nomFile:"Convocation Formation "+nomFormation+" - "+persos[i].titre+" "+persos[i].prenom+" "+persos[i].nom,
            
           
        })
   
      }
    }
    if(chekResponsable==true){
      var ccemail=[""]
      if(chekAutres==true){
        for(var i=0; i<sousResponsable.length;i++){
        ccemail[i]=sousResponsable[i].email
        }
      }
      const res = await axios.post(`${BASE_URL}/session/sendPdfConcocation/sendResponsable`,{
        
        subject:object,
    
        linun:text0,
        lindeux:text1 , 
        lintrois: text2, 
        linquatre: text3,
        EmailUser:user.email,
        PassEmail:user.PassEmail,
        ccemail:ccemail,
        email:emailClient,
        listStagaire:persos.length,
        nomDossie: nomDossier,
        typeFormation:typeFormation,
        pathDossier:user.shemaDossie,
        nomFile:"Convocation Formation "+nomFormation+" - "+persos[i].titre+" "+persos[i].prenom+" "+persos[i].nom+".pdf",
          
         
      })

    }
  }
    return (
      <div style={{display:"flex"}}> 


      <div style={{flex:"80%"}}>  
<div className='tabledecore' > 
    <table  style={{width:"90%",marginLeft:"120px",marginTop:"40px"}}> 
        <thead>
          <tr> 
            <th>Titre</th>
            <th>Prenom</th>
            <th>Nom</th>
            <th> Fonction</th>
            <th> Email</th>
            <th> Envoye à</th>

          </tr>
        </thead>
        <tbody> 
          {persos.map((p) => (
            <tr >
              <td>{p.titre}</td>
              <td>{p.prenom}</td>
              <td>{p.nom}</td>
              <td>{p.fonction}</td>
              <td>{p.email}</td>
              <td>   <input
              type="checkbox"
              className="lebelZonText"
              checked={p.envoye}
              onChange={() => chekemail(p.nom)}
            /></td>

              <td> 

              <Link  onClick={() => deleteItem(p.nom)}>   <Delete /></Link>


              </td>
            </tr>
          ))}
        </tbody>
        <thead>
          <tr>
     <td> <select value={new_data.titre}  style={{width:"100px"}}  onChange={e => setNew_data({ ...new_data, titre: e.target.value })} >
   
                <option value="M.">M.</option>
                <option value="Mme">Mme </option>
                <option value=" Mlle"> Mlle </option>
                </select>
            
     </td>

            <td>   <input
              type="text"
              className="lebelZonText"
              onChange={e => setNew_data({ ...new_data, prenom: e.target.value })}
            /></td>

   <td>   <input
              type="text"
              className="lebelZonText"
              onChange={e => setNew_data({ ...new_data, nom: e.target.value })}
            /></td>
               <td>   <input
              type="text"
              className="lebelZonText"
              onChange={e => setNew_data({ ...new_data, fonction: e.target.value })}
            /></td>
               <td>   <input
              type="text"
              className="lebelZonText"
              onChange={e => setNew_data({ ...new_data, email: e.target.value })}
            /></td>
               <td>   <input
              type="checkbox"
              className="lebelZonText"
              onChange={handleChangePersonne}
          
             
            /></td>
           
            <td>       <button onClick={addhandler} style={{margin:"20px" , background:"#D0E3FA",border:"none"}}><Add/></button></td>
          </tr>
        </thead>
      </table>
      </div>
<div>
  <input type="checkbox" checked={chekResponsable} onChange={handleChangeResponsable}/> <label style={{marginLeft:"-130px"}} > Responsable</label><br/>
  <input type="checkbox" checked={chekAutres} onChange={handleChangechekAutres}/> <label style={{marginLeft:"-130px"}} > Autres</label>
{chekAutres==true? <div> 

  <div className='tabledecore' > 
    <table  style={{width:"90%",marginLeft:"120px",marginTop:"40px"}}> 
        <thead>
          <tr> 
            <th>Titre</th>
            <th>Prenom</th>
            <th>Nom</th>
            <th> Fonction</th>
            <th> Email</th>

          </tr>
        </thead>
        <tbody> 
          {sousResponsable.map((p) => (
            <tr >
              <td>{p.titre}</td>
              <td>{p.prenom}</td>
              <td>{p.nom}</td>
              <td>{p.fonction}</td>
              <td>{p.email}</td>
           

              <td> 

              <Link  onClick={() => deleteItem(p.nom)}>   <Delete /></Link>


              </td>
            </tr>
          ))}
        </tbody>
        <thead>
          <tr>
     <td> <select value={new_data.titre}  style={{width:"100px"}}  onChange={e => setNew_dataResponsable({ ...new_dataResponsable, titre: e.target.value })} >
   
                <option value="M.">M.</option>
                <option value="Mme">Mme </option>
                <option value=" Mlle"> Mlle </option>
                </select>
            
     </td>

            <td>   <input
              type="text"
              className="lebelZonText"
              onChange={e => setNew_dataResponsable({ ...new_dataResponsable, prenom: e.target.value })}
            /></td>

   <td>   <input
              type="text"
              className="lebelZonText"
              onChange={e => setNew_dataResponsable({ ...new_dataResponsable, nom: e.target.value })}
            /></td>
               <td>   <input
              type="text"
              className="lebelZonText"
              onChange={e => setNew_dataResponsable({ ...new_dataResponsable, fonction: e.target.value })}
            /></td>
               <td>   <input
              type="text"
              className="lebelZonText"
              onChange={e => setNew_dataResponsable({ ...new_dataResponsable, email: e.target.value })}
            /></td>
           
           
            <td>       <button onClick={addhandlerResponsable} style={{margin:"20px" , background:"#D0E3FA",border:"none"}}><Add/></button></td>
          </tr>
        </thead>
      </table>
      </div>
</div>:null}
</div>
</div>
<div  className='menuPdf' style={{flex:"20%"}}>
       <ul> 
       
       <Link  onClick={SaveConvocation} >    <li > Enregistrer</li></Link>
       <Link  onClick={SendEmail}  >    <li > Envoyer Convocations </li></Link>

       </ul>
     </div> 
     <Toaster   position="bottom-right"  toastOptions={{
    success: {
      style: {
        width: '700px',
        height:'70px',
        border:'green',
        borderStyle: "solid",
        fontSize:'25px',
      },
    },
    error: {
      style: {
        width: '700px',
        height:'70px',
        border:'red',
        borderStyle: "solid",
        fontSize:'25px',

      },
    },
  }}
  reverseOrder={false}/>
        </div>
    );
};

export default Convocation;