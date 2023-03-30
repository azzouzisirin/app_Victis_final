import React ,{ useEffect,useState } from 'react'; 
import { Link } from "react-router-dom";
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import {BASE_URL} from "../../helper"

import PopUp from '../../components/BoxMessage/PopUp'

  
  function Formateur(props){  

    const { id} = props;
    const [bob,setbob]=useState()  
    const [showPdf, setshowPdf] = useState("false")
    const [numSession,setnumSession]=useState()
    const [nomFormateur,setnomFormateur]=useState()
    const [raisonClient,setraisonClient]=useState()
    const [nomFormation,setnomFormation]=useState()
    const [DateFin,setDateFin]=useState()
    const [adress_1Formateur,setadress_1Formateur]=useState()
    const [adress_2Formateur,setadress_2Formateur]=useState()
    const [CodePostalFormateur,setCodePostalFormateur]=useState()
    const [numTel,setnumTel]=useState()
    const [nomDossier,setnomDossier]=useState("")
    const user = JSON.parse(localStorage.getItem("user"));
    var username=user.titre+" "+user.nom+" "+user.prenom

    const [emailFormateur,setemailFormateur]=useState()
    const [nombStagaire,setnombStagaire]=useState()
    const [DateDebut,setDateDebut]=useState()
    const [duree,setduree]=useState()
    const [LieuFormation,setLieuFormation]=useState()
    const [HeureFormation,setHeureFormation]=useState()
    const [Prixtva,setPrixtva]=useState()

    useEffect(() => {
      const fetchData = async () => {
        try{  
        const res = await axios.get(`${BASE_URL}/session/getDonneFormateur/${id}`);
        setnumSession(res.data.numSession) 
        setnomFormateur(res.data.nomFormateur) 
        setraisonClient(res.data.raisonClient) 
        setnomFormation(res.data.nomFormation) 
        setDateFin(res.data.DateFin) 
        setadress_1Formateur(res.data.adress_1Formateur) 
        setadress_2Formateur(res.data.adress_2Formateur) 
        setCodePostalFormateur(res.data.CodePostalFormateur) 
        setnumTel(res.data.numTel) 
        setemailFormateur(res.data.emailFormateur) 
        setnombStagaire(res.data.nombStagaire) 
        setDateDebut(res.data.DateDebut) 
        setduree(res.data.duree) 
        setLieuFormation(res.data.LieuFormation) 
        setHeureFormation(res.data.HeureFormation) 
        setPrixtva(res.data.Prixtva) 
  
          
      }catch(err){
        console.log(err);
      }
    }
    fetchData();
  
    }, []);

    useEffect(() => {
  
      const fetchData = async () => { 
        const res = await axios.get(`${BASE_URL}/session/getDonneConvocation/`+id+'/'+username);
           setnomDossier(res.data.numDevis+"_"+res.data.RaisonSociale+"_"+res.data.designiationFormation+"_"+res.data.Module+"_"+res.data.typeFormation)
  
      };
      fetchData();
      
      
      }, []);
    const VoirRapportFormation=async()=>{
     

        await  axios.post(BASE_URL+"/session/createPdf/RapportFormateur", 
        {
          numSession: numSession,
          nomFormateur: nomFormateur,
          raisonClient: raisonClient,
          nomFormation: nomFormation,
          DateFin: DateFin,
          adress_1Formateur: adress_1Formateur,
          adress_2Formateur:adress_2Formateur,
          CodePostalFormateur: CodePostalFormateur,
          numTel: numTel,
          emailFormateur: emailFormateur,
          nombStagaire: nombStagaire,
          DateDebut: DateDebut,
          duree: duree,
          LieuFormation: LieuFormation,
          HeureFormation: HeureFormation,
          Prixtva: Prixtva
      }  )
     
       .then(()=>{    

      axios.get(`${BASE_URL}/session/showPdf/RapportFormateur`,{responseType:'blob'}).then((res2)=>{


        const pdfBlob = new Blob([res2.data],{type:'application/pdf'}) 
      setbob(URL.createObjectURL(pdfBlob))
   })})
}
const VoirContratPrestation=async()=>{
  

   await axios.post(BASE_URL+"/session/createPdf/ContratFormation",   {
    numSession: numSession,
    nomFormateur: nomFormateur,
    raisonClient: raisonClient,
    nomFormation: nomFormation,
    DateFin: DateFin,
    adress_1Formateur: adress_1Formateur,
    adress_2Formateur:adress_2Formateur,
    CodePostalFormateur: CodePostalFormateur,
    numTel: numTel,
    emailFormateur: emailFormateur,
    nombStagaire: nombStagaire,
    DateDebut: DateDebut,
    duree: duree,
    LieuFormation: LieuFormation,
    HeureFormation: HeureFormation,
    Prixtva: Prixtva
}  )
 
   .then(()=>{    

  axios.get(`${BASE_URL}/session/showPdf/ContratFormation`,{responseType:'blob'}).then((res2)=>{


    const pdfBlob = new Blob([res2.data],{type:'application/pdf'}) 
  setbob(URL.createObjectURL(pdfBlob))
})})
}
const SendEmailFormateur = async (e) => { 
  e.preventDefault()
  setshowPdf("true") 

 
 
}

const SaveFormateur = async () => { 


  const config = {  
    headers: { 
      "Content-type": "application/json",
    },
  }; 
const res1=  await axios.post(BASE_URL+"/newfolder/Formateur",{
      pathDossier:user.shemaDossie,
      addpath:nomDossier
   
    },config)




    const res = await axios.post(BASE_URL+"/session/copeFilePdf", {
      filePath:"./documents/RapportFormateur.pdf",
      filecopy:user.shemaDossie+"/"+nomDossier+"/Formateur/RapportFormateur_"+nomDossier+".pdf"
  }  ,
  
  config
); 
 
const res2 = await axios.post(BASE_URL+"/session/copeFilePdf", {
  filePath:"./documents/ContratFormation.pdf",
  filecopy:user.shemaDossie+"/"+nomDossier+"/Formateur/ContratFormation_"+nomDossier+".pdf"
}  ,

config
); 
  toast.success('Convocation bien Enregistre !')

 


}

   return(
    <div style={{display:"flex"}}>
 <div style={{flex:"80%",paddingLeft:"130px"}}>
   <iframe src={bob} height="800" width="1350" title="Iframe Example" ></iframe>


</div> 
 
<div  className='menuPdf' style={{flex:"20%"}}>
<ul>
<Link  onClick={VoirRapportFormation} >   <li> Rapport post-formation</li></Link>
<Link  onClick={VoirContratPrestation} >   <li> Contrat de prestation   </li></Link>
<Link  onClick={SaveFormateur} >    <li > Enregistrer</li></Link>

<Link  onClick={SendEmailFormateur} >   <li> Envoyer  </li></Link>
 
  </ul> 
</div> 
{ showPdf=="true"?<PopUp type="sendFormateur" email={emailFormateur}   setshowPdf={setshowPdf} />:null}
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

export default Formateur;