module.exports = ({ numSession,codeVilleFormation,LieuFormation,nomFormation,nomstagaire}) => {
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
  <h1 style="color:blue;text-align:center;font-size:40px;margin-top:-10px;font-weight: 1000;"> ATTESTATION DE FIN DE</h1>
  <h1 style="color:blue;text-align:center;font-size:40px;margin-top:-10px">FORMATION</h1>
<br/>
<div class="blocUne">
<div class="lefthaut" >
<p>Session N°          <span style="margin-left:10px;font-weight: 800;">   ${numSession} </span> </p>
 
</div> 
<div class="rigthhaut" >
<p>Tours, le <span style="margin-left:10px;font-weight: 800;"> ${`${today.getDate().toString().padStart(2, '0')}/${(today.getMonth() + 1).toString().padStart(2, '0')}/${today.getFullYear()}`}  </span></p>

</div>
</div>

<div style="margin-top:140px;" > 
<p style="margin-left:70px;">ENGINEERING CONCEPT, organisme de formation déclaré sous le n°24 37 03580 37, certifie <br/>
que, conformément aux dispositions de l’article L.6353-1 du code du travail :
</p>
</div> 
<h1 style="text-align: center;font-size:40px;margin-top:90px;font-style: italic;"> ${nomstagaire}</h1>
<p style="margin-left:70px;margin-top:50px;"> A suivi la formation :</p>
<h1 style="text-align: center;font-size:40px"> ${nomFormation}</h1>
<p style="margin-left:70px;margin-top:100px;"> Le ${`${today.getDate().toString().padStart(2, '0')}/${(today.getMonth() + 1).toString().padStart(2, '0')}/${today.getFullYear()}`} </p>
<p style="margin-left:70px;"> Lieu de la formation : ${LieuFormation} </p>
<p style="margin-left:260px;">  ${codeVilleFormation} </p>

<div style="margin-left:580px;margin-top:80px;">
<h3 >Azouz BDIOUI </h3>
<p >Dirigeant </p>
</div>
</div>
<p style="text-align: center;margin-top:100px;font-size:17px;">  Cette attestation peut vous permettre de renseigner votre passeport orientation-formation (art L.6315-2 du code du Travail).</p>
<h3 style="text-align: center;font-size:17px;;margin-top:-10px"> Attention, aucun double ne pourra être délivré. Conservez ce document sans limitation de temps.</h3>
<img src="https://raw.githubusercontent.com/azzouzisirin/application_victis/main/pied4.png" width="100%" height="100px" style="margin-top:-20px"/>

</div>

</body>
</html>
    
    `;
};