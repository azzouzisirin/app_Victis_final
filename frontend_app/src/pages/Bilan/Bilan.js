
import React, { useState, useEffect ,useRef} from 'react'
import './bilan.css'

import Sidebar from '../../components/navBar/Sidebar';
function Bilan(){

return(
  
    <Sidebar>
           <h1> Bilan</h1>

<div className='containerbox'>
    <div className='ContainerBilan'>

<div className='tabledecore'> 
<br/>
<table>
  <tr>
    <th colSpan={2}>C. Bilan financier hors taxes : origine des produits de l’organisme</th>
  </tr>
  <tr>
    <td colSpan={2} style={{textAlign:"left",paddingLeft:"15px"}}>Produits provenant :  </td>
  </tr>
  <tr>
    <td style={{width:"80%",textAlign:"left",paddingLeft:"15px"}}>Des entreprises pour la formation de leurs salariés :   </td>
    <td style={{width:"20%"}}>€ </td>
  </tr>
  <tr>
    <td style={{textAlign:"left",paddingLeft:"15px"}}>Des organismes gestionnaires des fonds de la formation professionnelle pour des actions dispensées dans le cadre : du plan de développement des compétences ou d’autres dispositifs : </td>
    <td>€ </td>
  </tr>
  <tr>
    <td style={{textAlign:"left",paddingLeft:"15px"}}> De contrats conclus avec des personnes à titre individuel et à leurs frais :</td>
    <td>€ </td>
  </tr>
  <tr>
    <td style={{textAlign:"left",paddingLeft:"15px"}}>De contrats conclus avec d’autres organismes de formation (y compris CFA) :</td>
    <td>€ </td>
  </tr>
  <tr>
    <td style={{fontWeight:"800"}}> Total des produits réalisés au titre de la formation professionnelle (total des lignes 1 à 11)</td>
    <td>€ </td>
  </tr>
</table>
</div>
    </div>
   
    <div className='ContainerBilan'>

<div className='tabledecore'> 
<br/>
<table>
  <tr>
    <th colSpan={2}>D. Bilan financier hors taxes : charges de l’organisme</th>
  </tr>
  <tr>
    <td colSpan={2} style={{textAlign:"left",paddingLeft:"15px"}}>Total des charges de l’organisme liées à l’activité de formation :  </td>
  </tr>
  <tr>
    <td style={{width:"80%",textAlign:"left",paddingLeft:"15px"}}>dont Salaires des formateurs  </td>
    <td style={{width:"20%"}}>€ </td>
  </tr>
  <tr>
    <td style={{textAlign:"left",paddingLeft:"15px"}}>dont Achats de prestation de formation et honoraires de formation</td>
    <td>€ </td>
  </tr>
 
  
</table>
</div>
    </div>
    <div className='ContainerBilan'>

<div className='tabledecore'> 
<br/>
<table>
  <tr>
    <th style={{width:"60%"}} >E. Personnes dispensant des heures de formation :</th>
    <th style={{width:"20%"}}>Nombre de personnes </th>
    <th style={{width:"20%"}}> Nombre d’heures de formation dispensées</th>
  </tr>
 
  <tr>
    <td style={{textAlign:"left",paddingLeft:"15px"}}>Personnes de votre organisme dispensant des heures de formation</td>
    <td > </td>
    <td > </td>

  </tr>
  <tr>
    <td style={{textAlign:"left",paddingLeft:"15px"}}>Personnes extérieures à votre organisme dispensant des heures de formation dans le cadre de contrats de sous-traitance</td>
    <td > </td>
    <td > </td>

  </tr>
</table>
</div>
    </div>
  
    <div className='ContainerBilan'>

<div className='tabledecore'> 
<br/>
<table>
  <tr>
    <th style={{width:"60%"}}>G. Bilan pédagogique : stagiaires dont la formation a été confiée a votre organisme par un autre organisme de formation</th>
    <th style={{width:"20%"}}> Nombre de stagiaires ou d’apprentis</th>
    <th style={{width:"20%"}}> Nombre total d’heures de formation suivies par les stagiaires et les apprentis</th>
  </tr>
  <tr>
    <td >Formations confiées à votre organisme par un autre organisme de formation :..............................(5)  </td>
  <td> </td>
  <td></td>
  
  </tr>
 
 
</table>
</div>
    </div>
 
    <div className='ContainerBilan' style={{height:"450px",width:"1500px"}}>

<div className='tabledecore'> 
<br/>
<table>
  <tr>
    <th colSpan={3}>F. Bilan pédagogique : stagiaires bénéficiant d’une formation dispensée par l’organisme et apprentis en formation</th>
  </tr>
  <tr>
    <td style={{fontWeight:"700",width:"50%",textAlign:"left",paddingLeft:"15px"}}>F - 1. Type de stagiaires de l’organisme  </td>
    <td style={{fontWeight:"700",width:"25%",textAlign:"left",paddingLeft:"15px"}}>Nombre de stagiaires ou d’apprentis </td>
    <td style={{fontWeight:"700",width:"25%",paddingLeft:"15px"}}>Nombre total d’heures de formation suivies par les stagiaires et les apprentis  </td>

  </tr>
  <tr>
    <td style={{textAlign:"left",paddingLeft:"15px"}}>c. Personnes en recherche d’emploi formées par votre organisme de formation</td>
    <td > </td>
    <td > </td>

  </tr>
  <tr>
    <td style={{textAlign:"left",paddingLeft:"15px"}}>d. Particuliers à leurs propres frais formés par votre organisme de formation</td>
    <td > </td>
    <td > </td>

  </tr>
  <tr>
    <td style={{textAlign:"left",paddingLeft:"15px"}}>e. Autres stagiaires</td>
    <td > </td>
    <td > </td>

  </tr>
  <tr>
    <td style={{textAlign:"left",paddingLeft:"15px"}}>a. Salariés d’employeurs privés hors apprentis  </td>
    <td > </td>
    <td > </td>

  </tr>
  <tr>
    <td style={{textAlign:"left",paddingLeft:"15px"}}> <span style={{fontWeight:'600'}}> TOTAL =</span>
    <br/> dont stagiaires et apprentis ayant suivi une action en tout ou partie à distance
  </td>
    <td > </td>
    <td > </td>

  </tr>
  <tr>
    <td style={{fontWeight:"700",textAlign:"left",paddingLeft:"15px"}}> 
    F - 2. Dont activité sous-traitée de l’organisme

  </td>
    <td style={{fontWeight:"700",textAlign:"left",paddingLeft:"15px"}} >Nombre de stagiaires ou d’apprentis
 </td>
    <td style={{fontWeight:"700",textAlign:"left",paddingLeft:"15px"}} >Nombre total d’heures de formation suivies par les stagiaires et les apprentis
 </td>

  </tr>
  <tr>
    <td style={{textAlign:"left",paddingLeft:"15px"}}> Stagiaires ou apprentis dont l’action a été confiée par votre organisme à un autre organisme .......(2) 
  </td>
    <td > </td>
    <td > </td>

  </tr>
</table>
</div>
    </div>
    
    </div>
    
    
    
    </Sidebar>

)

}

export default Bilan