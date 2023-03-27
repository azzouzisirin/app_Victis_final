module.exports = ({ nomFormateur,adress_1Formateur,adress_2Formateur,CodePostalFormateur,numTel,emailFormateur,nomFormation,nombStagaire,DateDebut,DateFin,duree,LieuFormation,HeureFormation,totalPrix,Prixtva,tarifHt}) => {
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
    margin-top:-10px;
	margin-bottom: -3px;
   margin-left:15px;

}

.pdfConcension h5{
	font-size: 21px;
   margin-left:45px;

}
.pdfConcension{
   margin-left:60px;
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
   width:1200px;
}
   .lefthaut{
       flex: 1;

       float:left;
       margin-top:-20px;

   }
   .rigthhaut{
       flex: 1;
       margin-top:30px;
       padding-left:30px;
   }
.pdfConcension p{ 
	font-size: 22px;
	line-height: 28px;
	font-weight: 500;
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
 
 
 
        <img src="https://raw.githubusercontent.com/azzouzisirin/application_victis/main/footer.png" width="100%" height="140px" style="margin-top:-20px"/>
        <div  class="pdfConcension"> 
        <br/> <img src="https://raw.githubusercontent.com/azzouzisirin/application_victis/main/titrecontratFormation.png" width="85%" height="70px" style="margin-top:10px;margin-left:60px" />
     <h4 style="margin-top:60px"> Objet du contrat</h4>
      <p style="margin-left:60px"> Le présent Contrat de Service (ci-après dénommé "Le contrat") est conclu entre :</p>
      <br/>  <br/> <h4> ENGINEERING CONCEPT</h4>
   <p style="margin-left:60px"> 8, rue Honoré de Balzac </p>
   <p style="margin-left:60px"> 37000 Tours </p>
   <br/>  <br/>  <h4> ET </h4>
   <h4 style="margin-top:60px"> Le prestataire </h4>
   <p style="margin-left:60px"> ${nomFormateur}</p>
   <p style="margin-left:60px">Adresse : </p>
   <p style="margin-left:60px"> ${adress_1Formateur}</p>
   <p style="margin-left:60px">${adress_2Formateur} </p>
   <p style="margin-left:60px"> ${CodePostalFormateur}</p>
   <p style="margin-left:60px">Tél. : ${numTel} </p>
   <p style="margin-left:60px"> Mail :${emailFormateur} </p>
<p style="margin-top:60px">  Ce contrat défini les modalités de collaboration et d’accomplissement d’une prestation <br/>
applicative (ci-après dénommée « la prestation ») entre ENGINEERING CONCEPT, auprès <br/>
d’un client final de la société ENGINEERING CONCEPT (ci-après dénommé « client »).</p>
      </div>
<img src="https://raw.githubusercontent.com/azzouzisirin/application_victis/main/footerContratForma_1.png" width="97%" height="120px" style="margin-top:20px"/>
<br/>
<img src="https://raw.githubusercontent.com/azzouzisirin/application_victis/main/footer.png" width="100%" height="140px" style="margin-top:-20px"/>
<div  class="pdfConcension"> <br/>
<h4>Article 1 – Objet, nature et durée de la prestation</h4>
<p style="margin-left:40px"> En exécution du présent contrat, le prestataire s’engage à assurer l’action de formation ci-après  <br/> et prévue par le programme en annexe ci-joint, conformément aux conditions fixées <br/>
par notre charte ci-joint et les les critères du référentiel Qualiopi.</p>
<p style="margin-left:40px"> Intitulé de la formation : ${nomFormation} </p>
<p style="margin-left:40px">  Type d’action de formation (au sens de l’article L6313-1 du code du travail) :<br/>
action de formation :${LieuFormation}</p>
<p style="margin-left:40px"> Effectifs formés :${nombStagaire} </p>
<p style="margin-left:40px">Dates de la session : du ${DateDebut} au ${DateFin}  </p>
<p style="margin-left:40px"> Durée de la formation : ${duree} </p>
<br/><h4> Article 2 – Organisation de l’action de formation  </h4>
<h5> Lieu de la formation : </h5>
<p style="margin-left:80px;margin-top:-30px"> ${LieuFormation}</p> 
<h5> Horaires de formation : </h5>
<p style="margin-left:80px;margin-top:-30px"> ${HeureFormation}</p> 
<h5> Moyens pédagogiques et techniques :</h5>
<p style="margin-left:90px;margin-top:-30px"> Ordinateur <br/> Connexion internet</p> 
<br/><h4> Article 3 – Règlement intérieur :  </h4>
<p style="margin-left:40px">Le formateur est chargé de faire respecter le règlement intérieur, et s’engage à respecter la <br/>
règlementation en vigueur en matière d’hygiène et de sécurité.</p>

<p style="margin-left:40px">Compte tenu de l’activité de la Société, le prestataire est tenu à une obligation de réserves,<br/>
de confidentialité et au secret professionnel. Tout manquement à cet article sera considéré<br/>
comme faute lourde et fera immédiatement l’objet d’un litige.</p>

<div>
<img src="https://raw.githubusercontent.com/azzouzisirin/application_victis/main/footerContratForma_2.png" width="97%" height="120px" style="margin-top:60px"/>
<br/>
<img src="https://raw.githubusercontent.com/azzouzisirin/application_victis/main/footer.png" width="100%" height="120px" style="margin-top:-20px;margin-left:-40px"/>
<div  class="pdfConcension"> <br/>
<h4 style="margin-left:-30px"> Article 4 – Obligations du formateur :</h4>
<p style="margin-left:5px;margin-top:5px"> Le prestataire se présentera comme <span style="font-weight:bold;text-decoration : underline;font-size: 20px;">Collaborateur de la société ENGINEERING CONCEPT</span> </p>
<h5 style="margin-left:5px"> Compte rendu de fin de formation : </h5>
<p style="margin-left:30px;margin-top:-30px"> Le prestataire s'engage à restituer à l’issue de la formation : </p>
<p style="margin-left:55px"> - Un compte rendu d’intervention <br/> - L’évaluation de fin de stage,
<br/>- Le détail des prestations réalisées et les demandes futures du client.</p>
<h5 style="margin-left:110px;margin-top:-20px"> Le dossier sera impérativement remis à l’issu de la formation. </h5>
<h4 style="margin-left:-30px"> Article 5 – Facturation du prestataire :</h4>
<p style="margin-left:-10px;margin-top:5px">   
Chaque contrat donne lieu à une vacation distincte <br/>
Chaque facture comportera obligatoirement le numéro de session ENGINEERING CONCEPT
</p>
<div class="blocUne" style="margin-left:50px;margin-top:-10px">  
<div class="lefthaut">
<p> Tarif journalier à la vacation HT : </p>
<p style="margin-top:-14px"> TVA 20% :</p>
<p style="margin-top:-14px"> Facturation totale TTC :</p>
</div>
<div class="rigthhaut">
<p style="margin-left:20px"> ${tarifHt}</p>
<p style="margin-top:-14px;margin-left:20px"> ${Prixtva}</p>
<p style="margin-top:-14px;margin-left:20px"> ${totalPrix}</p>
</div>
</div>
<br/>
<p style="margin-left:5px;margin-top:-10px">  Le RIB est à envoyer séparément. <br/>
Attention, toute facture ne respectant pas la procédure ne pourra pas être traitée  </p>
<h5 style="margin-left:5px;margin-top:-5px"> Délai de paiement :</h5>
<p style="margin-left:5px;margin-top:-35px"> Nos règlements se font par virement à 45 jours fin de mois. C'est à dire 45 jours à compter<br/>
de la date d’émission de la facture, la limite de paiement intervenant à la fin du mois civil<br/>
au cours duquel expirent ces 45 jours. </p>
<p style="margin-left:5px;margin-top:-10px">
Les factures doivent être transmises par mail dans les 15 jours après formation, sans cela la<br/>
date de prise en compte correspondra à la date de réception des documents.
</p>
<h4 style="margin-left:-30px"> Article 6 – Conditions d'exécution du contrat : <h4>
<h5 style="margin-left:-5px;margin-top:22px"> Clause 1 : Responsabilité du prestataire </h5>
<p style="margin-top:-15px">Le prestataire s’engage à respecter les instructions particulières qui lui sont transmises<br/>
par ENGINEERING CONCEPT dans le contexte de ce contrat</p>
<p style="margin-top:-15px"> Le prestataire reconnaît avoir reçu de la part de ENGINEERING CONCEPT tous les<br/>
éléments nécessaires à une évaluation des compétences nécessaires et attendues dans le<br/>
cadre de ce contrat </p>
<p style="margin-top:-15px"> De fait, le prestataire s’engage à fournir une formation adaptée aux attentes et obtenir la<br/>
satisfaction du client.</p>


</div>
<img src="https://raw.githubusercontent.com/azzouzisirin/application_victis/main/footerContratForma_3.png" width="97%" height="120px" style="margin-top:10px"/>
<br/>
<img src="https://raw.githubusercontent.com/azzouzisirin/application_victis/main/footer.png" width="100%" height="120px" style="margin-top:-20px;margin-left:-40px"/>
<div  class="pdfConcension"> 
<h5 style="margin-left:-5px;margin-top:5px"> Clause 2 : Cotisations sociales et fiscales</h5>
<p style="margin-top:-35px">Le prestataire reconnaît s'acquitter de toutes les cotisations sociales et fiscales ainsi que <br/>
des assurances nécessaires a l'exercice de ses fonctions professionnelles.  </p>
<h5 style="margin-left:-5px;margin-top:18px">Clause 3 : Confidentialité </h5>
<p style="margin-top:-35px"> Le prestataire s'engage à ne pas divulguer, pendant et après l'exercice de la formation, <br/>
les renseignements relatifs aux activités, aux clients et produits de ENGINEERING <br/>
CONCEPT dont iL aura connaissance au cours de l'exercice de la prestation. <br/>
De plus il s'engage à maintenir confidentielle toute information et tout savoir-faire <br/>
transmis par ENGINEERING CONCEPT ou, le client dans le cadre du contrat. </p>
<h5 style="margin-left:-5px;margin-top:18px"> Clause 4 : Materials et documents mis a disposition</h5>
<p style="margin-top:-35px">Les matériels et documents CURSUS confies au prestataire pour l'exécution de la
prestation restent la propriété de ENGINEERING CONCEPT.
Les équipements fournis pour la durée de la prestation seront restitués en état
fonctionnement.
Toute anomalie de fonctionnement constatée durant l'exécution de la prestation sera
immédiatement signalée au responsable logistique ENGINEERING CONCEPT. </p>
<h5 style="margin-left:-5px;margin-top:18px"> Clause 5 : Tenue vestimentaire</h5>
<p style="margin-top:-35px"> Une tenue correcte vestimentaire doit être adaptée aux missions de formation.</p>
<h5 style="margin-left:-5px;margin-top:22px">Clause 6 : Horaires</h5>
<p style="margin-top:-35px"> Le premier jour de prestation, le prestataire s'engage à être présent sur le site <br/>
d'intervention au moins ½ heure à l'avance de l'horaire prévue soit 8H30.
 </p>
<h5 style="margin-left:-5px;margin-top:18px">Clause 7 : Non concurrence </h5>
<p style="margin-top:-35px">
Le prestataire s'engage a ne pas démarcher commercialement les clients de la société <br/>
ENGINEERING CONCEPT pendant et après l'exercice de la prestation. <br/>
Le non-respect de cette clause est considéré comme un acte de concurrence déloyale. <br/>
ENGINEERING CONCEPT, dans ce cas, se réserve la possibilité de recours devant le <br/>
tribunal compétent - Tribunal de Tours.

</p>
<h5 style="margin-left:-5px;margin-top:18px"> Clause 8 : Résiliation du contrat</h5>
<p style="margin-top:-35px"> En cas d’annulation totale ou partielle de la formation par le prestataire à moins de 10<br/>
jours avant le début de l’action de formation pour un autre motif que la force majeure<br/>
dûment reconnue, le présent contrat de prestation est résilié selon les modalités<br/>
financières suivantes:  </p>
<p style="margin-top:-15px;margin-left:40px"> 
- Règlement des prestations effectivement dispensées au prorata temporis.<br/>
- Remboursement des frais engagés pour la formation (location salle, matériel, frais de<br/>
    restauration …).
</p>
</div>
<img src="https://raw.githubusercontent.com/azzouzisirin/application_victis/main/footerContratForma_4.png" width="97%" height="120px" style="margin-top:2px"/>
<br/>
<img src="https://raw.githubusercontent.com/azzouzisirin/application_victis/main/footer.png" width="100%" height="120px" style="margin-top:-20px;margin-left:-40px"/>
<div  class="pdfConcension"> 
<p style="margin-top:-15px;margin-left:40px"> - Remboursement de la perte de Chiffre d’Affaires associée à cette annulation</p>
<p style="margin-top:-15px">
En cas de report total ou partiel de la formation par le commanditaire, l’Organisme de <br/>
Formation ou le prestataire, la partie à l’origine de ce report s’engage à proposer, dans <br/>
les meilleurs délais, une session de substitution. </p>
<p style="margin-top:-15px">La partie à l’origine de ce report devra rembourser à l’Organisme de Formation, les frais<br/>
engagés pour la formation (location de salle, de matériel, frais de restauration, …).</p>
<p style="margin-left:-20px;margin-top:18px"><span> Clause 9 : Conditions de règlement des prestations</span> 45 jours à réception de facture.</p>
<h5 style="margin-left:-20px;margin-top:18px">Clause 10 : En cas de litige    </h5>
<p style="margin-left:-10px;margin-top:-30px"> Si une contestation ou un différend ne peut être réglé à l’amiable, le Tribunal de
Commerce de Tours sera le seul compétent pour régler le litige. </p>
 
<p style="margin-left:-25px;margin-top:70px">Nous vous prions de nous retourner un exemplaire du présent document dûment approuve,<br/>
daté et signé indiquant votre accord avec les conditions mentionnées ci-dessus.</p>

<p style="margin-left:-5px;margin-top:30px">
Ce contrat sera validé lors du retour signé et paraphé sur l'ensemble du document, y compris
la fiche de présentation. </p>

<p style="margin-left:-5px;margin-top:30px">Fait à Tours, le  ${`${today.getDate().toString().padStart(2, '0')}/${(today.getMonth() + 1).toString().padStart(2, '0')}/${today.getFullYear()}`}  </p>
<p style="margin-left:-5px;margin-top:10px">  En deux exemplaires originaux dont un pour chacune des parties
</p>
<div class="blocUne">
<div class="lefthaut" style="width:500px">
<br/>
<p style="margin-top:45px;font-size:19px"> Pour le prestataire :</p><br/>
<p style="margin-top:5px;font-size:19px"> (Nom / Prénom et qualité du représentant) </p>
<p style="margin-top:5px;font-size:19px">  ….............................................</p><br/>
<p style="font-size:17px;margin-top:5px;font-size:19px">Paraphes, « Lu et approuvé », cachet du bénéficiaire
</p>
      </div>
<div class="rigthhaut"><img src="https://raw.githubusercontent.com/azzouzisirin/application_victis/main/signiature.png" width="310px" height="200px" style="margin-top:70px;" /></div>
</div>


</div>
</div>
<img src="https://raw.githubusercontent.com/azzouzisirin/application_victis/main/footerContratForma_5.png" width="97%" height="120px" style="margin-top:90px"/>

</body>
</html>
    
    `;
};