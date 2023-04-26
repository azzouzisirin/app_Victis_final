
import React, { useState, useEffect ,useRef} from 'react'
import { Link } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import PopUp from '../../components/BoxMessage/PopUp'
import {BASE_URL} from "../../helper"

import axios from 'axios';

function ViewPdfOffre(props){
  const { id, username} = props;
  const [bob,setbob]=useState()
  const user = JSON.parse(localStorage.getItem("user"));
const idSession=localStorage.getItem("idSession")
  const [titreClient, settitreClient] = useState()
  const [email, setemail] = useState()
  const [showPdf, setshowPdf] = useState("false")

  const [filename, setfilename] = useState()
  const [DesignationFormation,setDesignationFormation]=useState("")
  const [typeFormation,settypeFormation]=useState("")

  const [TypeEmail, setTypeEmail] = useState("");
const[NomDossie,setNomDossie]= useState("");
  const [nomClient, setnomClient] = useState()

  useEffect(() => {
  
    const fetchData = async () => { 
      const res = await axios.get(`${BASE_URL}/session/`+id);
      settypeFormation(res.data.typeFormation)
      setnomClient(res.data.nomClient)
      settitreClient(res.data.titreClient) 
      setemail(res.data.email) 
      setfilename(res.data.filename)
      setNomDossie(res.data.nomDossie)
      setDesignationFormation(res.data.designiationFormation)
    };
    fetchData();
    
    
    }, []);
  useEffect (()=>{  

    const checkoffre =async()=>{ 
  
    axios.get(BASE_URL+"/session/affichePDFOffre/"+id+"/"+username,{responseType:'blob'}).then((res2)=>{


      const pdfBlob = new Blob([res2.data],{type:'application/pdf'}) 
    setbob(URL.createObjectURL(pdfBlob))
 })
   
    }
    
    checkoffre()
  
  },[]) 


const EnregsteOffre= async (e) => {
  e.preventDefault();
 try{ 


  
    const create = await axios.post(BASE_URL+"/newfolder/1_Offre",{
      pathDossier:user.shemaDossie,
      addpath:NomDossie
      }) 

       const config = {  
        headers: { 
          "Content-type": "application/json",
        },
      }; 

   
      const res = await axios.post(BASE_URL+"/session/copeFilePdf", {
        filePath:"./documents/offre.pdf",
        filecopy:user.shemaDossie+"/"+NomDossie+"/1_Offre",
        nomfile:"/Devis "+NomDossie+".pdf"
    }  ,
    
    config
  )
  if(filename){
    let data = JSON.stringify({
      "url": BASE_URL+"/fileinfo/"+filename,
      "filename": user.shemaDossie+"/"+NomDossie+"/1_Offre/programme de formation.pdf"
    });
    
    let config_1 = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:9000/downloadPdfCour',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios.request(config_1)
    .then((response) => {
      console.log(JSON.stringify(response.data));
  
    })
    .catch((error) => {
      console.log(error);
    });
  }
 

  toast.success('Offre bien Enregistre !')


  }catch(err){
    toast.error(err)

    console.log(err);
  }
}



const SendEmailOffre = async (e) => { 
  e.preventDefault()
  setshowPdf("true") 
  setTypeEmail("sendOffre")

 
 
}
return(
  <div style={{marginLeft:"10%",display:'flex'}}> 

   
  

  
     
  <div style={{flex:'1'}} >
  <iframe src={bob} height="800" width="1200" title="Iframe Example" style={{float:"left"}}></iframe>
  </div> 
  <div  className='menuPdf'>
       <ul> 
       
       <Link  onClick={EnregsteOffre} >    <li > Enregistrer</li></Link>
       <Link  onClick={SendEmailOffre} >    <li > Envoyer </li></Link>
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
  { showPdf=="true"?<PopUp type={TypeEmail} email={email}  nomClient={nomClient} nomDossier={NomDossie} TitreClient={titreClient} nomFormation={DesignationFormation} typeFormation={typeFormation} setshowPdf={setshowPdf} filename={filename}/>:null}

  </div>

   
   
)


}
export default ViewPdfOffre