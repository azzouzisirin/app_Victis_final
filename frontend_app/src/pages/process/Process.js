import React, { useState, useEffect ,useRef} from 'react'
import './add.css'
import { useReactToPrint } from "react-to-print";
import { Link } from "react-router-dom";
import {saveAs } from 'file-saver'
import Acceuil from '../detailOffre/DetailOffre'
import { useNavigate,useParams} from 'react-router-dom';
import ViewPdfOffre from './ViewPdfOffre'
import ViewPdfConvention from './ViewPdfConvention'
import Sidebar from '../../components/navBar/Sidebar';
import axios from 'axios';
import Convocation from '../Convocation/Convocation';
import Formateur from '../Convocation/Formateur';
import {BASE_URL} from "../../helper"

import Document from '../Convocation/Document';

function Process(){
    const { id  } = useParams();

    const [acceuil,setacceuil]=useState()
    const [Offre,setOffre]=useState("")
 
    const [clickEtat,setclickEtat]=useState("")

    const [idSession,setIdSession]=useState("")
    const [Conventions,setConventions]=useState("")
    const [convocation,setconvocation]=useState("")

    const [Documents,setDocuments]=useState("")
    const [formateur,setformateur]=useState("")
    const [Facturation,setFacturation]=useState("")
    const [numSession,setnumSession]=useState("")
    const [numDevis,setnumDevis]=useState("")
    const [offre, setoffre] = useState({})
    const [Couvocation, setCouvocation] = useState({})
    const [designiationFormation, setdesigniationFormation] = useState()
    const [typeFormation, settypeFormation] = useState()
    const [nomClient, setnomClient] = useState()
    const [titreClient, settitreClient] = useState()
 

    const [email, setemail] = useState()
    const [filename, setfilename] = useState()

    const user = JSON.parse(localStorage.getItem("user"));

  var username=user.titre+" "+user.nom+" "+user.prenom
    localStorage.setItem("id", id)
    
    localStorage.setItem("numSession", numSession)
    localStorage.setItem("numDevis", numDevis)
 
    const history = useNavigate();
    const [dataSession, setDataSession] = useState([]);

 
    useEffect(() => {
        if (!user) history.push("/");
    const fetchData = async () => { 
      const res = await axios.get(`${BASE_URL}/session/`+id);
      setIdSession(res.data.idSession) 
      setnumSession(res.data.numSession)
      setnumDevis(res.data.numDevis)
      settypeFormation(res.data.typeFormation)
      setdesigniationFormation(res.data.designiationFormation)
      setnomClient(res.data.nomClient)
      settitreClient(res.data.titreClient) 
      setemail(res.data.email) 
      setfilename(res.data.filename)
  
    };
    fetchData();
 if(dataSession==1){
    
 }

}, []);



useEffect(() => {

  const fetchData = async () => {
  
      const config = {
        headers: { 
          "Content-type": "application/json",
        },
      };
      const res = await axios.post(BASE_URL+"/offre/createPdf", offre  ,
    
    config
  );}
  fetchData()
  
    },[offre])

useEffect(() => {
  const fetchData = async () => {
    try{ 
    const res = await axios.get(`${BASE_URL}/session/getDonneConvention/${id}`);
    setCouvocation(res.data)

  }catch(err){
    console.log(err);
  }
}

fetchData();

}, []);
useEffect(()=>{
  if(clickEtat==1){
    setacceuil('red')
    setOffre('white')
    setConventions('white')
    setformateur('white')
    setconvocation('white')
    setDocuments('white')
  }
  if(clickEtat==2){
    setacceuil('white')
    setOffre('red')
    setConventions('white')
    setconvocation('white')
    setformateur('white')
    setDocuments('white')
  }
  if(clickEtat==3){
    setacceuil('white')
    setOffre('white')
    setConventions('red')
    setformateur('white')
    setconvocation('white')
    setDocuments('white')
  }
  if(clickEtat==4){
    setacceuil('white')
    setOffre('white')
    setConventions('white')
    setconvocation('red')
    setformateur('white')
    setDocuments('white')
  }
  if(clickEtat==5){
    setacceuil('white')
    setOffre('white')
    setConventions('white')
    setconvocation('white')
    setformateur('white')
    setDocuments('red')
  }
  if(clickEtat==6){
    setacceuil('white')
    setOffre('white')
    setConventions('white')
    setconvocation('white')
    setDocuments('white')
    setformateur('red')

  }
},[clickEtat])

    return(
        <> 
        <Sidebar>
        <div>
       
        <h1> Processus</h1>
         
      
     
        <br/> 
        <div className='GrandContentList'>
       
            <ul>              
            <Link  onClick={()=>setclickEtat(1) } >  <li style={{background:acceuil }} >   <div className="step-inner">Accueil</div></li></Link> 
 
           <Link  onClick={()=>setclickEtat(2) }  >     <li style={{background:Offre }}   ><div className="step-inner" >Offre</div></li> </Link>
           <Link  onClick={()=>setclickEtat(3)}  >      <li style={{background:Conventions }}  >   <div className="step-inner">Convention</div> </li></Link>
           <Link  onClick={()=>setclickEtat(4) }  >     <li style={{background:convocation }} >    <div className="step-inner" >Convocations</div> </li></Link>
           <Link  onClick={()=>setclickEtat(5) }  > <li style={{background:Documents }} >   <div className="step-inner" >Documents </div> </li></Link>
           <Link  onClick={()=>setclickEtat(6) }  >    <li style={{background:formateur }} >  <div className="step-inner" > Formateur  </div></li></Link>
           <Link  onClick={()=>setclickEtat(7) }  >     <li style={{background:Facturation }} >  <div className="step-inner" >Facturation  </div> </li></Link>
              
            </ul>
            
            <div id="line">
                <div id="line-progress"></div>
            </div>
        </div>
    
  
    
    
        </div>
        {clickEtat==1?<Acceuil/>:null}
  {clickEtat==2? <ViewPdfOffre id={id} username={username}/>  :null}

 
  {clickEtat==3?<ViewPdfConvention id={id}/>  :null}

  {clickEtat==4?<Convocation id={id} />:null}
  {clickEtat==5?<Document id={id}/>:null}
  {clickEtat==6?<Formateur id={id}/>:null}

        </Sidebar>
     </> 
    )

}


export default Process