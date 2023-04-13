
import React, { useState, useEffect ,useRef} from 'react'
import { Link } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import {BASE_URL} from "../../helper"

import PopUp from '../../components/BoxMessage/PopUp'
function ViewPdfConvention(props){
  const { id} = props;
  const [bob,setbob]=useState()
  const [TypeEmail, setTypeEmail] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));

  const [titreClient, settitreClient] = useState()
  const [email, setemail] = useState()
  const [subject,setsubject]=useState("")
  const [showPdf, setshowPdf] = useState("false")
 
  const [filename, setfilename] = useState()
  const [DesignationFormation,setDesignationFormation]=useState("")
  const [RaisonSociale,setRaisonSociale]=useState("")
  const [typeFormation,settypeFormation]=useState("")
  const [selectedTypeFormation,setselectedTypeFormation]=useState("")
  const [numSession,setnumSession]=useState("")
  const [numDevis,setnumDevis]=useState("")
  const [linun,setlinun]=useState("")
  const [lindeux,setlindeux]=useState("")
  const [lintrois,setlintrois]=useState("")
  const [nomDossie,setnomDossie]=useState("")

  const [nomClient, setnomClient] = useState()
  useEffect(() => {
  
const fetchData = async () => { 
  const res = await axios.get(`${BASE_URL}/session/`+id);
  setnumSession(res.data.numSession)
  setnomDossie(res.data.nomDossie)
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
      await axios.get(`${BASE_URL}/session/getDonneConvention/${id}`)
      .then((res)=>{ 
        axios.post(BASE_URL+"/session/createPdf/Convention", res.data  )
     
       .then(()=>{   
     
      axios.get(`${BASE_URL}/session/showPdf/Convention`,{responseType:'blob'}).then((res2)=>{


        const pdfBlob = new Blob([res2.data],{type:'application/pdf'}) 
      setbob(URL.createObjectURL(pdfBlob))
   })})})}
    
    checkoffre()
  
  },[])


const EnregsteOffre= async (e) => {
  e.preventDefault();
 try{ 


  
    const create = await axios.post(BASE_URL+"/newfolder/2_Convention",{
      pathDossier:user.shemaDossie,
      addpath:nomDossie
      }) 

       const config = {  
        headers: { 
          "Content-type": "application/json",
        },
      }; 


      const res = await axios.post(BASE_URL+"/session/copeFilePdf", {
        filePath:"./documents/Convention.pdf", 
        filecopy:user.shemaDossie+"/"+nomDossie+"/2_Convention/Convention de formation professionnelle_"+numDevis+".pdf"
    }  ,
    
    config
  ); 
  toast.success('Convention bien Enregistre !')

 

  }catch(err){ 
    toast.error(err)

    console.log(err);
  }
}
useEffect(() => {
  setsubject("Convention de formation "+DesignationFormation+" - "+typeFormation)
setlinun("Bonjour "+DesignationFormation+" - "+typeFormation+",")
setlindeux("Veuillez trouver ci-joint la convention de formation CATIA-initiation")
setlintrois("Dès réception de votre retour, je vous enverrai la convocation ainsi que le reste des documents pédagogiques.")
  }, []);


const SendEmailConvention = async (e) => {
  e.preventDefault()
  setshowPdf("true") 
  setTypeEmail("sendConvention")
  const config = {  
    headers: { 
      "Content-type": "application/json",
    },
  }; 


  const res = await axios.put(BASE_URL+"/session/"+id, {
    etatSession:"en-cours",
}  ,

config
); 
  
 
}
const SendEmailDevisConvention = async (e) => { 
  e.preventDefault()
  setshowPdf("true")

  setTypeEmail("sendOffreAddConvention")
  const config = {  
    headers: { 
      "Content-type": "application/json",
    },
  };  


  const res = await axios.put(BASE_URL+"/session/"+id, {
    etatSession:"en-cours",
}  ,

config
); 
 
}
 
return(
  <div style={{marginLeft:"10%",display:'flex'}}> 

   
  

  
     
  <div style={{flex:'1'}} >
  <iframe src={bob} height="800" width="1200" title="Iframe Example" style={{float:"left"}}></iframe>
  </div> 
  <div  className='menuPdf'>
       <ul> 
       
       <Link  onClick={EnregsteOffre} >    <li > Enregistrer</li></Link>
       <Link  onClick={SendEmailConvention} >    <li > Envoyer Convention </li></Link>
       <Link  onClick={SendEmailDevisConvention} >    <li > Envoyer Devis et Convention </li></Link>

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

{ showPdf=="true"?<PopUp type={TypeEmail} email={email}  nomClient={nomClient} TitreClient={titreClient} nomFormation={DesignationFormation} typeFormation={typeFormation} setshowPdf={setshowPdf}/>:null}
  </div>

   
   
)


}
export default ViewPdfConvention