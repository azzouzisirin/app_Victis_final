module.exports = ({ numSession,nomFormation,varDisplay,dateDebut,codeVilleFormation,displaySig,dateFormation,stagaire,dureeMatin,dureeApreMidi,titreMatin,titreApresMidi,dateFin,dureFormation,LieuFormation}) => {
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
  text-align: center;
}
.pdfConcension h4{
	font-size: 22px;
   font-weight: 400;

}
.divtableux , td, th {
   border: 3px solid #333;
   text-align: center;
}
.divtableux  {
 border-collapse: collapse;
 border-color: #2a9d8f;
 margin-left:10px;
 margin-right:10px;

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
      <h1 style="text-align: center; font-weight:600;font-size: 37px;margin-top:-10px"> Formation ${nomFormation} </h1>
      <div class="blocUne">
      <div class="lefthaut" >
        <h4> Session N° ${numSession}  </h4>
        <h4 style="margin-top: -25px;">Période  <span style="font-weight: 700;"> du ${dateDebut}  au ${dateFin} </span> </h4>
     </div>
     <div class="rigthhaut">
         <h4> Lieu : ${LieuFormation}  </h4>      
         <h4 style="margin-top: -25px;"> <span style="color:white">........</span>  ${codeVilleFormation}  </h4>
 
     <h4 style="margin-top: -25px;"> Durée :<span style="font-weight: 700;">  ${dureFormation}</span>   </h4>
     </div>
     </div>
     <div >
     <table class="divtableux" style=" margin-top:-25px;">
  <tr style="height:40px">
     <td rowspan="3" style="color:blue;width:19%;height:50px;">Stagiaire</td>
    <th colspan="2" style="width:400px">${dateFormation[0]} </th>
     <th colspan="2" style="width:400px">${dateFormation[1]}</th>
     <th colspan="2" style="width:400px">${dateFormation[2]} </th>
      <th colspan="2" style="width:400px"> ${dateFormation[3]}</th>
      <th colspan="2" style="width:400px"> ${dateFormation[4]}</th>
  </tr>
  <tr style="height:40px" >
    <td style="text-align: center;" >${titreMatin[0]}</td>
      <td >${titreApresMidi[0]}</td>
      <td style="text-align: center;">${titreMatin[1]}</td>
      <td>${titreApresMidi[1]}</td>
      <td style="text-align: center;">${titreMatin[2]}</td>
      <td>${titreApresMidi[2]}</td>
      <td style="text-align: center;">${titreMatin[3]}</td>
      <td>${titreApresMidi[3]}</td>
      <td style="text-align: center;">${titreMatin[4]}</td>
      <td>${titreApresMidi[4]}</td>
  
  </tr>
  <tr style="height:40px">
      <td style="	font-size: 17px;">${dureeMatin[0]}</td>
    <td style="	font-size: 17px;">${dureeApreMidi[0]}</td>
    <td style="	font-size: 17px;">${dureeMatin[1]}</td>
    <td style="	font-size: 17px;">${dureeApreMidi[1]}</td> 
     <td style="	font-size: 17px;">${dureeMatin[2]}</td>
    <td style="	font-size: 17px;">${dureeApreMidi[2]}</td>
    <td style="	font-size: 17px;">${dureeMatin[3]}</td>
    <td style="	font-size: 17px;">${dureeApreMidi[3]}</td>
    <td style="	font-size: 17px;">${dureeMatin[4]}</td>
    <td style="	font-size: 17px;">${dureeApreMidi[4]}</td>
    
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
<table class="divtableux" style=" margin-top:-10px;margin-top:-5px;">
<tr style="height:30px">
<td rowspan="2" style="color:blue;width:19%;height:50px;">Formateur</td>
<th colspan="2" style="width:400px">${dateFormation[0]} </th>
<th colspan="2" style="width:400px">${dateFormation[1]}</th>
<th colspan="2" style="width:400px">${dateFormation[2]} </th>
 <th colspan="2" style="width:400px"> ${dateFormation[3]}</th>
 <th colspan="2" style="width:400px"> ${dateFormation[4]}</th>
</tr>
<tr style="height:30px" >
<td style="text-align: center;" >${titreMatin[0]}</td>
<td>${titreApresMidi[0]}</td>
<td style="text-align: center;">${titreMatin[1]}</td>
<td>${titreApresMidi[1]}</td>
<td style="text-align: center;">${titreMatin[2]}</td>
<td>${titreApresMidi[2]}</td>
<td style="text-align: center;">${titreMatin[3]}</td>
<td>${titreApresMidi[3]}</td>
<td style="text-align: center;">${titreMatin[4]}</td>
<td>${titreApresMidi[4]}</td>

</tr>


<tr style="height:30px">
<td >BDIOUI Azouz
</td>
<td> <img src="https://raw.githubusercontent.com/azzouzisirin/application_victis/main/sig_azouz.png" height="60%" style="display:${displaySig[0]}"/> </td>
<td> <img src="https://raw.githubusercontent.com/azzouzisirin/application_victis/main/sig_azouz.png" height="60%" style="display:${displaySig[0]}"/> </td>
<td> <img src="https://raw.githubusercontent.com/azzouzisirin/application_victis/main/sig_azouz.png" height="60%" style="display:${displaySig[1]}"/> </td>
<td> <img src="https://raw.githubusercontent.com/azzouzisirin/application_victis/main/sig_azouz.png" height="60%" style="display:${displaySig[1]}" /> </td>
<td> <img src="https://raw.githubusercontent.com/azzouzisirin/application_victis/main/sig_azouz.png" height="60%" style="display:${displaySig[2]}"/> </td>
<td> <img src="https://raw.githubusercontent.com/azzouzisirin/application_victis/main/sig_azouz.png" height="60%" style="display:${displaySig[2]}"/> </td>
<td> <img src="https://raw.githubusercontent.com/azzouzisirin/application_victis/main/sig_azouz.png" height="60%" style="display:${displaySig[3]}"/> </td>
<td> <img src="https://raw.githubusercontent.com/azzouzisirin/application_victis/main/sig_azouz.png" height="60%" style="display:${displaySig[3]}"/> </td>
<td> <img src="https://raw.githubusercontent.com/azzouzisirin/application_victis/main/sig_azouz.png" height="60%" style="display:${displaySig[4]}" /> </td>
<td> <img src="https://raw.githubusercontent.com/azzouzisirin/application_victis/main/sig_azouz.png" height="60%" style="display:${displaySig[4]}" /> </td>


</tr>


</table>
</div>
</div>
 <p style="margin-left:30px;margin-top:1px"> Par ma signature, j’atteste de mon intervention dans la formation ci-dessus référencée</p>

  

<img src="https://raw.githubusercontent.com/azzouzisirin/application_victis/main/pied4.png" width="100%" height="100px" style="margin-top:-20px"/>

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
  <h4> Lieu : ${LieuFormation}  </h4>      
  <h4 style="margin-top: -25px;"> <span style="color:white">........</span>  ${codeVilleFormation}  </h4>


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
 <td style="text-align: center;" >${titreMatin[5]}</td>
   <td >${titreApresMidi[5]}</td>
   <td style="text-align: center;">${titreMatin[6]}</td>
   <td>${titreApresMidi[6]}</td>
   <td style="text-align: center;">${titreMatin[7]}</td>
   <td>${titreApresMidi[7]}</td>
   <td style="text-align: center;">${titreMatin[8]}</td>
   <td>${titreApresMidi[8]}</td>
   <td style="text-align: center;">${titreMatin[9]}</td>
   <td>${titreApresMidi[9]}</td>

</tr>
<tr style="height:50px">
   <td style="	font-size: 17px;">${dureeMatin[5]}</td>
 <td style="	font-size: 17px;">${dureeApreMidi[5]}</td>
 <td style="	font-size: 17px;">${dureeMatin[6]}</td>
 <td style="	font-size: 17px;">${dureeApreMidi[6]}</td> 
  <td style="	font-size: 17px;">${dureeMatin[7]}</td>
 <td style="	font-size: 17px;">${dureeApreMidi[7]}</td>
 <td style="	font-size: 17px;">${dureeMatin[8]}</td>
 <td style="	font-size: 17px;">${dureeApreMidi[8]}</td>
 <td style="	font-size: 17px;">${dureeMatin[9]}</td>
 <td style="	font-size: 17px;">${dureeApreMidi[9]}</td>
 
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
<th colspan="2" style="width:300px"> ${dateFormation[9]}</th>
</tr>
<tr style="height:50px" >
<td style="text-align: center;" >${titreMatin[5]}</td>
<td>${titreApresMidi[5]}</td>
<td style="text-align: center;">${titreMatin[6]}</td>
<td>${titreApresMidi[6]}</td>
<td style="text-align: center;">${titreMatin[7]}</td>
<td>${titreApresMidi[7]}</td>
<td style="text-align: center;">${titreMatin[8]}</td>
<td>${titreApresMidi[8]}</td>
<td style="text-align: center;">${titreMatin[9]}</td>
<td>${titreApresMidi[9]}</td>

</tr>


<tr style="height:50px">
<td >BDIOUI Azouz
</td>
<td> <img src="https://raw.githubusercontent.com/azzouzisirin/application_victis/main/sig_azouz.png" height="60%" style="display:${displaySig[5]}"/> </td>
<td> <img src="https://raw.githubusercontent.com/azzouzisirin/application_victis/main/sig_azouz.png" height="60%" style="display:${displaySig[5]}"/> </td>
<td> <img src="https://raw.githubusercontent.com/azzouzisirin/application_victis/main/sig_azouz.png" height="60%" style="display:${displaySig[6]}"/> </td>
<td> <img src="https://raw.githubusercontent.com/azzouzisirin/application_victis/main/sig_azouz.png" height="60%" style="display:${displaySig[6]}" /> </td>
<td> <img src="https://raw.githubusercontent.com/azzouzisirin/application_victis/main/sig_azouz.png" height="60%" style="display:${displaySig[7]}"/> </td>
<td> <img src="https://raw.githubusercontent.com/azzouzisirin/application_victis/main/sig_azouz.png" height="60%" style="display:${displaySig[7]}"/> </td>
<td> <img src="https://raw.githubusercontent.com/azzouzisirin/application_victis/main/sig_azouz.png" height="60%" style="display:${displaySig[8]}"/> </td>
<td> <img src="https://raw.githubusercontent.com/azzouzisirin/application_victis/main/sig_azouz.png" height="60%" style="display:${displaySig[8]}"/> </td>
<td> <img src="https://raw.githubusercontent.com/azzouzisirin/application_victis/main/sig_azouz.png" height="60%" style="display:${displaySig[9]}" /> </td>
<td> <img src="https://raw.githubusercontent.com/azzouzisirin/application_victis/main/sig_azouz.png" height="60%" style="display:${displaySig[9]}" /> </td>


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