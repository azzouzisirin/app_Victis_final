module.exports = ({ NumSession,Contact,nomClient,nomStagaire,adressFormation,CodePostalFormation,nomFormation,lieuFormation,dureeFormation,dateFin,dateDebut}) => {
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
        
p{
	font-size: 26px;
   line-height: 4px;
}
table td{
	font-size: 24px;
  
}

    </style>
</head>
<body>
<img src="https://raw.githubusercontent.com/azzouzisirin/application_victis/main/footer.png" width="100%" height="130px" style="margin-top:-10px"/>

    <div  class="pdfConcension" style="margin-left:100px;"> 
 
 
        <br/>
         
      
        <div style=" margin-top: -30px;">
        <p> Session N° ${NumSession}</p>
        <p style="margin-top: -1px;">Contact ${Contact} </p>
        </div>
        <div style="margin-left:470px">
        <h2 > ${nomStagaire }</h2>
        <p style="margin-top: -5px;">${nomClient } </p>

        <p style="margin-top: -5px;">${adressFormation } </p>
        <p style="margin-top: -3px;">${ CodePostalFormation} </p>
        </div>
        <img src="https://raw.githubusercontent.com/azzouzisirin/application_victis/main/convocation.png"  height="80px" style="margin-top:60px;margin-left:-10px"/>
     <p style=" margin-top: 15px;">En accord avec votre responsable hiérarchique, nous avons le plaisir de </p>
  <p>   vous convier à la formation :</p>
      
       <h3 style="color:#BA55D3; margin-left:180px;font-size:45px;margin-top: 65px;font-style: italic;">${ nomFormation}   </h3>
        <table>
       <tr  style="height:50px;">
          <td style="width:300px ">Qui débutera le </td>
          <td style="width:200px"> : ${dateDebut}</td>
          <td style="width:200px"> à : 09 h 30</td>
       </tr>
       <tr  style="height:50px;">
       <td>Et finira le  </td>
       <td> : ${dateFin}</td>
       <td>à : 17 h 30 </td>
    </tr>
    </table>
    <table>
    <tr  style="height:50px;">
    <td style="width:300px ">Dates de la formation </td>
    <td style="width:400px"> : ${dureeFormation}</td>
 </tr>
 <tr style="height:50px;">
 <td style="width:300px ">Adresse de la formation  </td>
 <td style="width:400px"> : ${lieuFormation}</td>
</tr>
        </table>

        <p> Le programme détaillé de cette formation vous est joint en annexe. Pour </p>
        <p>  toute précision ou information concernant cette formation, vous pouvez</p>
        <p>  nous contacter.</p>

      <br/>
      <p> </p>
      <p>Espérant que cette formation réponde à vos attentes et restant à votre </p>
      <p>entière disposition.</p>
      <br/>
      <p> Veuillez agréer, « Madame/Monsieur », nos respectueuses salutations. </p>
      <br/>
      <div style="margin-left:470px">
      <p style="margin-top: -5px;">Azouz BDIOUI </p>
      <p style="margin-top: -3px;">Dirigeant </p>
      </div>
</div>
<img src="https://raw.githubusercontent.com/azzouzisirin/application_victis/main/pied4.png" width="100%" height="100px" style="margin-top:-10px"/>

    </body>
</html>
    
    `;
};