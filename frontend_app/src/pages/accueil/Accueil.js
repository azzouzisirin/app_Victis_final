
import React, { useState, useEffect } from 'react'
import { Delete , Update,Warning} from '@material-ui/icons'
import { Link } from "react-router-dom";
import { useNavigate} from 'react-router-dom';

import Sidebar from '../../components/navBar/Sidebar';
import axios from 'axios';

 
const Accueil = () => { 
  const navigate = useNavigate(); 

  const [openPopup, setOpenPopup] = useState(false)

const [query, setQuery] = useState(""); 
const [dataSession, setDataSession] = useState([]);
const [dataoffress, setDataoffress] = useState([]);

const [numSession,setnumSession]=useState("")
const [NumDevis,setNumDevis]=useState("")


 const history = useNavigate();
 const user = JSON.parse(localStorage.getItem("user"));
 
  let newDate = new Date()
let month = newDate.getMonth()+1;
let year = newDate.getFullYear();


  useEffect(() => {

    var c=dataoffress.length +1
    var numdossie= year.toString().substring(2,4)+month.toString().padStart(2, '0')+c.toString().padStart(3, '0')
    var numsession= "SF"+year.toString().substring(2,4)+"-"+month.toString().padStart(2, '0')+c.toString().padStart(3, '0')
    setNumDevis(numdossie)
    setnumSession(numsession)
      }, [dataoffress]);

useEffect(() => {
      if (!user) history.push("/");
 
  const fetchData = async () => {

    const res3 = await axios.get(`/session/search?q=${query}`);
    setDataoffress(res3.data); 
  };
  if (query.length === 0 || query.length > 0) fetchData();
}, [query,openPopup]);
 

const deleteItem = async (id) => {
  try{ 
    const res = await axios.delete(`/session/${id}`)
 setQuery('')
  }catch(err){
    console.log(err); 
  }
}
const addSession= async () => {
  localStorage.setItem("nouveau", "true")
   try{
    const config = {
      headers: { 
        "Content-type": "application/json",
      },
    }; 
    const res = await axios.post('/session/register', {
      numSession: numSession,
      numDevis:NumDevis,
  
  }  ,
  
  config

);
  navigate("/process/"+res.data.id)

  }catch(err){
    console.log(err);
  }

  
  }



  function handleClick(id) {
    localStorage.setItem("nouveau", "false")

  navigate("/process/"+id)
  }
  useEffect(()=>{

  },[user])


    return (
     <> 
      <Sidebar>
     <h1> Session</h1>

 <button onClick={addSession} className="Newbuton">Nouvelle Session</button>   

   <input type="text" placeholder="recherche ..." className='buttonSearch'
         onChange={(e) => setQuery(e.target.value.toLowerCase())}/>
     <div className='tabledecore'> 

   <table>
   <thead>
    <tr >  
    <th style={{width:"230px"}}> Session </th>

      <th style={{width:"300px"}}>Formation  </th>

      <th style={{width:"270px"}}> Client </th>
      <th style={{width:"270px"}}>Formateur  </th>
      <th style={{width:"150px"}}>Téléphone  </th>
      <th style={{width:"150px"}}>Durée (en jours)</th>
      <th style={{width:"150px"}}> Date de début</th>
      <th style={{width:"150px"}}> Date de fin</th>
      <th style={{width:"150px"}}> Remarque</th>

      <th style={{width:"340px"}}>Etat  </th>
     <th style={{width:"100PX"}}> Action</th>
    </tr> 
    </thead>
        <tbody>
    {dataoffress.map((item) => (
               
              
               <tr > 
            
                 <td key={item.id} onClick={() =>handleClick(item.id)} > {item.session}</td> 
               <td key={item.id} onClick={() =>handleClick(item.id)}>{item.nomFormation}</td>
               <td key={item.id} onClick={() =>handleClick(item.id)}>{item.nomClient}</td>
               <td key={item.id} onClick={() =>handleClick(item.id)}>{item.nomFormateur}</td>
               <td key={item.id} onClick={() =>handleClick(item.id)}>{item.tel}</td>
               <td key={item.id} onClick={() =>handleClick(item.id)}>{item.DureeJour}</td>
               <td key={item.id} onClick={() =>handleClick(item.id)}>{item.dateDebut}</td>
               <td key={item.id} onClick={() =>handleClick(item.id)}>{item.dateFin}</td>
               <td key={item.id} onClick={() =>handleClick(item.id)}>{item.remarque}</td>
               <td key={item.id} onClick={() =>handleClick(item.id)}>
                {item.DifferenceDate==1? <Warning style={{fontSize:"40px",color:"red",marginRight:"10px"}}/> :null}
               {item.etatSession} 

                
                </td>

                 <td key={item.id} onClick={() =>deleteItem(item.id)}>
     
                    <Delete />
    
    
      </td>
      
               </tr>
              
             ))}
    </tbody>
   </table>  
</div>
            </Sidebar>
     </> 
    );
};

export default Accueil;