import React ,{ useEffect,useState } from 'react'; 
import { Link } from "react-router-dom";
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import {BASE_URL} from "../../helper"

import PopUp from '../../components/BoxMessage/PopUp'

  
  function Attestation(props){  

    const { id} = props;
    const [bob,setbob]=useState()  
    const [showPdf, setshowPdf] = useState("false")
    const [EntrepAdherante,setEntrepAdherante]=useState()
    const [titreFormation,settitreFormation]=useState()
    const [Reference,setReference]=useState()
    const [DateFin,setDateFin]=useState()
    const [RaisonOpco,setRaisonOpco]=useState()
    const [nomOpco,setnomOpco]=useState()
    const [persos, setPersos] = useState([]);

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
    const [nomFormation,setnomFormation]=useState()
    const [codeVilleFormation,setcodeVilleFormation]=useState()
  const [numSession,setnumSession]=useState(false)
   
  useEffect(() => { 
       
    const fetchData = async () => {
      try{  
      const res = await axios.get(`${BASE_URL}/offre/${id}`);
      setPersos(res.data.listStagaire) 
      setnomFormation(res.data.designiationFormation+" - "+res.data.typeFormation)
      setcodeVilleFormation(res.data.codeVilleFormation)
      setLieuFormation(res.data.lieuFormation)
        const res1 = await axios.get(`${BASE_URL}/session/${id}`);
        setnumSession(res1.data.numSession) 
        setnomDossier(res1.data.nomDossie)
    }catch(err){
      console.log(err);
    }
  }
  fetchData();

  }, []);
    const VoirAttestation=async(titre,nom ,prenom)=>{
     

        await  axios.post(BASE_URL+"/session/createPdf/AttestationSatgaire", 
        {
          numSession: numSession,
          codeVilleFormation: codeVilleFormation,
          LieuFormation: LieuFormation,
          nomFormation: nomFormation,
          nomstagaire: titre +" "+nom+" "+prenom,
      
        
      }  )
     
       .then(()=>{    

      axios.get(`${BASE_URL}/session/showPdf/AttestationSatgaire`,{responseType:'blob'}).then((res2)=>{


        const pdfBlob = new Blob([res2.data],{type:'application/pdf'}) 
      setbob(URL.createObjectURL(pdfBlob))
   })})
   const res = await axios.post(BASE_URL+"/session/copeFilePdf", {
    filePath:"./documents/AttestationSatgaire.pdf",
    filecopy:"./test/Attestation de formation"+titre +" "+nom+" "+prenom+".pdf"
}  )
}
const SendEmail = async (e) => { 
  e.preventDefault() 
  setshowPdf("true") 



  

}
const EnregistreFile=async()=>{
  try{
    const config = {  
      headers: { 
        "Content-type": "application/json",
      },
    }; 
  const res1=  await axios.post(BASE_URL+"/newfolder/5_Attestations de formation",{
        pathDossier:user.shemaDossie,
        addpath:nomDossier
     
      },config)
   for(var i=0;i<persos.length;i++){
    const res = await axios.post(BASE_URL+"/session/copeFilePdf", {
      filePath:"./test/Attestation de formation"+persos[i].titre +" "+persos[i].nom+" "+persos[i].prenom+".pdf",
      filecopy:user.shemaDossie+"/"+nomDossier+"/5_Attestations de formation/Attestation de formation"+persos[i].titre +" "+persos[i].nom+" "+persos[i].prenom+".pdf"
  }  ,
  
  config
); 
   }
    toast.success('Documents bien Enregistre !')

}catch(err){
  console.log(err);
  toast.error(err)

}




    


}

   return(
    <div style={{display:"flex"}}>
    <div style={{flex:"80%",paddingLeft:"130px"}}>
      <iframe src={bob} height="800" width="1350" title="Iframe Example" ></iframe>
   
   
   </div> 
    
   <div  className='menuPdf' style={{flex:"30%"}}>
   <ul className='souList'>
   {persos.map(p => (
   <Link  onClick={() => VoirAttestation(p.titre,p.nom,p.prenom)} >   <li> Attestation de {p.titre} {p.nom} {p.prenom} </li></Link>
   
                 ))}
     <Link onClick={EnregistreFile}  >       <li> Enregistrer </li></Link>
          <Link  onClick={SendEmail}  >    <li > Envoyer  </li></Link>

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

export default Attestation;