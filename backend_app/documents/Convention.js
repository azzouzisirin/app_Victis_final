module.exports = ({ RaisonClient,adress_1Client,adress_2Client,CodePostalClient,nomFormation,moduleFormation,typeFormation,nombStagaire,DateDebut,DateFin,duree,LieuFormation,selectedHeure,prixHt,tva,prixAvecTVA}) => {
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
        .pdfConcension h4{
	font-size: 24px;
	margin-bottom: 4px;
   margin-left:20px;

}
.pdfConcension h3{
	font-size: 28px;
	margin-bottom: 4px;

}
.pdfConcension table td{
	font-size: 21px;
}
.pdfConcension h1{
	font-size: 30px;

}
.blocUne{
   display: flex;
   margin-left:5px;
}
   .lefthaut{
       flex: 50%;
       float:left;
  
   }
   .rigthhaut{
       flex: 50%;
   }
.pdfConcension p{ 
	font-size: 22px;
	line-height: 20px;
	font-weight: 500;
	margin-bottom: 4px;

}
.pdfConcension span {
	font-size: 22px;
	margin-bottom: 3px;
	font-weight: 700;

}
.divCovocaHaut{
	height:130px;
   margin-top:-10px;
	margin-left:200px;
}
.divCovocaHaut p{
	line-height: 23px;

}
.pdfConcension table th{
	font-size: 22px;
}
    </style>
</head>
<body>
    <div  class="pdfConcension"> 
 
 
        <img src="https://raw.githubusercontent.com/azzouzisirin/application_victis/main/footer.png" width="100%" height="130px" style="margin-top:1px"/>
        <br/> <img src="https://raw.githubusercontent.com/azzouzisirin/application_victis/main/grandtitre.png" width="100%" height="150px" style="margin-top:-20px" />
        <img src="https://raw.githubusercontent.com/azzouzisirin/application_victis/main/titre1.png" width="100%" height="70px" style="margin-top:-15px"/>
     
         
          <div class='divCovocaHaut'>
     
           <h2> Société ${RaisonClient}</h2>
           <p style="margin-left:25px; margin-top:-15px;">${adress_1Client} </p>
           <p style="margin-left:25px;margin-top:-4px; ">${adress_2Client} </p>
           <p style="margin-left:25px;margin-top:-4px;  ">${CodePostalClient} </p>

           <table>
              <tr style="height:45px"> 
                 <td> Représentée par :</td>
                 <td> …...................................................... </td>
     
     
              </tr>
              <tr> 
              <td>Fonction  : </td>
                 <td> …...................................................... </td>
                   </tr>
           </table>
        
          </div>
    
          <h2 style="margin-left:490px;margin-top:45px;"> Ci-après dénommée « Le bénéficiaire »</h2>
          <h2 style="margin-left:770px;color:black;margin-top:-15px;"> D’une part</h2>
        
         <h2 style="color:black;font-size:26px;margin-left:70px;margin-top:-20px">ET : </h2>
     
         <div class='divCovocaHaut'>
        <h2 style="margin-top:-20px ;font-size:19x">ENGINEERING CONCEPT </h2>
        <p style="margin-top:-20px ;font-size:17px" > Dont le siège social est 8, rue Honoré de Balzac - 37000 Tours <br/>
     Immatriculée au RCS de Tours sous le numéro 501 944 730 <br/>
     Organisme de formation enregistré sous le numéro <br/>
     24 37 03580 37 auprès du préfet de la région centre<br/>
     Représentée par M. Azouz BDIOUI en sa qualité de dirigeant, ayant tous<br/>
     pouvoirs à l’effet des présentes,  </p>
     
     
           </div> 
      
           <h2 style="margin-left:490px;margin-top:35px;"> Ci-après dénommée « L’Organisme »</h2>
          <h2 style="margin-left:770px;color:black;margin-top:-15px;"> D’une part</h2>
      
          <h2 style="color:black;font-size:24px;margin-left:70px">Article 1 – OBJET, NATURE ET DURÉE DE LA FORMATION </h2>
      
     <div style="margin-left:110px">
     <p >Le bénéficiaire entend faire participer une partie de son personnel à l’action de <br/>
     formation suivante organisée par l’organisme de formation.
     </p> 
     <p> Sujet : <span>${nomFormation}- ${moduleFormation} </span></p>
     <p> Type d’action de formation (au sens de l’article L6313-1 du code du travail) :</p> 
     <p>Action de formation :<span>${typeFormation} </span> </p>
     <p>Effectifs formés :<span>${nombStagaire} </span> </p>
     <p>Dates de la session :  du <span>${DateDebut} </span> au <span>${DateFin} </span> </p>
     <p>Durée de la formation :<span>${duree} </span> </p>
     
     </div>
     <img src="https://raw.githubusercontent.com/azzouzisirin/application_victis/main/pied1.png" width="100%" height="170px"style="margin-top:-2px"/>
     <p></p>
           <img src="https://raw.githubusercontent.com/azzouzisirin/application_victis/main/footer.png" width="100%" height="130px" style="margin-top:10px"/>
          <h2 style="color:black;font-size:24px;margin-left:70px">Article 2 – ORGANISATION DE L’ACTION DE FORMATION </h2>
          <div style="margin-left:130px;margin-top:-10px">
     <p >Une convocation sera adressée à tous les participants. Elle portera en détail l’ensemble de <br/>
     ces informations</p>
  
     <h2 style="margin-left:30px"> Lieu de la formation : </h2>
     <p style="margin-left:130px;margin-top:-20px"> ${LieuFormation}</p>
     
 
     <h2 style="margin-left:30px"> Horaires de formation : </h2>
     <p style="margin-left:130px;margin-top:-20px"> ${selectedHeure}</p>
     
    
     <h2 style="margin-left:30px"> Moyens pédagogiques et techniques : </h2>
     <p style="margin-left:130px;margin-top:-20px">Ordinateur <br/>Connexion internet </p>
     
     
     <h2 style="margin-left:30px"> Moyens permettant d’assurer le suivi de l’exécution de l’action :</h2>
     <p style="margin-left:130px;margin-top:-20px">Liste d'émargement des stagiaires</p>
     
   
     <h2 style="margin-left:30px"> Moyens permettant d’apprécier les résultats de l’action :</h2>
     <p style="margin-left:130px;margin-top:-20px"> Questions ouvertes <br/>Schémas réalisés par les stagiaires </p>
     
  
     <h2 style="margin-left:30px"> Sanction de la formation :</h2>
     <p style="margin-left:130px;margin-top:-20px"> Une « Attestation de fin de formation » sera délivré à chaque participant</p>
 
     </div>
       
     <h2 style="color:black;font-size:24px;margin-left:70px">Article 3 – ENGAGEMENT DE PARTICIPATION A L’ACTION DE FORMATION</h2>
   
     <div style="margin-left:110px">
     <p >
     Le bénéficiaire s’engage à assurer la présence d’un (des) stagiaire(s) aux dates et lieux <br/>
     prévus ci-dessus.<br/>
     Liste des stagiaires :</p><br/>
     <div style="width:800px;margin-top:-15px"> 
     <table border='1'>
     <tr style="height:24px">
        <th style="width:250px;text-align:center"> Nom du stagiaire</th>
        <th style="width:250px;text-align:center">Fonction </th>
        <th style="width:250px;text-align:center">Adresse mail </th>
     </tr>
     <tr style="height:40px"> 
        <td> <p style="color:white"> aaa </p></td>
        <td> </td>
        <td> </td>
     
     </tr>
     <tr style="height:40px"> 
        <td> <p style="color:white"> aaa </p></td>
        <td> </td>
        <td> </td>
     
     </tr>
     <tr style="height:40px"> 
        <td> <p style="color:white"> aaa </p></td>
        <td> </td>
        <td> </td>
     
     </tr>
     <tr style="height:40px"> 
        <td> <p style="color:white"> aaa </p></td>
        <td> </td>
        <td> </td>
     
     </tr>
     <tr style="height:40px"> 
        <td> <p style="color:white"> aaa </p></td>
        <td> </td>
        <td> </td>
     
     </tr>
     <tr style="height:40px"> 
     <td> <p style="color:white"> aaa </p></td>
     <td> </td>
     <td> </td>
  
  </tr> 
    <tr style="height:40px"> 
  <td> <p style="color:white"> aaa </p></td>
  <td> </td>
  <td> </td>

</tr>
  
     
     
     </table>

     </div>


     </div>
     <br/>
     <img src="https://raw.githubusercontent.com/azzouzisirin/application_victis/main/pied2.png" width="100%" height="140px" />


     <img src="https://raw.githubusercontent.com/azzouzisirin/application_victis/main/footer.png" width="100%" height="150px" style="margin-top:10px"/>
     <br/><br/>
     <h2 style="color:black;font-size:24px;margin-left:70px;margin-top:-10px">Article 4 – REGLEMENT INTERIEUR </h2>
     <br/>
     <div style="margin-left:110px;margin-top:-60px;	">
     <p style="line-height: 24px;">
     Le règlement intérieur joint au présent contrat remis par l’entreprise bénéficiaire à chaque<br/>
     participant avant le début de l’action.<br/>
     Ce règlement est par ailleurs affiché dans les locaux de l’organisme de formation. Il pourrait<br/>
     également être mis à la disposition de chaque stagiaire sur simple demande.</p><br/>
     </div>
   
     <h2 style="color:black;font-size:24px;margin-left:70px;margin-top:-10px">Article 5 – PRIX DE LA FORMATION </h2>
     <div style="margin-left:110px;margin-top:-10px">
     <p  >
     En contrepartie de cette action de formation, le bénéficiaire s’acquittera des coûts suivants :
     </p><br/>
     <table style="margin-left:50px">
        <tr >
           <td style="width:150px">Coût total HT :  </td>
           <th> ${prixHt}</th>
        </tr>
        <tr>
           <td>TVA 20% : </td>
           <th>${tva} </th>
        </tr>
        <tr>
           <td>Total TTC :  </td>
           <th> ${prixAvecTVA} </th>
        </tr>
     </table>
     <p style="line-height: 24px;">
     Cette somme couvre l’intégralité des frais engagés par l’organisme de formation pour cette <br/>
     session.</p>
     </div> 
    
     <h2 style="color:black;font-size:24px;margin-left:70px">Article 6 – MODALITES DE REGLEMENT</h2>
     <div style="margin-left:110px">
     <p  style="line-height: 24px;">  
     Le paiement sera dû à réception de la facture selon les modalités prévues aux conditions <br/>
     générales de vente. <br/> <br/>
     Non réalisation de la prestation de formation <br/>
     En application de l’article L6354-1 du Code du travail, il est convenu entre les signataires de <br/>
     la présente convention, que faute de résiliation totale ou partielle de la prestation de <br/>
     formation, l’organisme prestataire doit rembourser au cocontractant les sommes indûment<br/>
     perçues de ce fait.
        </p>
     </div>
  
     
     <h2 style="color:black;font-size:24px;margin-left:70px"> Article 7 – CLAUSE DE DEDIT</h2>
     <div style="margin-left:110px">
     <p style="line-height: 24px;">  En cas de dédit par l’entreprise à moins de 30 jours avant la date de démarrage de la <br/>
     formation objet de la présente convention, ou abandon en cours de formation par un ou<br/>
     plusieurs stagiaires, l’organisme remboursera sur le coût total les sommes qu’il n’aura pas<br/>
     réellement dépensées ou engagées pour la réalisation de ladite formation.
        </p>
     </div>
    
     
     <h2 style="color:black;font-size:24px;margin-left:70px">Article 8 – LITIGE</h2>
     <div style="margin-left:110px">
     <p style="line-height: 24px;">  
     Si une contestation ou un différend ne peuvent pas être réglés à l’amiable, le Tribunal de <br/>
     commerce de Tours sera seul compétent pour régler le litige.
        </p>
     </div>
     <img src="https://raw.githubusercontent.com/azzouzisirin/application_victis/main/pied3.png" width="100%" height="160px" style="margin-top:75px"/>
     <p></p>
     <img src="https://raw.githubusercontent.com/azzouzisirin/application_victis/main/footer.png" width="100%" height="150px" style="margin-top:10px"/>
     <br/>
     <div style="margin-left:100px">
     <p>Fait à Tours, le ${`${today.getDate().toString().padStart(2, '0')}/${(today.getMonth() + 1).toString().padStart(2, '0')}/${today.getFullYear()}`} </p><br/>
     <p> En deux exemplaires originaux dont un pour chacune des parties</p>
     <br/>
     <div class="blocUne">
     <div class="lefthaut" style="width:500px">
     <p> Pour le bénéficiaire :</p><br/>
     <h2> Société ${RaisonClient}</h2><br/>
    <p> Représentant : ….............................................</p><br/>
    <p>Paraphes, mention « Lu et approuvé », signature et cachet du bénéficiaire</p>
           </div>
     <div class="rigthhaut"><img src="https://raw.githubusercontent.com/azzouzisirin/application_victis/main/signiature.png" width="310px" height="200px" style="margin-top:70px;" /></div>
   </div>
    
     
     </div>
     
     </div>
     <img src="https://raw.githubusercontent.com/azzouzisirin/application_victis/main/pied4.png" width="100%" height="140px" style="margin-top:600px"/>
     
     
     </div>
</body>
</html>
    
    `;
};