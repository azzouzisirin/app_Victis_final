module.exports = ({ EntrepAdherante,titreFormation,Reference,DateDebut,DateFin,RaisonOpco,nomOpco,prenomOpco,mailOpco}) => {
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
      margin-left:30px;
      width:900px;
   }
   .lefthaut{
      flex: 1;
      float:left;
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
  <h1 style="color:blue;text-align:center;font-size:40px;margin-top:-10px"> Feuille d'évaluation OPCO </h1>
<br/>
<div style="margin-left:60px" > 
<p style="font-style: italic;"> Vous avez participé au financement d'une action de formation ayant été réalisée par l'organisme de formation <br/>
ENGINEERING CONCEPT (SIREN 501 944 730 - Numéro d’enregistrement : 243 703 580 37).</p>
<p style="font-style: italic;">
Nous espérons que cette formation a permis à vos adhérents de progresser et de développer leur compétences.
</p>
<p style="font-style: italic;">
Afin d’améliorer notre offre de formation, nous sommes très intéressés par votre avis d'OPCO sur la formation et <br/>
la collaboration avec l'organisme de formation ENGINEERING CONCEPT.<br/>
N’hésitez pas à renseigner ce rapide questionnaire d’évaluation. Merci !

</p>
</div>
<div class="blocUne">
<div class="lefthaut" style="margin-top:-20px">
<h2>Identification de la formation : </h2>
<p>Entreprise adhérante :<span style="margin-left:10px;font-weight: 800;">  ${EntrepAdherante}</span> </p>
<p>Titre de la formation : <span style="margin-left:10px;font-weight: 800;"> ${titreFormation}</span></p>
<p> Référence dossier : <span style="margin-left:10px;font-weight: 800;">  ${Reference}</span></p>
<p> Date de formation : <span style="margin-left:10px;font-weight: 800;">   du ${DateDebut} au ${DateFin}</span></p>
</div>
<div class="rigthhaut" style="margin-top:40px">
<h2> Identification de l'OPCO : </h2>
<p>OPCO : <span style="margin-left:10px;font-weight: 800;"> ${RaisonOpco}  </span></p>
<p>Nom : <span style="margin-left:10px;font-weight: 800;"> ${nomOpco}  </span></p>
<p>Prénom : <span style="margin-left:10px;font-weight: 800;"> ${prenomOpco}</span> </p>
<p>Mail : <span style="margin-left:10px;font-weight: 800;"> ${mailOpco}</span> </p>

</div>
</div>
<img src="https://raw.githubusercontent.com/azzouzisirin/application_victis/main/evaluOpco.jpg"  width="98%"/>

</div>

</body>
</html>
    
    `;
};