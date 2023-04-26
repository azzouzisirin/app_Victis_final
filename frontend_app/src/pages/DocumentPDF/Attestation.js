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
    const [nomClient, setnomClient] = useState()
    const [DateDebut,setDateDebut]=useState()

    const [persos, setPersos] = useState([]);

    const [DateFin,setDateFin]=useState()

    const [nomDossier,setnomDossier]=useState("")
    const user = JSON.parse(localStorage.getItem("user"));

    const [emailClient,setemailClient]=useState()
   
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
      setDateDebut(res.data.DateDebut) 
      setDateFin(res.data.DateFin) 

      setcodeVilleFormation(res.data.codeVilleFormation)
      setLieuFormation(res.data.lieuFormation)
        const res1 = await axios.get(`${BASE_URL}/session/${id}`);
        setnumSession(res1.data.numSession) 
        setnomDossier(res1.data.nomDossie)
        setemailClient(res1.data.email)
        setnomClient(res1.data.titreClient+" "+res1.data.nomClient+" "+res1.data.prenomClient) 
        axios.get(`${BASE_URL}/session/affichePDFAttestation/${id}/0`,{responseType:'blob'}).then((res2)=>{


          const pdfBlob = new Blob([res2.data],{type:'application/pdf'}) 
        setbob(URL.createObjectURL(pdfBlob))
     })
     const res3 = await axios.post(BASE_URL+"/session/copeFilePdf", {
      filePath:"./documents/AttestationSatgaire.pdf",
      filecopy:"./test",
      nomfile:"/Attestation de formation"+res.data.listStagaire[0].titre +" "+res.data.listStagaire[0].nom+" "+res.data.listStagaire[0].prenom+".pdf"
  }  )

    }catch(err){
      console.log(err);
    }
  }
  fetchData();

  }, []);
    const VoirAttestation=async(titre,nom,prenom,index)=>{
   axios.get(`${BASE_URL}/session/affichePDFAttestation/${id}/${index}`,{responseType:'blob'}).then((res2)=>{


        const pdfBlob = new Blob([res2.data],{type:'application/pdf'}) 
      setbob(URL.createObjectURL(pdfBlob))
   })
   const res = await axios.post(BASE_URL+"/session/copeFilePdf", {
    filePath:"./documents/AttestationSatgaire.pdf",
    filecopy:"./test",
    nomfile:"/Attestation de formation"+titre +" "+nom+" "+prenom+".pdf"
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
      filecopy:user.shemaDossie+"/"+nomDossier+"/5_Attestations de formation",
      nomfile:"/Attestation de formation"+persos[i].titre +" "+persos[i].nom+" "+persos[i].prenom+".pdf"
  }  ,
  
  config
); 
   }
    toast.success('Attestation bien Enregistre !')

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
   {persos.map((p,index) => (
   <Link  onClick={() => VoirAttestation(p.titre,p.nom,p.prenom,index)} >   <li> Attestation de {p.titre} {p.nom} {p.prenom} </li></Link>
   
                 ))}
     <Link onClick={EnregistreFile}  >       <li> Enregistrer </li></Link>
          <Link  onClick={SendEmail}  >    <li > Envoyer  </li></Link>

          </ul> 
   </div> 
   { showPdf=="true"?<PopUp type="sendAttestation" email={emailClient} nomClient={nomClient} nomFormation={nomFormation} DateDebut={DateDebut} DateFin={DateFin} LieuFormation={LieuFormation}numSession={numSession}  setshowPdf={setshowPdf} persos={persos} />:null}
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