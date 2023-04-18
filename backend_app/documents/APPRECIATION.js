module.exports = ({ Reference,titreFormation,DateDebut,DateFin,nomClient,emailClient,RaisonOpco}) => {
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
   
    .blocUne{
      display: flex;
      margin-left:70px;
      margin-top:15px;
      width:900px;
   }
   .lefthaut{
      flex: 1;
      margin-top:15px;

      float:left;
width:500px;   
   }
   .rigthhaut{
      flex:1;
   }
   p{
      font-size:21px;
      margin-top:-10px;
      font-weight: 400;
   }
   table td, tr{
      font-size:21px;
      margin-top:-10px;
      font-weight: 400;
   }
    </style>
</head> 
<body>
<img src="https://raw.githubusercontent.com/azzouzisirin/application_victis/main/footer.png" width="100%" height="140px" style="margin-top:-10px"/>
<br/>
  <h1 style="color:blue;text-align:center;font-size:40px;margin-top:-10px"> VOTRE APPRECIATION SUR L’APPORT
  DES FORMATIONS ENGAGEES</h1>
<br/>
<div class="blocUne">
<div class="lefthaut" >
<p>Session N°         <span style="margin-left:100px;font-weight: 800;">    ${Reference}</span> </p>
<p>Dates de la formation <span style="margin-left:10px;font-weight: 800;"> du ${DateDebut} au ${DateFin} </span></p>
 
</div>
<div class="rigthhaut" > 
<p>Tours, le <span style="margin-left:10px;font-weight: 800;"> ${`${today.getDate().toString().padStart(2, '0')}/${(today.getMonth() + 1).toString().padStart(2, '0')}/${today.getFullYear()}`}  </span></p>

</div>
</div>

<div style="margin-top:100px;" > 
<p style="margin-left:110px;"> Vous avez suivi il y a quelques temps une formation auprès de notre organisme. 
</p>

<p style="margin-left:110px;">
Dans le cadre de notre démarche qualité, nous vous invitons à répondre à ces quelques <br/>
questions qui nous permettront de mieux comprendre votre ressenti, mais également <br/>
d’améliorer nos procédures et contenus de formations.
</p>
<h2 style="margin-left:230px;font-size:18px;">C’est pourquoi nous vous remercions de bien vouloir retourner ce </h2>
<h2 style="margin-left:250px;font-size:18px;">questionnaire bien renseigné à ENGINEERING CONCEPT </h2>
<p style="margin-left:110px;"> C’est par vos réponses à ce questionnaire que nous améliorerons les actions de formation <br/>
engagées. </p>
<p style="margin-left:110px;"> En vous remerciant pour votre aide et en espérant vous revoir au cours d’une autre formation!</p>
<table style="margin-left:30%">
<tr>
<td style="width:300px">  Nom, prénom :</td>
<td> ${nomClient}</td>
</tr>
<tr>
<td>  E-mail :</td>
<td> ${emailClient}</td>
</tr>
<tr>
<td>  Intitulé de la formation :</td>
<td> ${titreFormation}</td>
</tr>
</table>
<br/>
<img src="https://raw.githubusercontent.com/azzouzisirin/application_victis/main/apprecation_1.jpg" width="100%" />
<img src="https://github.com/azzouzisirin/application_victis/blob/main/apprecation_2.jpg?raw=true" width="100%" />

</div>

</body>
</html>
    
    `;
};