import React, {  useEffect, useState } from "react";
import "./popup.css";
import {BASE_URL} from "../../helper"
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
  
  function PopUp(props){
    const { type,email,DateDebut,LieuFormation,DateFin,idOpco,numSession,nomFormation,nomDossier,typeFormation,TitreClient,nomClient,setshowPdf,filename,persos} = props; 
  const [show, setShow] = useState("true");
  const [object, setobject] = useState("");
  const [text0, settext0] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));

  const [text1, settext1] = useState("");
  const [text2, settext2] = useState("");
  const [text3, settext3] = useState("");


useEffect(()=>{ 
if(type=="sendOffre"){

  setobject("Offre de formation FreeCAD - Initiation")
  settext0("Bonjour "+TitreClient+" "+ nomClient+", ")
  settext1("Veuillez trouver ci-joint une offre de formation "+nomFormation+" - "+typeFormation+" ainsi que le programme correspondant. ")
  settext2("Si cette offre vous convient, et dès réception de votre confirmation, je vous enverrai la convention. Dans le cas échéant, je vous laisserez revenir vers moi afin de reprendre le dossier.")
  settext3("Je me tiens à votre entière disposition pour tout complément d'information.")

}
if(type=="sendConvention"){
  setobject("Convention de formation "+nomFormation+" - "+typeFormation)
  settext0("Bonjour "+TitreClient+" "+ nomClient+", ")
  settext1("Veuillez trouver ci-joint la convention de formation "+nomFormation+" - "+typeFormation)
  settext2("Dès réception de votre retour, je vous enverrai la convocation ainsi que le reste des documents pédagogiques.")
  settext3("")

}
if(type=="sendAttestation"){
  setobject("les attestations de formation "+nomFormation)
  settext0("Bonjour "+ nomClient+", ")
  settext1("Veuillez trouver ci-joint la/les attestation(s) de formation session "+numSession+" Désignation de la formation "+nomFormation+" qui s’est déroulée du "+DateDebut+" au "+DateFin+" au "+LieuFormation+".")


}
if(type=="sendOffreAddConvention"){
  setobject("Offre et Convention de formation "+nomFormation+" - "+typeFormation)
  settext0("Bonjour "+TitreClient+" "+ nomClient+", ")
  settext1("Veuillez trouver ci-joint une offre, la convention ainsi que le programme de formation "+nomFormation+" - "+typeFormation)
  settext2("Si cette offre vous convient, et dès réception de votre confirmation, je vous enverrai la convention. Dans le cas échéant, je vous laisserez revenir vers moi afin de reprendre le dossier.")
  settext3("Je me tiens à votre entière disposition pour tout complément d'information.")

}
if(type=="sendFacturation"){
  setobject("Formation "+nomFormation+" Facture")
  settext0("Bonjour "+ nomClient+", ")
  settext1("A l'issue de la formation "+nomFormation+" , Je me permets de vous envoyer la facture ainsi qu'un questionnaire de satisfaction à froid.")
  settext2("Espérant que notre prestation a retenu votre satisfaction et restant à votre écoute pour tout projet de formation.")

}
if(type=="sendDocument"){
setobject("Session "+numSession+" - Documents pédagogiques")
settext1("Veuillez trouver ci-joint les documents pédagogiques de la session de formation "+numSession +" " +nomFormation+" - "+typeFormation+".")
settext2("Veuillez au respect de la signature de la feuille d'émargement par demi journée et la signature du certificat de réalisation ainsi que la feuille d'évaluation en fin de formation.")


}
if(type=="sendFormateur"){
  setobject("Session "+numSession+" - contrat de formation")
  settext1("Veuillez trouver ci-joint votre contrat de formation pour la session "+nomFormation+" qui se déroulera du "+DateDebut+" au "+DateFin+" au "+LieuFormation+".")
  settext2("Dès votre retour, je vous enverrai les documents pédagogiques.")
  
  
  }
},[type])
const SendEmail = async (e) => { 
    e.preventDefault()
    toast.success('email envoye !')

  if(type=="sendConvention"){
    setshowPdf("false")
      const res = await axios.post(`${BASE_URL}/session/send/pdf/Convention`,{
      
        subject:object,
        EmailUser:user.email,
        PassEmail:user.PassEmail,
         email:email, 
          host:user.host,
        linun:text0,
       
        lindeux:text1 ,
        lintrois: text2,
        linquatre: text3,
         
          filename:"Convention de formation "+nomFormation+" - "+typeFormation
          
         
      }) .then(response=>{
   
        console.log(response);
      })
     
  }
  if(type=="sendFacturation"){
    setshowPdf("false")
    const res = await axios.post(`${BASE_URL}/session/send/pdf/Facturation`,{
    
      subject:object,
      EmailUser:user.email,
      PassEmail:user.PassEmail,
       email:email, 
        host:user.host,
      linun:text0,
      idOpco:idOpco,
      lindeux:text1 ,
      lintrois: text2,
       
        
       
    }) .then(response=>{
 
      console.log(response);
    })
}
  if(type=="sendOffreAddConvention"){
    setshowPdf("false")
    const res = await axios.post(`${BASE_URL}/session/send/pdf/OffreplusConvention`,{
      
      subject:object,
    EmailUser:user.email,
        PassEmail:user.PassEmail,
        email:email, 
          host:user.host,
        linun:text0,
        lindeux:text1 ,
        lintrois: text2,
        linquatre: text3,
          filenameConvention:"Convention de formation "+nomFormation+" - "+typeFormation,
          filenameOffre:"Offre de formation "+nomFormation+" - "+typeFormation,
    }) .then(response=>{

      console.log(response);
    })

  }
  if(type=="sendOffre"){ 
    setshowPdf("false")

    const res = await axios.post(`${BASE_URL}/session/send/pdf/offre`,{
    
    
      subject:object,
      EmailUser:user.email,
      PassEmail:user.PassEmail,
      emailSend:email, 
          host:user.host,
        linun:text0,
        lindeux:text1 ,
        lintrois: text2,
        linquatre: text3,
        shemaDossie:user.shemaDossie+"/"+nomDossier ,
          filenameProgramme:"Programme_"+nomFormation+"_"+  typeFormation,
          filenameOffre:"Devis "+nomFormation+" - "+typeFormation+".pdf",
        filename:filename
        
       
    }) .then(response=>{
 
      console.log(response);
    })

  
  }
  if(type=="sendFormateur"){
    setshowPdf("false")
    const res = await axios.post(`${BASE_URL}/session/send/pdf/sendFormateur`,{
    
    
      subject:object,
      EmailUser:user.email,
      PassEmail:user.PassEmail,
      email:email, 
          host:user.host,
        linun:text0,
        lindeux:text1 ,
        lintrois: text2,
        linquatre: text3,
          filenameConvention:"Rapport_"+nomFormation+"_"+  typeFormation,
          filenameOffre:"Contrat "+nomFormation+" - "+typeFormation+".pdf"
   
        
       
    }) .then(response=>{

      console.log(response);
    })

  
  }
  if(type=="sendDocument"){
    toast.success('email envoye !')
    setshowPdf("false")
 
  
    const res = await axios.post(`${BASE_URL}/session/send/pdf/sendDocument`,{
    
      subject:object,
  
      linun:text1,
      lindeux:text2 ,
      numSession: numSession,
      listStagaire:persos,
      email:email, 
          host:user.host,
       pathDossie: user.shemaDossie+"/"+nomDossier+"/4_Documents de formation",
       EmailUser:user.email,
      PassEmail:user.PassEmail
        
    })


  }
  if(type=="sendAttestation"){
    toast.success('email envoye !')
    setshowPdf("false")
 
  
    const res = await axios.post(`${BASE_URL}/session/send/pdf/sendAttestation`,{
    
      subject:object,
  
      linun:text1,
      numSession: numSession,
      listStagaire:persos,
      email:email, 
          host:user.host,
       pathDossie: user.shemaDossie+"/"+nomDossier+"/4_Documents de formation",
       EmailUser:user.email,
      PassEmail:user.PassEmail
        
    })


  }
}


  return (
    <div className="popup-box">
    <div className="popup-header">
      <span>
      Nouveau message :
      </span>
      <div className="popup-btn">
        <i
          className="fas fa-times" onClick={() => setshowPdf("false")}
      
        ></i>
        <i className="fas fa-minus" onClick={() => setShow(!show)}></i>
      </div>
    </div>
    {show ? ( 
      <div className="popup-content">
        <form   onSubmit={e => SendEmail(e)}>
          <input
            type="email"
            placeholder="Destinataires"
            value={email}
            required
        
          /> 
          <input
            type="text"
            placeholder="Objet"
            value={object}
            onChange={e => {setobject(e.target.value)} }
            required
    
          /> 
     <textarea style={{border:"none",fontSize:'20px'}}cols={48} rows={2} value={text0} onChange={e => {settext0(e.target.value)}}> </textarea>
     <textarea style={{border:"none",fontSize:'20px'}}cols={48} rows={5} value={text1} onChange={e => {settext1(e.target.value)}}> </textarea>
     <textarea style={{border:"none",fontSize:'20px'}}cols={48} rows={5}value={text2} onChange={e => {settext2(e.target.value)}}> </textarea>
     <textarea style={{border:"none",fontSize:'20px'}}cols={48} rows={5}value={text3} onChange={e => {settext3(e.target.value)}}> </textarea>

          <div className="popup-send-btn">
            <button type="submit">Envoyer</button>
          </div>
        </form>
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
    ) : (
      ""
    )}
  </div>
  );
};

export default PopUp;
