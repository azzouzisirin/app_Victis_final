import React ,{ useEffect,useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import PopUp from '../../components/BoxMessage/PopUp'

import {  ChevronLeft,ExpandMore } from '@material-ui/icons'

   
  function Document(props){
    const { id} = props;

    const[isOpenCertificat ,setIsOpenCertificat] = useState(false);
    const[isOpenFeuilleEvaluation ,setIsOpenFeuilleEvaluation] = useState(false);
    const user = JSON.parse(localStorage.getItem("user"));
    const [nomDossier,setnomDossier]=useState("")
    const [showPdf, setshowPdf] = useState("false")

    const [emailFormateur, setemailFormateur] = useState("");

    const [numSession,setnumSession]=useState("")

    const [persos, setPersos] = useState([]);
    const [DateDebut, setDateDebut] = useState();

    const [bob,setbob]=useState()
    const toggleCertificat = () => setIsOpenCertificat (!isOpenCertificat);
    const toggleFeuilleEvaluation = () => setIsOpenFeuilleEvaluation (!isOpenFeuilleEvaluation);
    var username=user.titre+" "+user.nom+" "+user.prenom

    useEffect(() => { 
       
      const fetchData = async () => {
        try{  
        const res = await axios.get(`/offre/${id}`);
        setPersos(res.data.listStagaire) 
          setDateDebut(res.data.DateDebut)
          const res1 = await axios.get(`/session/${id}`);
          setnumSession(res.data.numSession)
      }catch(err){
        console.log(err);
      }
    }
    fetchData();
  
    }, []);
    useEffect(()=>{
      const fetchData = async () => { 
      const res = await axios.get(`/session/getDonneConvocation/`+id+'/'+username);
   setemailFormateur(res.data.emailFormateur)
      setnomDossier(res.data.numDevis+"_"+res.data.RaisonSociale+"_"+res.data.designiationFormation+"_"+res.data.Module+"_"+res.data.typeFormation)
      }
      fetchData();

      
    },[])

const VoirCertificat=async(titre,nom,prenom)=>{
  var nomStagaire=titre+" "+nom+" "+prenom
      await axios.get(`/session/getDonneDocument/${id}/${nomStagaire}`)
      .then((res)=>{   
        axios.post('/session/createPdf/CertificatRealisation', res.data  )
     
       .then(()=>{   
     
      axios.get(`/session/showPdf/CertificatRealisation`,{responseType:'blob'}).then((res2)=>{


        const pdfBlob = new Blob([res2.data],{type:'application/pdf'}) 
        console.log("2"+pdfBlob)
      setbob(URL.createObjectURL(pdfBlob))
   })})})
   const config = {  
    headers: { 
      "Content-type": "application/json",
    },
  }; 
  const res = await axios.post("/session/copeFilePdf", {
    filePath:"./documents/CertificatRealisation.pdf",
    filecopy:"./test/certificat_"+nomStagaire+".pdf"
}  ) 
} 
const VoirFeuilleEmagement=async()=>{

      await axios.get(`/session/getDonneFeuilEmagement/${id}`)
      .then((res)=>{    
        axios.post('/session/createPdf/FeuilleEmargement', res.data  )
     
       .then(()=>{    

      axios.get(`/session/showPdf/FeuilleEmargement`,{responseType:'blob'}).then((res2)=>{

        const pdfBlob = new Blob([res2.data],{type:'application/pdf'}) 
      setbob(URL.createObjectURL(pdfBlob))
   })})})
   
}

const VoirFeuilleEvaluation=async(titre,nom,prenom)=>{
  var nomStagaire=titre+" "+nom+" "+prenom
 
      await axios.get(`/session/getDonneDocument/${id}/${nomStagaire}`)
      .then((res)=>{   
        axios.post('/session/createPdf/FeuilleEvaluation', res.data  )
     
       .then(()=>{   
     
      axios.get(`/session/showPdf/FeuilleEvaluation`,{responseType:'blob'}).then((res2)=>{


        const pdfBlob = new Blob([res2.data],{type:'application/pdf'}) 
      setbob(URL.createObjectURL(pdfBlob))
      
   })})}) 
   const res = await axios.post("/session/copeFilePdf", {
    filePath:"./documents/FeuilleEvaluation.pdf",
    filecopy:"./test/evaluation_"+nomStagaire+".pdf"
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
 
  
  const res1=  await axios.post('/newfolder/Document',{
        pathDossier:user.shemaDossie,
        addpath:nomDossier
     
      },config)

    for(var i=0 ;i<persos.length;i++){
      var nomStg=persos[i].titre+" "+persos[i].nom+" "+persos[i].prenom
     
    let data = JSON.stringify({
      "CertificatFile": "./test/certificat_"+nomStg+".pdf",
      "FeuilEvaluation": "./test/evaluation_"+nomStg+".pdf",
      "fileZip": user.shemaDossie+"/"+nomDossier+"/Document/"+nomStg+".zip"
    });
    
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: '/session/mettreDansZip/11',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    const res = await axios.post("/session/copeFilePdf", {
      filePath:"./documents/FeuilleEmargement.pdf",
      filecopy:user.shemaDossie+"/"+nomDossier+"/Document/FeuilleEmargement_"+nomDossier+".pdf"
  }  ,
  
  config
); 
    axios.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });}

    const res2=  await axios.get("/session/vider/dossie")
}catch(err){
  console.log(err);
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
          <Link  onClick={VoirFeuilleEmagement} >      <li> Feuille d'émargement   </li></Link>
       
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
        { showPdf=="true"?<PopUp type="sendDocument" email={emailFormateur}  persos={persos} setshowPdf={setshowPdf} nomDossier={nomDossier} numSession={numSession}/>:null}

    </div>
 )



  }

  export default Document; 