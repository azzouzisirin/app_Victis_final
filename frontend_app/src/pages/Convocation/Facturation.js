import React ,{ useEffect,useState } from 'react'; 
import { Link } from "react-router-dom";
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import {BASE_URL} from "../../helper"

import PopUp from '../../components/BoxMessage/PopUp'

  
  function Facturation(props){  

    const { id} = props;
    const [bob,setbob]=useState()  
    const [showPdf, setshowPdf] = useState("false")
    const [EntrepAdherante,setEntrepAdherante]=useState()
    const [titreFormation,settitreFormation]=useState()
    const [Reference,setReference]=useState()
    const [DateFin,setDateFin]=useState()
    const [RaisonOpco,setRaisonOpco]=useState()
    const [nomOpco,setnomOpco]=useState()
    const [prenomOpco,setprenomOpco]=useState()
    const [mailOpco,setmailOpco]=useState()
    const [nomDossier,setnomDossier]=useState("")
    const user = JSON.parse(localStorage.getItem("user"));
    var username=user.titre+" "+user.nom+" "+user.prenom

    const [nomClient,setnomClient]=useState()
    const [emailClient,setemailClient]=useState()
    const [DateDebut,setDateDebut]=useState()
    const [idOpco,setidOpco]=useState()
    const [LieuFormation,setLieuFormation]=useState()
    const [HeureFormation,setHeureFormation]=useState()
    const [Prixtva,setPrixtva]=useState()
  const [visibleOpco,setvisibleOpco]=useState("none")
    useEffect(() => {
      const fetchData = async () => {
        try{  
        const res = await axios.get(`${BASE_URL}/session/getDonneFacturation/${id}`);
        setEntrepAdherante(res.data.EntrepAdherante) 
        settitreFormation(res.data.titreFormation) 
        setReference(res.data.Reference) 
        setDateDebut(res.data.DateDebut) 
        setDateFin(res.data.DateFin) 
        setRaisonOpco(res.data.RaisonOpco) 
        setnomOpco(res.data.nomOpco) 
        setprenomOpco(res.data.prenomOpco) 
        setmailOpco(res.data.mailOpco) 
        setnomClient(res.data.nomClient) 
        setemailClient(res.data.emailClient) 
        setidOpco(res.data.idOpco) 
     
  
          
      }catch(err){
        console.log(err);
      }
    }
    fetchData();
  
    }, []);
useEffect(()=>{
  if(idOpco==""){
    setvisibleOpco("none")
  }else{
    setvisibleOpco("flex")

  }
},[idOpco])
    useEffect(() => {
  
      const fetchData = async () => { 
        const res = await axios.get(`${BASE_URL}/session/getDonneConvocation/`+id+'/'+username);
           setnomDossier(res.data.numDevis+"_"+res.data.RaisonSociale+"_"+res.data.designiationFormation+"_"+res.data.Module+"_"+res.data.typeFormation)
  
      };
      fetchData();
      
      
      }, []);
    const VoirApprenant=async()=>{
     

        await  axios.post(BASE_URL+"/session/createPdf/APPRECIATION", 
        {
          Reference: Reference,
          titreFormation: titreFormation,
          DateDebut: DateDebut,
          DateFin: DateFin,
          nomClient: nomClient,
          emailClient: emailClient,

          RaisonOpco: RaisonOpco,
        
      }  )
     
       .then(()=>{    

      axios.get(`${BASE_URL}/session/showPdf/APPRECIATION`,{responseType:'blob'}).then((res2)=>{


        const pdfBlob = new Blob([res2.data],{type:'application/pdf'}) 
      setbob(URL.createObjectURL(pdfBlob))
   })})
}
const voirEvaluationOPCO=async()=>{
  

   await axios.post(BASE_URL+"/session/createPdf/FeuilleOpco",   {
    EntrepAdherante: EntrepAdherante,
    titreFormation: titreFormation,
    Reference: Reference,
    DateDebut: DateDebut,
    DateFin: DateFin,
    RaisonOpco: RaisonOpco,
    nomOpco:nomOpco,
    prenomOpco: prenomOpco,
    mailOpco: mailOpco,
 
}  )
 
   .then(()=>{    

  axios.get(`${BASE_URL}/session/showPdf/FeuilleOpco`,{responseType:'blob'}).then((res2)=>{


    const pdfBlob = new Blob([res2.data],{type:'application/pdf'}) 
  setbob(URL.createObjectURL(pdfBlob))
})})
}
const SendnomClient = async (e) => { 
  e.preventDefault()
  setshowPdf("true") 

 
 
}

const SaveFormateur = async () => { 


  const config = {  
    headers: { 
      "Content-type": "application/json",
    },
  }; 
const res1=  await axios.post(BASE_URL+"/newfolder/7_Facturation",{
      pathDossier:user.shemaDossie,
      addpath:nomDossier
   
    },config)




    const res = await axios.post(BASE_URL+"/session/copeFilePdf", {
      filePath:"./documents/APPRECIATION.pdf",
      filecopy:user.shemaDossie+"/"+nomDossier+"/7_Facturation/Evaluation à froid_Apprenant ou manager.pdf"
  }  ,
  
  config
); 
 if(idOpco==""){}
 else{
  const res2 = await axios.post(BASE_URL+"/session/copeFilePdf", {
    filePath:"./documents/FeuilleOpco.pdf",
    filecopy:user.shemaDossie+"/"+nomDossier+"/7_Facturation/Feuille d'évaluation OPCO.pdf"
  }  ,
  
  config
  ); 
 }

  toast.success('Formateur bien Enregistre !')

 


}

   return(
    <div style={{display:"flex"}}>
 <div style={{flex:"80%",paddingLeft:"130px"}}>
   <iframe src={bob} height="800" width="1350" title="Iframe Example" ></iframe>


</div> 
 
<div  className='menuPdf' style={{flex:"23%"}}>
<ul>
<Link  onClick={VoirApprenant} >   <li> Evaluation à froid Apprenant </li></Link>
<Link style={{display:visibleOpco}} onClick={voirEvaluationOPCO} >   <li> Feuille d'évaluation OPCO  </li></Link>
<Link  onClick={SaveFormateur} >    <li > Enregistrer</li></Link>

<Link  onClick={SendnomClient} >   <li> Envoyer  </li></Link>
 
  </ul> 
</div> 
{ showPdf=="true"?<PopUp type="sendFormateur" email={nomClient}   setshowPdf={setshowPdf} />:null}
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
   )
};

export default Facturation;