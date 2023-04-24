import React ,{ useEffect,useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

import PopUp from '../../components/BoxMessage/PopUp'
import {BASE_URL} from "../../helper"

import {  ChevronLeft,ExpandMore } from '@material-ui/icons'

   
  function Document(props){
    const { id} = props;

    const[isOpenCertificat ,setIsOpenCertificat] = useState(false);
    const[isOpenFeuilEmarg ,setisOpenFeuilEmarg] = useState(false);
    const [nomFormation,setnomFormation]=useState("")
    const [typeFormation,settypeFormation]=useState("")

    const[isOpenFeuilleEvaluation ,setIsOpenFeuilleEvaluation] = useState(false);
    const user = JSON.parse(localStorage.getItem("user"));
    const [showPdf, setshowPdf] = useState("false")

    const [emailFormateur, setemailFormateur] = useState("");

    const [numSession,setnumSession]=useState("")
const [TypeFormation,setTypeFormation]=useState("")
    const [persos, setPersos] = useState([]);
const[nomDossie,setnomDossie]=useState()
    const [bob,setbob]=useState()
    const toggleCertificat = () => setIsOpenCertificat (!isOpenCertificat);
    const toggleFeruilEmarg= () => setisOpenFeuilEmarg (!isOpenFeuilEmarg);
    const[NomDossie,setNomDossie]= useState("");

    const toggleFeuilleEvaluation = () => setIsOpenFeuilleEvaluation (!isOpenFeuilleEvaluation);
    var username=user.titre+" "+user.nom+" "+user.prenom

    useEffect(() => { 
       
      const fetchData = async () => {
        try{  
        const res = await axios.get(`${BASE_URL}/offre/${id}`);
        setPersos(res.data.listStagaire) 
        setTypeFormation(res.data.TypeFormation)
        setnomFormation(res.data.designiationFormation)
        settypeFormation(res.data.typeFormation)

          const res1 = await axios.get(`${BASE_URL}/session/${id}`);
          setnumSession(res1.data.numSession) 
          setnomDossie(res1.data.nomDossie)
          setNomDossie(res1.data.nomDossie)

      }catch(err){
        console.log(err);
      }
    }
    fetchData();
  
    }, []);
    useEffect(()=>{
      const fetchData = async () => { 
      const res = await axios.get(`${BASE_URL}/session/getDonneConvocation/`+id+'/'+username);
   setemailFormateur(res.data.emailFormateur)
   const res2 = await axios.get(`${BASE_URL}/session/vider/dossie`);

      }
      fetchData();

      
    },[])

const VoirCertificat=async(titre,nom,prenom)=>{
  var nomStagaire=titre+" "+nom+" "+prenom
      await axios.get(`${BASE_URL}/session/getDonneDocument/${id}/${nomStagaire}`)
      .then((res)=>{   
        axios.post(BASE_URL+"/session/createPdf/CertificatRealisation", res.data  )
     
       .then(()=>{   
     
      axios.get(`${BASE_URL}/session/showPdf/CertificatRealisation`,{responseType:'blob'}).then((res2)=>{


        const pdfBlob = new Blob([res2.data],{type:'application/pdf'}) 
        console.log("2"+pdfBlob)
      setbob(URL.createObjectURL(pdfBlob))
   })})})
   const config = {  
    headers: { 
      "Content-type": "application/json",
    },
  }; 
  const res = await axios.post(BASE_URL+"/session/copeFilePdf", {
    filePath:"./documents/CertificatRealisation.pdf",
    filecopy:"./test",
    nomfile:"/certificat_"+nomStagaire+".pdf"
}  ) 
} 
const VoirFeruilEmargSimple=async(titre,nom,prenom)=>{
  var nomStagaire=titre+" "+nom+" "+prenom 
  const config2 = {
    headers: {  
      "Content-type": "application/json",
    },
  };
      await axios.post(`${BASE_URL}/session/getDonneFeuilEmagement/${id}/${TypeFormation}`,
      {nomStagaire:nomStagaire},
        
      config2)
      .then((res)=>{   
        axios.post(BASE_URL+"/session/createPdf/FeuilleEmargement", res.data  )
     
       .then(()=>{   
     
      axios.get(`${BASE_URL}/session/showPdf/FeuilleEmargement`,{responseType:'blob'}).then((res2)=>{


        const pdfBlob = new Blob([res2.data],{type:'application/pdf'}) 
      setbob(URL.createObjectURL(pdfBlob))
   })})})
   const config = {  
    headers: { 
      "Content-type": "application/json",
    },
  }; 
  const res = await axios.post(BASE_URL+"/session/copeFilePdf", {
    filePath:"./documents/FeuillEmargment.pdf",
    filecopy:"./test",
    nomfile:"/Feuille Emargement_"+nomStagaire+".pdf"
}  ) 
}  
const VoirFeuilleEmagement=async()=>{

      await axios.post(`${BASE_URL}/session/getDonneFeuilEmagement/${id}/n`)
      .then((res)=>{    
        axios.post(BASE_URL+"/session/createPdf/FeuillEmargment", res.data  )
     
       .then(()=>{    

      axios.get(`${BASE_URL}/session/showPdf/FeuilleEmargement`,{responseType:'blob'}).then((res2)=>{

        const pdfBlob = new Blob([res2.data],{type:'application/pdf'}) 
      setbob(URL.createObjectURL(pdfBlob))
   })})})
   
}


const VoirFeuilleEvaluation=async(titre,nom,prenom)=>{
  var nomStagaire=titre+" "+nom+" "+prenom
 
      await axios.get(`${BASE_URL}/session/getDonneDocument/${id}/${nomStagaire}`)
      .then((res)=>{   
        axios.post(BASE_URL+'/session/createPdf/FeuilleEvaluation', res.data  )
     
       .then(()=>{   
     
      axios.get(`${BASE_URL}/session/showPdf/FeuilleEvaluation`,{responseType:'blob'}).then((res2)=>{


        const pdfBlob = new Blob([res2.data],{type:'application/pdf'}) 
      setbob(URL.createObjectURL(pdfBlob))
      
   })})}) 
   const res = await axios.post(BASE_URL+"/session/copeFilePdf", {
    filePath:"./documents/FeuilleEvaluation.pdf",
    filecopy:"./test",
    nomfile:"/evaluation_"+nomStagaire+".pdf"
}  )
}
const SendEmail = async (e) => { 
  e.preventDefault() 
  setshowPdf("true") 



  

}
const EnregistreFile=async()=>{
if(TypeFormation=="En distanciel"){
  try{
    const config_1 = {  
      headers: { 
        "Content-type": "application/json",
      },
    }; 
 
  
  const res1=  await axios.post(BASE_URL+"/newfolder/4_Documents de formation",{
        pathDossier:user.shemaDossie,
        addpath:nomDossie
     
      },config_1)
      for(var i=0;i<persos.length;i++){
        let data = JSON.stringify({ 
          "CertificatFile": "./test/certificat_"+persos[i].titre+" "+persos[i].nom+ " "+persos[i].prenom+".pdf",
          "FeuilEvaluation": "./test/evaluation_"+persos[i].titre+" "+persos[i].nom+ " "+persos[i].prenom+".pdf",
          "FeuilEmargement": "./test/Feuille Emargement_"+persos[i].titre+" "+persos[i].nom+ " "+persos[i].prenom+".pdf",
          "fileZip": user.shemaDossie+"/"+NomDossie+"/4_Documents de formation/"+persos[i].titre+" "+persos[i].nom+ " "+persos[i].prenom+".zip"
        });
        
        let config = {
          method: 'post',
          maxBodyLength: Infinity,
          url: `${BASE_URL}/session/mettreDansZip/${TypeFormation}`,
          headers: { 
            'Content-Type': 'application/json'
          },
          data : data
        };
        
        axios.request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
              
    }

    toast.success('Documents bien Enregistre !')

}catch(err){
  console.log(err);
  toast.error(err)

}

}else{

  try{
    const config_1 = {  
      headers: { 
        "Content-type": "application/json",
      },
    }; 
 
  
  const res1=  await axios.post(BASE_URL+"/newfolder/4_Documents de formation",{
        pathDossier:user.shemaDossie,
        addpath:nomDossie
     
      },config_1)
      for(var i=0;i<persos.length;i++){
        console.log(i)
      let data = JSON.stringify({
        "CertificatFile": "./test/certificat_"+persos[i].titre+" "+persos[i].nom+ " "+persos[i].prenom+".pdf",
        "FeuilEvaluation": "./test/evaluation_"+persos[i].titre+" "+persos[i].nom+ " "+persos[i].prenom+".pdf",
        "fileZip": user.shemaDossie +"/"+nomDossie+"/4_Documents de formation/"+persos[i].titre+" "+persos[i].nom+ " "+persos[i].prenom+".zip"
      });
      
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url:  `${BASE_URL}/session/mettreDansZip/11`,
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
      axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
        
      });
      
    }

    const res = await axios.post(BASE_URL+"/session/copeFilePdf", {
      filePath:"./documents/FeuillEmargment.pdf",
      filecopy:user.shemaDossie+"/"+nomDossie+"/4_Documents de formation",
      nomfile:"/Feuille Emargement "+nomDossie+".pdf"
  }  ,
  
  config_1
); 
toast.success('Documents bien Enregistre !')

}catch(err){
  console.log(err);
  toast.error(err)
}
}


    


}


 return( 
    <div style={{display:"flex"}}>
    
       <div style={{flex:"80%",paddingLeft:"130px"}}>
   <iframe src={bob} height="800" width="1350" title="Iframe Example" ></iframe>


</div>  
 
<div  className='menuPdf' style={{flex:"20%"}}>
          <ul>
          <Link onClick={toggleCertificat}  >     <li>Certificat de réalisation  {isOpenCertificat ?<ExpandMore  style={{fontSize:"30px"}}/>:<ChevronLeft style={{fontSize:"30px"}}/>} </li> </Link>
          {isOpenCertificat ?  
          <div className='souList'> 
          <ul className='souList'>
          {persos.map((p) => (
           <li > <a onClick={()=>VoirCertificat(p.titre,p.nom,p.prenom)}> {p.nom} {p.prenom}</a></li>  
            ))}
          </ul></div>:null}
          {TypeFormation=="En distanciel" ? <>
          <Link  onClick={toggleFeruilEmarg} >      <li> Feuille d'émargement {isOpenFeuilEmarg ?<ExpandMore  style={{fontSize:"30px"}}/>:<ChevronLeft style={{fontSize:"30px"}}/>}  </li></Link> 
          {isOpenFeuilEmarg ?  
          <div className='souList'> 
          <ul className='souList'>
          {persos.map((p) => (
           <li > <a onClick={()=>VoirFeruilEmargSimple(p.titre,p.nom,p.prenom)}> {p.nom} {p.prenom}</a></li>  
            ))}
          </ul></div>:null}
          </>
          :<Link  onClick={VoirFeuilleEmagement} >      <li> Feuille d'émargement   </li></Link>}
       
          <Link onClick={toggleFeuilleEvaluation}  >       <li> Feuille d'évaluation {isOpenFeuilleEvaluation ?<ExpandMore  style={{fontSize:"30px"}}/>:<ChevronLeft style={{fontSize:"30px"}}/>}  </li></Link>
          {isOpenFeuilleEvaluation ?  <div className='souList'> 
          <ul className='souList'>
          {persos.map((p) => (
              <li><a onClick={()=>VoirFeuilleEvaluation(p.titre,p.nom,p.prenom)}> {p.nom} {p.prenom}</a></li>))}
          </ul></div>:null}
          <Link onClick={EnregistreFile}  >       <li> Enregistrer </li></Link>
          <Link  onClick={SendEmail}  >    <li > Envoyer  </li></Link>

          </ul> 
        </div> 
        { showPdf=="true"?<PopUp type="sendDocument" email={emailFormateur} nomFormation={nomFormation} typeFormation={typeFormation} persos={persos} setshowPdf={setshowPdf} nomDossier={nomDossie} numSession={numSession}/>:null}
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



  }

  export default Document; 