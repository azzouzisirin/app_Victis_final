module.exports = ({ numSession,nomFormation,varDisplay,dateDebut,displaySig,dateFormation,stagaire,dureeMatin,dureeApreMidi,titreMatin,titreApresMidi,dateFin,dureFormation,LieuFormation}) => {
    const today = new Date();
return ` 
 
<!DOCTYPE html> 
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
    body{
      font-family: "Gill Sans", sans-serif;
    }
        .pdfConcension h1{
	font-size: 27px;
	margin-bottom: 4px;
   margin-left:20px;
   font-weight: 400;

}
.blocUne{
   display: flex;
   margin-left:5px;
   width:1600px;
}
.lefthaut{
   flex: 1;
   float:left;
   width:1000px;
   margin-top:-30px;

}
.rigthhaut{
   flex:1;
}
.pdfConcension h3{
	font-size: 28px;
	margin-bottom: 4px;

}
.pdfConcension table td{
	font-size: 21px;
}
.pdfConcension h4{
	font-size: 22px;
   font-weight: 400;

}
.divtableux , td, th {
   border: 3px solid #333;
}
.divtableux  {
 border-collapse: collapse;
 border-color: #2a9d8f;
 margin-left:30px;
 margin-right:30px;

}
.divflex{
   width:1600px;
   margin-left:50px;
   display: flex;
}

    </style>
</head>
<body>
    <div  class="pdfConcension"> 
 
 
        <img src="https://raw.githubusercontent.com/azzouzisirin/application_victis/main/topfeuilEngement.png" width="100%" height="110px" style="margin-top:10px"/>
      <h1 style="text-align: center; font-weight:600;font-size: 37px;"> Formation ${nomFormation} </h1>
      <br/>
      <div class="blocUne">
      <div class="lefthaut" >
        <h4> Session N° ${numSession}  </h4>
        <h4 style="margin-top: -25px;">Période  <span style="font-weight: 700;"> du ${dateDebut}  au ${dateFin} </span> </h4>
     </div>
     <div class="rigthhaut">
         <h4> Lieu : ${LieuFormation}   </h4>
 
     <h4 style="margin-top: -25px;"> Durée :<span style="font-weight: 700;">  ${dureFormation}</span>   </h4>
     </div>
     </div>
     <div >
     <table class="divtableux" >
  <tr style="height:50px">
     <td rowspan="3" style="color:blue;width:24%;height:50px;">Stagiaire</td>
    <th colspan="2" style="width:300px">${dateFormation[0]} </th>
     <th colspan="2" style="width:300px">${dateFormation[1]}</th>
     <th colspan="2" style="width:300px">${dateFormation[2]} </th>
      <th colspan="2" style="width:300px"> ${dateFormation[3]}</th>
      <th colspan="2" style="width:300px"> ${dateFormation[4]}</th>
  </tr>
  <tr style="height:50px" >
    <th >${titreMatin[0]}</th>
      <th >${titreApresMidi[0]}</th>
      <th>${titreMatin[1]}</th>
      <th>${titreApresMidi[1]}</th>
      <th>${titreMatin[2]}</th>
      <th>${titreApresMidi[2]}</th>
      <th>${titreMatin[3]}</th>
      <th>${titreApresMidi[3]}</th>
      <th>${titreMatin[4]}</th>
      <th>${titreApresMidi[4]}</th>
  
  </tr>
  <tr style="height:50px">
      <th>${dureeMatin[0]}</th>
    <th>${dureeApreMidi[0]}</th>
    <th>${dureeMatin[1]}</th>
    <th>${dureeApreMidi[1]}</th> 
     <th>${dureeMatin[2]}</th>
    <th>${dureeApreMidi[2]}</th>
    <th>${dureeMatin[3]}</th>
    <th>${dureeApreMidi[3]}</th>
    <th>${dureeMatin[4]}</th>
    <th>${dureeApreMidi[4]}</th>
    
  </tr>
  
  <tr style="height:50px">
    <td > ${stagaire[0]}
</td>
    <td> </td>

    <td> </td>
      <td> </td>

    <td> </td>
        <td>  </td>
      <td>  </td>
       <td>  </td>
      <td>  </td>
       <td> </td>
      <td>   </td>
  </tr>
  
   <tr style="height:50px">
    <td >  ${stagaire[1]}</td>
    <td> </td>

    <td> </td>
      <td> </td>

    <td> </td>
        <td>  </td>
      <td>  </td>
       <td>  </td>
      <td>  </td>
       <td> </td>
      <td>   </td>
  </tr>
    <tr style="height:50px">
    <td > ${stagaire[2]} </td>
    <td> </td>

    <td> </td>
      <td> </td>

    <td> </td>
        <td>  </td>
      <td>  </td>
       <td>  </td>
      <td>  </td>
       <td> </td>
      <td>   </td>
  </tr>
    <tr style="height:50px">
    <td > ${stagaire[3]} </td>
    <td> </td>

    <td> </td>
      <td> </td>

    <td> </td>
        <td>  </td>
      <td>  </td>
       <td>  </td>
      <td>  </td>
       <td> </td>
      <td>   </td>
  </tr>
    <tr style="height:50px">
    <td > ${stagaire[4]} </td>
    <td> </td>

    <td> </td>
      <td> </td>

    <td> </td>
        <td>  </td>
      <td>  </td>
       <td>  </td>
      <td>  </td>
       <td> </td>
      <td>   </td>
  </tr>
</table>
</div>
<p style="margin-left:30px">Par ma signature, j’atteste avoir reçu la formation ci-dessus référencée. </p>
     
<div >
<table class="divtableux" >
<tr style="height:50px">
<td rowspan="2" style="color:blue;width:20%;height:50px;">Formateur</td>
<th colspan="2" style="width:300px">${dateFormation[0]} </th>
<th colspan="2" style="width:300px">${dateFormation[1]}</th>
<th colspan="2" style="width:300px">${dateFormation[2]} </th>
 <th colspan="2" style="width:300px"> ${dateFormation[3]}</th>
 <th colspan="2" style="width:300px"> ${dateFormation[4]}</th>
</tr>
<tr style="height:50px" >
<th >${titreMatin[0]}</th>
<th>${titreApresMidi[0]}</th>
<th>${titreMatin[1]}</th>
<th>${titreApresMidi[1]}</th>
<th>${titreMatin[2]}</th>
<th>${titreApresMidi[2]}</th>
<th>${titreMatin[3]}</th>
<th>${titreApresMidi[3]}</th>
<th>${titreMatin[4]}</th>
<th>${titreApresMidi[4]}</th>

</tr>


<tr style="height:50px">
<td >BDIOUI Azouz
</td>
<td> <img src="https://raw.githubusercontent.com/azzouzisirin/application_victis/main/sig_azouz.png" height="80%" style="display:${displaySig[0]}"/> </td>
<td> <img src="https://raw.githubusercontent.com/azzouzisirin/application_victis/main/sig_azouz.png" height="80%" style="display:${displaySig[0]}"/> </td>
<td> <img src="https://raw.githubusercontent.com/azzouzisirin/application_victis/main/sig_azouz.png" height="80%" style="display:${displaySig[1]}"/> </td>
<td> <img src="https://raw.githubusercontent.com/azzouzisirin/application_victis/main/sig_azouz.png" height="80%" style="display:${displaySig[1]}" /> </td>
<td> <img src="https://raw.githubusercontent.com/azzouzisirin/application_victis/main/sig_azouz.png" height="80%" style="display:${displaySig[2]}"/> </td>
<td> <img src="https://raw.githubusercontent.com/azzouzisirin/application_victis/main/sig_azouz.png" height="80%" style="display:${displaySig[2]}"/> </td>
<td> <img src="https://raw.githubusercontent.com/azzouzisirin/application_victis/main/sig_azouz.png" height="80%" style="display:${displaySig[3]}"/> </td>
<td> <img src="https://raw.githubusercontent.com/azzouzisirin/application_victis/main/sig_azouz.png" height="80%" style="display:${displaySig[3]}"/> </td>
<td> <img src="https://raw.githubusercontent.com/azzouzisirin/application_victis/main/sig_azouz.png" height="80%" style="display:${displaySig[4]}" /> </td>
<td> <img src="https://raw.githubusercontent.com/azzouzisirin/application_victis/main/sig_azouz.png" height="80%" style="display:${displaySig[4]}" /> </td>


</tr>


</table>
</div>
</div>
 <p style="margin-left:30px"> Par ma signature, j’atteste de mon intervention dans la formation ci-dessus référencée</p>

  

<img src="https://raw.githubusercontent.com/azzouzisirin/application_victis/main/pied4.png" width="100%" height="120px" style="margin-top:10px"/>

     </div>
     <div style="display:${varDisplay}">
     <div  class="pdfConcension" > 
 
 
     <img src="https://raw.githubusercontent.com/azzouzisirin/application_victis/main/topfeuilEngement.png" width="100%" height="110px" style="margin-top:10px"/>
   <h1 style="text-align: center; font-weight:600;font-size: 37px;"> Formation ${nomFormation} </h1>
   <br/>
   <div class="blocUne">
   <div class="lefthaut" >
     <h4> Session N° ${numSession}  </h4>
     <h4 style="margin-top: -25px;">Période  <span style="font-weight: 700;"> du ${dateDebut}  au ${dateFin} </span> </h4>
  </div>
  <div class="rigthhaut">
      <h4> Lieu : ${LieuFormation}   </h4>

  <h4 style="margin-top: -25px;"> Durée :<span style="font-weight: 700;">  ${dureFormation}</span>   </h4>
  </div>
  </div>
  <div >
  <table class="divtableux" >
<tr style="height:50px">
  <td rowspan="3" style="color:blue;width:24%;height:50px;">Stagiaire</td>
 <th colspan="2" style="width:300px">${dateFormation[5]} </th>
  <th colspan="2" style="width:300px">${dateFormation[6]}</th>
  <th colspan="2" style="width:300px">${dateFormation[7]} </th>
   <th colspan="2" style="width:300px"> ${dateFormation[8]}</th>
   <th colspan="2" style="width:300px"> ${dateFormation[9]}</th>
</tr>
<tr style="height:50px" >
 <th >${titreMatin[5]}</th>
   <th >${titreApresMidi[5]}</th>
   <th>${titreMatin[6]}</th>
   <th>${titreApresMidi[6]}</th>
   <th>${titreMatin[7]}</th>
   <th>${titreApresMidi[7]}</th>
   <th>${titreMatin[8]}</th>
   <th>${titreApresMidi[8]}</th>
   <th>${titreMatin[9]}</th>
   <th>${titreApresMidi[9]}</th>

</tr>
<tr style="height:50px">
   <th>${dureeMatin[5]}</th>
 <th>${dureeApreMidi[5]}</th>
 <th>${dureeMatin[6]}</th>
 <th>${dureeApreMidi[6]}</th> 
  <th>${dureeMatin[7]}</th>
 <th>${dureeApreMidi[7]}</th>
 <th>${dureeMatin[8]}</th>
 <th>${dureeApreMidi[8]}</th>
 <th>${dureeMatin[9]}</th>
 <th>${dureeApreMidi[9]}</th>
 
</tr>

<tr style="height:50px">
 <td > ${stagaire[5]}
</td>
 <td> </td>

 <td> </td>
   <td> </td>

 <td> </td>
     <td>  </td>
   <td>  </td>
    <td>  </td>
   <td>  </td>
    <td> </td>
   <td>   </td>
</tr>

<tr style="height:50px">
 <td >  ${stagaire[6]}</td>
 <td> </td>

 <td> </td>
   <td> </td>

 <td> </td>
     <td>  </td>
   <td>  </td>
    <td>  </td>
   <td>  </td>
    <td> </td>
   <td>   </td>
</tr>
 <tr style="height:50px">
 <td > ${stagaire[7]} </td>
 <td> </td>

 <td> </td>
   <td> </td>

 <td> </td>
     <td>  </td>
   <td>  </td>
    <td>  </td>
   <td>  </td>
    <td> </td>
   <td>   </td>
</tr>
 <tr style="height:50px">
 <td > ${stagaire[8]} </td>
 <td> </td>

 <td> </td>
   <td> </td>

 <td> </td>
     <td>  </td>
   <td>  </td>
    <td>  </td>
   <td>  </td>
    <td> </td>
   <td>   </td>
</tr>
 <tr style="height:50px">
 <td > ${stagaire[9]} </td>
 <td> </td>

 <td> </td>
   <td> </td>

 <td> </td>
     <td>  </td>
   <td>  </td>
    <td>  </td>
   <td>  </td>
    <td> </td>
   <td>   </td>
</tr>
</table>
</div>
<p style="margin-left:30px">Par ma signature, j’atteste avoir reçu la formation ci-dessus référencée. </p>
  
<div >
<table class="divtableux" >
<tr style="height:50px">
<td rowspan="2" style="color:blue;width:20%;height:50px;">Formateur</td>
<th colspan="2" style="width:300px">${dateFormation[5]} </th>
<th colspan="2" style="width:300px">${dateFormation[6]}</th>
<th colspan="2" style="width:300px">${dateFormation[7]} </th>
<th colspan="2" style="width:300px"> ${dateFormation[8]}</th>
<th colspan="2" style="width:300px"> ${dateFormation[8]}</th>
</tr>
<tr style="height:50px" >
<th >${titreMatin[5]}</th>
<th>${titreApresMidi[5]}</th>
<th>${titreMatin[6]}</th>
<th>${titreApresMidi[6]}</th>
<th>${titreMatin[7]}</th>
<th>${titreApresMidi[7]}</th>
<th>${titreMatin[8]}</th>
<th>${titreApresMidi[8]}</th>
<th>${titreMatin[9]}</th>
<th>${titreApresMidi[9]}</th>

</tr>


<tr style="height:50px">
<td >BDIOUI Azouz
</td>
<td> <img src="https://raw.githubusercontent.com/azzouzisirin/application_victis/main/sig_azouz.png" height="80%" style="display:${displaySig[5]}"/> </td>
<td> <img src="https://raw.githubusercontent.com/azzouzisirin/application_victis/main/sig_azouz.png" height="80%" style="display:${displaySig[5]}"/> </td>
<td> <img src="https://raw.githubusercontent.com/azzouzisirin/application_victis/main/sig_azouz.png" height="80%" style="display:${displaySig[6]}"/> </td>
<td> <img src="https://raw.githubusercontent.com/azzouzisirin/application_victis/main/sig_azouz.png" height="80%" style="display:${displaySig[6]}" /> </td>
<td> <img src="https://raw.githubusercontent.com/azzouzisirin/application_victis/main/sig_azouz.png" height="80%" style="display:${displaySig[7]}"/> </td>
<td> <img src="https://raw.githubusercontent.com/azzouzisirin/application_victis/main/sig_azouz.png" height="80%" style="display:${displaySig[7]}"/> </td>
<td> <img src="https://raw.githubusercontent.com/azzouzisirin/application_victis/main/sig_azouz.png" height="80%" style="display:${displaySig[8]}"/> </td>
<td> <img src="https://raw.githubusercontent.com/azzouzisirin/application_victis/main/sig_azouz.png" height="80%" style="display:${displaySig[8]}"/> </td>
<td> <img src="https://raw.githubusercontent.com/azzouzisirin/application_victis/main/sig_azouz.png" height="80%" style="display:${displaySig[9]}" /> </td>
<td> <img src="https://raw.githubusercontent.com/azzouzisirin/application_victis/main/sig_azouz.png" height="80%" style="display:${displaySig[9]}" /> </td>


</tr>


</table>
</div>
</div>
<p style="margin-left:30px"> Par ma signature, j’atteste de mon intervention dans la formation ci-dessus référencée</p>



<img src="https://raw.githubusercontent.com/azzouzisirin/application_victis/main/pied4.png" width="100%" height="120px" style="margin-top:10px"/>

  </div>
  </div>
</body>
</html>
    
    `;
};