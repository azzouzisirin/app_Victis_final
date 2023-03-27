module.exports = ({ numSession,nomFormation,nomFormateur,nomSociete,nomStagaire,dateFin}) => {
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
      margin-left:60px;
      width:800px;
   }
   .lefthaut{
      flex: 1;
      float:left;
      margin-top:16px;
width:500px;   
   }
   .rigthhaut{
      flex:1;
   }
   p{
      font-size:19px;
      margin-top:-10px;
      font-weight: 400;
   }
    </style>
</head> 
<body>
<img src="https://raw.githubusercontent.com/azzouzisirin/application_victis/main/footer.png" width="100%" height="140px" style="margin-top:-10px"/>
<br/>
  <h1 style="color:blue;text-align:center;font-size:40px;margin-top:-10px"> Feuille d'évaluation stagiaire  </h1>
<br/>
<div class="blocUne">
<div class="lefthaut">
<p> Session N° ${numSession} </p>
<p> Date : le ${dateFin}</p>
<p> Formateur : ${nomFormateur}</p>
</div>
<div class="rigthhaut">
<p>Société : <span style="margin-left:10px;font-weight: 800;"> ${nomSociete}  </span></p>
<p>Participant : <span style="margin-left:10px;font-weight: 800;"> ${nomStagaire}  </span></p>
<p>Formation : <span style="margin-left:10px;"> ${nomFormation}</span> </p>

</div>
</div>
</div>
<img src="https://raw.githubusercontent.com/azzouzisirin/application_victis/main/imgFeuilleEvaluation.png" width="97%" height="80%" style="margin-left:20px;"/>
  <img src="https://raw.githubusercontent.com/azzouzisirin/application_victis/main/pied4.png" width="100%" height="120px" style="margin-top:40px"/>

</body>
</html>
    
    `;
};