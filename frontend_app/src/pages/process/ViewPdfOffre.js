
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
  const [RaisonSociale,setRaisonSociale]=useState("")
  const [typeFormation,settypeFormation]=useState("")
  const [selectedTypeFormation,setselectedTypeFormation]=useState("")
  const [subject,setsubject]=useState("")
  const [numDevis,setnumDevis]=useState("")
  const [linun,setlinun]=useState("")
  const [lindeux,setlindeux]=useState("")
  const [lintrois,setlintrois]=useState("")
  const [linquatre,setlinquatre]=useState("")
  const [TypeEmail, setTypeEmail] = useState("");
const[NomDossie,setNomDossie]= useState("");
  const [nomClient, setnomClient] = useState()

  useEffect(() => {
  
    const fetchData = async () => { 
      const res = await axios.get(`${BASE_URL}/session/`+id);
      setnumDevis(res.data.numDevis)
      settypeFormation(res.data.typeFormation)
      setnomClient(res.data.nomClient)
      settitreClient(res.data.titreClient) 
      setemail(res.data.email) 
      setfilename(res.data.filename)
      setRaisonSociale(res.data.RaisonSociale)
      setDesignationFormation(res.data.designiationFormation)
      setselectedTypeFormation(res.data.selectedTypeFormation)
    };
    fetchData();
    
    
    }, []);
  useEffect (()=>{  
    const checkoffre =async()=>{ 
      await axios.get(BASE_URL+"/session/getDonneOffre/"+id+"/"+username)
      .then((res)=>{ 
        axios.post(BASE_URL+"/session/createPdf/offre", res.data  )
     
       .then(()=>{   
     
      axios.get(`${BASE_URL}/session/showPdf/offre`,{responseType:'blob'}).then((res2)=>{


        const pdfBlob = new Blob([res2.data],{type:'application/pdf'}) 
      setbob(URL.createObjectURL(pdfBlob))
   })})})}
    
    checkoffre()
  
  },[]) 

  useEffect(() => {
  const fetchData = async () => { 
  const res = await axios.get(`${BASE_URL}/session/`+id);
  
  setNomDossie(res.data.nomDossie)
  
  
  };
  fetchData();
  
  }, [idSession]);
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
        filecopy:user.shemaDossie+"/"+NomDossie+"/1_Offre/Devis "+NomDossie+".pdf"
    }  ,
    
    config
  ); 
  toast.success('Offre bien Enregistre !')

 

  }catch(err){
    toast.error(err)

    console.log(err);
  }
}
useEffect(() => {
  setsubject("Offre de formation "+DesignationFormation+" - "+typeFormation)
setlinun("Bonjour "+titreClient+" "+nomClient+",")
setlindeux("Veuillez trouver ci-joint une offre de formation "+DesignationFormation+" - "+typeFormation+" ainsi que le programme correspondant. ")
setlintrois("Si cette offre vous convient, et dès réception de votre confirmation, je vous enverrai la convention. Dans le cas échéant, je vous laisserez revenir vers moi afin de reprendre le dossier.")
setlinquatre("Je me tiens à votre entière disposition pour tout complément d'information.")
  }, [titreClient,nomClient,DesignationFormation,typeFormation]);


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
  { showPdf=="true"?<PopUp type={TypeEmail} email={email}  nomClient={nomClient} TitreClient={titreClient} nomFormation={DesignationFormation} typeFormation={typeFormation} setshowPdf={setshowPdf} filename={filename}/>:null}

  </div>

   
   
)


}
export default ViewPdfOffre