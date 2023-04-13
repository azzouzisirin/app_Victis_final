import React, {  useEffect, useState } from "react";
import "./popup.css";
import {BASE_URL} from "../../helper"
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
  
  function PopUp(props){
    const { type,email,numSession,nomFormation,nomDossier,typeFormation,TitreClient,nomClient,setshowPdf,filename,persos} = props; 
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
if(type=="sendOffreAddConvention"){
  setobject("Offre et Convention de formation "+nomFormation+" - "+typeFormation)
  settext0("Bonjour "+TitreClient+" "+ nomClient+", ")
  settext1("Veuillez trouver ci-joint une offre, la convention ainsi que le programme de formation "+nomFormation+" - "+typeFormation)
  settext2("Si cette offre vous convient, et dès réception de votre confirmation, je vous enverrai la convention. Dans le cas échéant, je vous laisserez revenir vers moi afin de reprendre le dossier.")
  settext3("Je me tiens à votre entière disposition pour tout complément d'information.")

}
if(type=="sendDocument"){
setobject('Session "Numéro de session" - Documents pédagogiques')
settext1('Veuillez trouver ci-joint les documents pédagogiques de la session de formation "Numéro de session + intitulé de la formation".')
settext2("Veuillez au respect de la signature de la feuille d'émargement par demi journée et la signature du certificat de réalisation ainsi que la feuille d'évaluation en fin de formation.")


}
},[type])
const SendEmail = async (e) => { 
    e.preventDefault()
    toast.success('email envoye !')

  if(type=="sendConvention"){
      const res = await axios.post(`${BASE_URL}/session/send/pdf/Convention`,{
      
        subject:object,
        EmailUser:user.email,
        PassEmail:user.PassEmail,
        linun:text0,
        lindeux:text1 ,
        lintrois: text2,
        linquatre: text3,
          email:email,
          filename:"Convention de formation "+nomFormation+" - "+typeFormation
          
         
      }) .then(response=>{
   
        console.log(response);
      })
      setshowPdf("false")
  }
  if(type=="sendOffreAddConvention"){

    const res = await axios.post(`${BASE_URL}/session/send/pdf/OffreplusConvention`,{
      
      subject:object,
      EmailUser:user.email,
      PassEmail:user.PassEmail,
        linun:text0,
        lindeux:text1 ,
        lintrois: text2,
        linquatre: text3,
          email:email,
          filenameConvention:"Convention de formation "+nomFormation+" - "+typeFormation,
          filenameOffre:"Offre de formation "+nomFormation+" - "+typeFormation,
    }) .then(response=>{

      console.log(response);
    })
    setshowPdf("false")

  }
  if(type=="sendOffre"){ 
    const res = await axios.post(`${BASE_URL}/session/send/pdf/offre`,{
    
    
      subject:object,
      EmailUser:user.email,
      PassEmail:user.PassEmail,
        linun:text0,
        lindeux:text1 ,
        lintrois: text2,
        linquatre: text3,
          email:email,
          filenameProgramme:"Programme_"+nomFormation+"_"+  typeFormation,
          filenameOffre:"Devis "+nomFormation+" - "+typeFormation+".pdf",
        filename:filename
        
       
    }) .then(response=>{
 
      console.log(response);
    })
    setshowPdf("false")

  
  }
  if(type=="sendFormateur"){
    const res = await axios.post(`${BASE_URL}/session/send/pdf/sendFormateur`,{
    
    
      subject:object,
      EmailUser:user.email,
      PassEmail:user.PassEmail,
        linun:text0,
        lindeux:text1 ,
        lintrois: text2,
        linquatre: text3,
          email:email,
          filenameConvention:"Rapport_"+nomFormation+"_"+  typeFormation,
          filenameOffre:"Contrat "+nomFormation+" - "+typeFormation+".pdf"
   
        
       
    }) .then(response=>{

      console.log(response);
    })
    setshowPdf("false")

  
  }
  if(type=="sendDocument"){
    toast.success('email envoye !')

 
  
    const res = await axios.post(`${BASE_URL}/session/send/pdf/sendDocument`,{
    
      subject:"object",
  
      linun:text1,
      lindeux:text2 ,
      numSession: numSession,
      listStagaire:persos,

       pathDossie: user.shemaDossie+"/"+nomDossier+"/Document",
       EmailUser:user.email,
      PassEmail:user.PassEmail,
    email:email 
        
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
