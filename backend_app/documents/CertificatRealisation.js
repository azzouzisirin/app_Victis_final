module.exports = ({ nomStagaire,salarieStagaire,nomFormation,dateDebut,dateFin,dureeFormation}) => {
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
   .blocContunu{
      margin-left:70px;
   }
   .blocUne{
      display: flex;
      margin-left:5px;
      width:1600px;
   }
   .lefthaut{
      flex: 1;
      float:left;
      margin-top:-20px;
   
   }
   .rigthhaut{
      flex:1;
   }

   h3{
      font-size:20px;
   }
   p, label{
      font-size:19px;
      font-weight: 400;
   }

    </style>
</head> 
<body>
 
 
    <img src="https://raw.githubusercontent.com/azzouzisirin/application_victis/main/footer.png" width="100%" height="140px" style="margin-top:-10px"/>
    <br/>
      <h1 style="color:blue;text-align:center"> CERTIFICAT DE REALISATION </h1>
      <div class="blocContunu">
   <div class="blocUne">
   <div class="lefthaut" style="width:170px"> <h3> Je soussigné(e) : </h3></div>
   <div class="rigthhaut">  <h3>M. Azouz BDIOUI </h3></div>
   </div>

   <div class="blocUne">
   <div class="lefthaut" style="width:440px"> <h3> représentant légal du dispensateur de formation : </h3></div>
   <div class="rigthhaut">  <h3>ENGINEERING CONCEPT Formation </h3></div>
   </div>
    <h3> atteste que : </h3> 
    <h3 style="margin-left:80px"> ${nomStagaire}</h3>
    <div class="blocUne">
    <div class="lefthaut" style="width:200px"> <p> salarié(e) de l’entreprise :</p></div>
    <div class="rigthhaut">  <h3>${salarieStagaire}</h3></div>
    </div>

    <div class="blocUne">
    <div class="lefthaut" style="width:310px"> <p> a suivi l’action de formation à distance :</p></div>
    <div class="rigthhaut">  <h3>${nomFormation}</h3></div>
    </div>
    <p> Nature de l’action de formation : </p>

    <div style="margin-left:80px">
    <input type="checkbox"  checked>
    <label for="scales">action de formation</label> <br/>
 
    <input type="checkbox" >
    <label for="scales">bilan de compétences</label><br/>

    <input type="checkbox" >
    <label for="scales">action de VAE</label><br/>

    <input type="checkbox"  >
    <label for="scales">action de formation par apprentissage    </label>

    </div>
    <div class="blocUne">
    <div class="lefthaut" style="width:170px"> <p> qui s’est déroulée du :</p></div>
    <div class="rigthhaut">  <p> <span style="font-weight: bold; padding-right:20px"> ${dateDebut}</span>  au   <span style="font-weight: bold; padding-left:20px"> ${dateFin}</span></p></div>
    </div>

    <div class="blocUne">
    <div class="lefthaut" style="width:220px"> <p> pour une durée totale de :</p></div>
    <div class="rigthhaut">  <h3> ${dureeFormation}</h3></div>
    </div>

    <p> Sans préjudice des délais imposés par les règles fiscales, comptables ou commerciales, je <br/>
    m’engage à conserver l’ensemble des pièces justificatives qui ont permis d’établir le présent <br/>
    certificat pendant une durée de 3 ans à compter de la fin de l’année du dernier paiement. En cas <br/>
    de cofinancement des fonds européens la durée de conservation est étendue conformément aux <br/>
    obligations conventionnelles spécifiques. </p>

    <div class="blocUne">
    <div class="lefthaut" style="width:500px; margin-top:70px;">
    <p> Fait à : <span style="font-weight: bold;"> Tours</span> </p>
    <p> Le : <span style="font-weight: bold;">${`${today.getDate().toString().padStart(2, '0')}/${(today.getMonth() + 1).toString().padStart(2, '0')}/${today.getFullYear()}`}</span> </p>
   <p> Signature de l'apprenant</p>
          </div>
    <div class="rigthhaut"><img src="https://raw.githubusercontent.com/azzouzisirin/application_victis/main/signiature.png" width="310px" height="200px" style="margin-top:70px;" /></div>
  </div>
    </div>
</div>

  

<img src="https://raw.githubusercontent.com/azzouzisirin/application_victis/main/pied4.png" width="100%" height="100px" style="margin-top:90px"/>

     </div>
</body>
</html>
    
    `;
};