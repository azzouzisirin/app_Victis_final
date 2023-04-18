module.exports = ({ RaisonClient,prixNet,codeVilleFormation,nomUtilisateur,rythme,tva,categFormation,DateFinFormation,prixTva,numbstage,lieuFormation,duree,DateDebut,typeFormation,nomClient,prixGlobal, NumDevis, numSession, adress_1Client,adress_2Client,CodePostalClient,emailClient,numClient ,portableClient,nomFormation}) => {
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
    .container{
        margin-left: 5px;
        margin-Top:-20px;
        width: 97%;
       
    }
    .blocUne{
        display: flex;
        margin-left:5px;
    }
        .lefthaut{
            flex: 1;
            float:left;
       
            font-family: sans-serif;
        }
        .rigthhaut{
            flex: 1;
        }
        span{
            font-weight: 700;
            margin-left:4px;
            font-size: 20px;

        }
         h5{
            text-decoration: underline;
            font-size: 20px;
        }
        th{
            text-align: left;
            font-size: 18px;
            height:30px;
        }
        .centerDiv{
            margin-top: 100px;
          
        }
        .divdeux{
            display: flex;

        }
        td{
            font-size: 18px;

        }
        .divdeux_un{
            flex: 1;

        }
        .divdeux_deux{
            flex: 1; 

        }
     p{
        font-family:Arial;
        font-size:17px;
     }
     .divpage2 {
        margin-left:15px;
     }
        .divpage2 p{
            margin-top: 1px;
            font-size:8px;
            margin-bottom:1px;
            margin-right:10px;
           
        }
        .divpage2 h6{
            margin-bottom: 0px;
            margin-top: 0px;
            font-size: 9px;
        } 
        .divpage2  h4{
         margin-bottom: 0px;
         font-size: 11px;
         margin-top: 0px;
     }
        .divpageun{
            flex: 1;
        }
        .divpagedeux{
            flex:1;
        
            
        }
      
    </style>
</head>
<body>
    <div class="container" > 
   
        <div class="blocUne">    
     <div class="lefthaut">
       <img src="https://raw.githubusercontent.com/azzouzisirin/application_victis/main/logo.png" alt="engineering"/>
<h4 style="margin-top:-7px;margin-left:18px" >Engineering Concept Formation</h4>
     <p style="margin-top:-13px;margin-left:18px">8 rue Honoré de Balzac </p>
     <p style="margin-top:-12px;margin-left:18px">37000 Tours </p>
<p style="margin-top:1px;margin-left:18px">N° de Siret : 501 944 730 000 16 </p>
<p style="margin-top:-12px;margin-left:18px">N° de déclaration d'activité : 24 37 03580 37 </p>
<p style="margin-top:25px;margin-left:18px"> Session N° :  <span>  ${numSession}</span> </p>

</div>
<div class="rigthhaut">
   <div style="margin-left:650px; margin-top:60px"><h4 style=" font-size:24px"> Devis N° ${NumDevis} </h4>
    <p style="margin-left:10px; margin-top:-30px;">Edité le : ${`${today.getDate().toString().padStart(2, '0')}/${(today.getMonth() + 1).toString().padStart(2, '0')}/${today.getFullYear()}`}    </p> </div> 

    <div style="  border: 4px solid rgb(148, 17, 214);    width: 350px;margin-left:510px;height: 170px; border-radius: 40px ; margin-top: 30px; padding-left: 35px;">
       <h2>${RaisonClient}</h2>
       <p>${adress_1Client} </p>
       <p>${adress_2Client} </p>

       <p>${CodePostalClient} </p>

    </div>
</div>
</div>
<br/>
      <div style="width:90%;margin-left:30px; background:white"> 
<table style="background:white; margin-left:-10px;" > 
<tr   >
<th style="width:950px ;text-decoration: underline; font-size: 20px; " > Chargé d'affaire : </th>
<th style="width:600px ;text-decoration: underline; font-size: 20px;" > A l'attention de :</th>
</tr>
<tr>
<td > ${nomUtilisateur}
    <br/> E-mail : formation@engineering-concept.fr
    <br/>Portable : 06 82 28 79 74
</td>
    <td >
    ${nomClient}
        <br/>E-mail : ${emailClient}
        <br/>Tél. : ${numClient}
        <br/>Portable : ${portableClient}


    </td>
</tr>

</table>
        </div>
        <div class="divdeux" > 
   
<div class="divdeux_un">  
<table style="margin-top:20px;margin-left:28px;"> 
  <tr>
   <th style="height: 45px;">Intitulé de l'action de formation :</th> 
  </tr>
  <tr style="height: 25px;">
    <th >Rythme de formation : </th> 
    <td>${rythme} </td>
   </tr>
   <tr style="height: 25px;">
    <th >Modalités de l'organisme :  </th> 
    <td>${typeFormation}</td>
   </tr>
   <tr style="height: 25px;">
    <th>Date de début de formation : </th> 
    <td>${DateDebut} </td>
   </tr>
   <tr style="height: 25px;">
    <th>Durée de la formation :  </th> 
    <td>${duree}  </td>
   </tr>
   <tr style="height: 25px;">
    <th> Lieu de la formation : </th> 
    <td>${lieuFormation} </td> 
   </tr>
   <tr style="height: 25px;">
   <th>  </th> 
   <td>${codeVilleFormation} </td> 
  </tr>
</table>
</div>
<div  class="divdeux_deux" style="margin-left: 570px;margin-top:-245px">

  <h1 style="margin-left:-80px"  > ${nomFormation} - ${categFormation} </h1>
  <table style="margin-top:82px" >
    <tr style="height: 25px;">
        <th>Date de fin de formation : </th>
        <td> ${DateFinFormation}   </td>
    </tr>
    <tr style="height: 25px;">
        <th> Nombre de Stagiaires : </th>
        <td> ${numbstage}</td>
    </tr>
  </table>

</div> 
         </div>
       <div class="centerDiv" >

<table  style="margin-left:30px ;margin-top:-70px;" >
    <tr  > 
        <th style=" width: 650px; border:solid;"> Désignation        </th>
        <th style="width: 80px; border:solid;text-align: center;"> Total HT</th>
    </tr>
    <tr  >
        <td style=" width: 700px; border:solid;">
 
        
        <table>
          <tr>
            <th > Frais pédagogiques :</th>
          </tr>  
          <tr>
            <th>Support de formation :</th>
            <td>Fourni </td>
          </tr>
          <tr>
            <th> Fourniture et matériel pédagogique : </th>
            <td>à la charge du client
                (Salle de formation, ordinateur, Vidéo projecteur ...)

                </td>
          </tr>
        </table>
        <br/>                  
        <br/>  <br/>
        </td>
        <td style=" width: 140px; border:solid;text-align: center;"> <p style="margin-top:-82px"> ${prixGlobal} €</p></td>
      
    </tr>
</table>
<table style=" margin-left: 30px;" >
    <tr>
        <th style=" width: 550px;height:10px;"> Pour le client (signature précédée de la mention : Lu et </th>
        <td style=" width: 160px;"> Total soumis à TVA</td>
        <td>${prixGlobal} EUR </td> 
    </tr>
    <tr>
        <th>approuvé, bon pour accord)  </th>
        <td> Montant TVA (${tva}%)</td>
        <td> ${prixTva} EUR</td>
    </tr>
    <tr>
        <th> </th>
        <th>Net à payer </th>
        <th>${prixNet} EUR</th>
    </tr>
</table> 
        </div>
         <div style=" margin-left: 30px;">
    
    <p> <span style=" font-size: 15px;" >Engineering Concept Formation  </span>  </p> 
     <p style=" font-size: 15px;margin-left: 5px;"> est un organisme enregistré sous le N° 24 37 03580 37    </p>
     <img src="https://raw.githubusercontent.com/azzouzisirin/application_victis/main/logonavbar.png" width="600px" height="140px" style="margin-left: 30px;"/><br/>
     <img src="https://raw.githubusercontent.com/azzouzisirin/application_victis/main/logonavbar2.png" width="800px" height="100px" style="margin-left: 8%;"/>
          </div>
           <br/> 
       <h2 style="text-align: center;"> Conditions Générales de Vente : ENGINEERING CONCEPT </h2>
           <div class="divpage2" >
<div  style="width:430px;float:left;margin-left:25px">
   <h4> I. Dispositions générales</h4>
   <h6>1.1. Acceptation des conditions générales  </h6>
   <p>Le Client déclare avoir pris connaissance des Conditions Générales de vente et les avoir acceptées sans réserves avant de
    passer commande, ce qu’il matérialise en retournant la proposition commerciale et/ou la convention de formation dûment(s)
    complétée(s) et signée(s). De ce fait, le Client renonce à se prévaloir de tout document contradictoire et, notamment, ses
    propres conditions générales d'achat, qui seront inopposables à ENGINEERING CONCEPT, même s'il en a eu connaissance. La
    signature de la proposition commerciale vaut prise de connaissance des prérequis nécessaires pour suivre la formation
    considérée.  </p>
    <h6>1.2. Domaine d'application  </h6>
    <p>Ces conditions générales de Vente doivent obligatoirement être retournées paraphées et signées par le CLIENT avant le
        début de la prestation réalisée par ENGINEERING CONCEPT. Le CLIENT engage la société ENGINEERING CONCEPT en
        retournant sous huitaine un exemplaire signé et portant son cachet commercial. A la demande du CLIENT la société
        ENGINEERING CONCEPT lui fait parvenir en double exemplaire une convention de formation professionnelle telle que prévue
        par la loi Conformément à la réglementation en vigueur, ENGINEERING CONCEPT se réserve le droit de déroger à certaines
        clauses des présentes Conditions Générales de Vente, en fonction des négociations menées avec le CLIENT, par
        l'établissement de la convention La nullité d'une clause contractuelle n'entraîne pas la nullité des présentes Conditions
        Générales de Vente.  </p>
    <h6>1.3. Dispositions contractuelles</h6>
    <p> La nullité d'une clause contractuelle n'entraîne pas la nullité des présentes Conditions Générales de Vente.     </p>
   <h4> II. Description des services commandés </h4>
   <p> La prestation attendue donne lieu à l'établissement d'une proposition commerciale descriptive des travaux à exécuter
    précisant leur nature et leur objet. Le CLIENT doit obligatoirement retourner signée la proposition commerciale. Une fois le
    document signé renvoyé à ENGINEERING CONCEPT toute modification demandée par le CLIENT sera subordonnée à
    l’acceptation expresse et écrite de ENGINEERING CONCEPT. </p>
   <h4> III. Prix et conditions de paiement </h4>
   <h6>3.1. Détermination du prix </h6>
<p> 
    Tous nos prix sont indiqués hors taxes. Ils sont à majorer de la TVA au taux en vigueur. Sauf mention contraire les prix ne
    comprennent pas les frais de déplacement et de bouche des stagiaires. En revanche ils comprennent les frais de déplacement
    et de bouche du formateur. <span style="color: red; font-size:8px;" >Toute formation commencée est due en totalité </span>. Les prestations de services donnent lieu à
    l'établissement d'une proposition commerciale estimative de prix définitif fixé à partir d'un décompte détaillé, en quantité et
    en prix, de chaque prestation. Le prix Toutes Taxes Comprises n’est donc mentionné dans la proposition commerciale et/ou
    la convention de formation qu’à titre indicatif. Le prix ne deviendra ferme et définitif qu’à compter de la validation de la
    proposition commerciale par le CLIENT et ENGINEERING CONCEPT. Cette validation se matérialisera par le retour de la
    proposition commerciale, contenant le prix unitaire détaillé par prestation, signée par le CLIENT (avec apposition du cachet
    commercial) avec la mention manuscrite « BON POUR ACCORD dont ENGINEERING CONCEPT en accusera réception par mail
    et/ou télécopie
</p>
<h6>3.2. Prix, Facturation, Règlement </h6>
<p>Les factures sont payables à l’ordre de la société ENGINEERING CONCEPT à la fin de la prestation. Pour le Client personne
    physique les factures sont payables en totalité le jour de la formation. Toutefois, un acompte de 30% (Trente pour cent) doit
    être OBLIGATOIREMENT versé à la signature de la convention, c’est-à-dire dès l’acceptation de la proposition commerciale.
    Cet acompte restera acquis à ENGINEERING CONCEPT si le CLIENT renonce à la prestation. Chaque prestation donne lieu à
    l’établissement d’une facture au nom du CLIENT. Le solde du prix devra alors être réglé à réception de ladite facture. La
    facture est établie en double exemplaire dont un est adressé au CLIENT.  </p>
<h6>3.3. Règlement par un OPCA</h6>
<p>En cas de règlement de la prestation pris en charge par l’Organisme Paritaire Collecteur Agrée (OPCA) ou un Opérateur de
    Compétences (OPCO) dont il dépend, il appartient au CLIENT : -faire une demande de prise en charge avant le début de la
    formation et de s’assurer l’acceptation de sa demande, - indiquer explicitement sur la convention la prise en charge par
    l’OPCA et transmettre une copie de l’attestation de prise en charge à ENGINEERING CONCEPT, - s’assurer du bon paiement
    de la prestation En cas de paiement partiel du montant de la formation par l’OPCA le solde sera facturé au CLIENT. Si l’OPCA
    n’a pas réglé ENGINEERING CONCEPT dans un délai d’un mois à compter de la fin de la prestation, le CLIENT sera facturé de la
    totalité du coût de la prestation. </p>
<h6> 3.4. Règlement par la Caisse des Dépôts et Consignes</h6>
<p>Dans le cas d’un financement par la Caisse des Dépôts et Consignes dans le cadre d’une formation CPF, il appartient au
    CLIENT de s’assurer du bon paiement de la prestation. En cas de paiement partiel du montant de la formation par la Caisse
    des Dépôts et Consignes, le solde sera facturé directement au CLIENT. Si la Caisse des dépôts et consignes n’a pas réglé
    ENGINEERING CONCEPT dans un délai d’un mois à compter de la fin de la prestation, le CLIENT sera facturé de la totalité du
    coût de la prestation. En cas de l’absence du CLIENT à la formation, un montant de 30% de la valeur totale de la formation
    sera facturé directement à ce dernier. </p>
<h6> 3.5. Pénalités de retard</h6>
<p> En cas de retard de paiement seront applicables de plein droit des intérêts de retard au taux de 12 %. Ses intérêts seront
    acquis à ENGINEERING CONCEPT sans aucune formalité ni aucune mise en demeure préalable et sans préjudice de tout autre
    action que ENGINEERING CONCEPT serait en droit d’intenter, à ce titre, à l’encontre du CLIENT. Pour les clients personne
    morale (entreprises) conformément à l’article L 441-6 du Code de Commerce une indemnité forfaitaire pour frais de
    recouvrement d’un montant de 40 € sera également automatiquement appliquée pour tout retard de paiement. En cas de
    non-paiement, même partiel, d'une facture venue à échéance, le ENGINEERING CONCEPT se réserve le droit de suspendre
    toute formation en cours et/ou à venir. </p>
<h4> IV. Conclusion du contrat </h4>
<h6>4.1. Caractère définitif de la commande </h6>
<p>Le contrat n'est définitivement conclu qu'après réception de la proposition commerciale et/ou de la convention de formation
    dûment(s) complétée(s) (revêtue de la mention "Bon pour accord", paraphée, tamponnée et signée par le client, si et
    seulement si ce document nous parvient 4 semaines avant la date d’exécution de la prestation. L'acceptation de la part
    d’ENGINEERING CONCEPT est conditionnée par le règlement d'un acompte dans les conditions prévues ci-après. L’absence de
    l’une ou l’autre de ces conditions autorise ENGINEERING CONCEPT à suspendre son engagement de formation. La
    proposition commerciale précise explicitement la formation concernée selon le modèle fourni dans le catalogue
    d’ENGINEERING CONCEPT : intitulé et référence de la formation, date, lieu, durée, nombre et noms des participants, coût de
    la prestation et adresse de facturation. Afin de préserver la qualité de la formation, le nombre maximum de participants
    pourra être limité par ENGINEERING CONCEPT. Dans le cas où le nombre d'inscrits serait supérieur à celui préconisé par
    ENGINEERING CONCEPT, une seconde session pourra être organisée dans les mêmes conditions financières. La proposition
    commerciale a une durée de validité de 15 jours à compter de son émission. Une fois la proposition commerciale retournée
    signée par le Client, ENGINEERING CONCEPT fait parvenir au client, en double exemplaire, une convention de formation
    professionnelle continue telle que prévue par la loi. Le client s'engage à retourner dans les plus brefs délais à ENGINEERING
    CONCEPT un exemplaire dûment paraphé signé et portant son cachet commercial. En cas d'annulation de la commande par
    le Client après signature de la proposition commerciale et/ou de la convention, pour quelque raison que ce soit, l'acompte
    versé à la commande, tel que défini à l'article « 3.2 Conditions de paiement ” des présentes Conditions Générales de Vente
    sera de plein droit acquis à ENGINEERING CONCEPT et ne pourra donner lieu à un quelconque remboursement. Tout
    désistement du Client, pour quelque motif que ce soit intervenant après le commencement de la formation, entraînera
    l’obligation pour lui de s’acquitter de la totalité du coût de la formation qui deviendra immédiatement exigible. Egalement, le
    coût de la formation sera dû en totalité en cas d’absence, totale ou partielle, d’un ou plusieurs participants, pour quelque
    motif que ce soit </p>
    <h6> 4.2. Modification de la commande    </h6>
    <p> Les commandes étant définitives et irrévocables, toute demande de modification du service commandé par le client doit être
        soumise à l'acceptation d’ENGINEERING CONCEPT. Toute prestation commandée est due en entier. De même, en cas de
        demande particulière du Client concernant les conditions de fourniture des prestations, dûment acceptées par écrit par
        ENGINEERING CONCEPT, les coûts liés feront l'objet d'une facturation spécifique complémentaire, sur proposition
        commerciale préalablement accepté par le Client. A défaut de réserves ou réclamations expressément émises par le Client
        lors de la réalisation des prestations, celles-ci seront réputées conformes à la commande, en quantité et qualité.
        </p>
    <h4>V. Exécution du contrat     </h4>
    <h6>5.1. Conformité     </h6>
    <p>Les engagements d’ENGINEERING CONCEPT constituent une obligation de moyen. Les prestations seront exécutées dans le
        strict respect des règles professionnelles applicables à ENGINEERING CONCEPT ainsi, le cas échéant, que conformément aux
        conditions de la convention qui a été signée entre les parties.
         </p>
</div>
<div style="width:430px;float:right;;margin-right:25px">
    <h6> 5.2 Obligation de confidentialité     </h6>
    <p>ENGINEERING CONCEPT s'engage à observer et faire observer la plus stricte confidentialité, tant pendant la durée du
        présent contrat qu'après son expiration, à l'égard des Informations auxquelles il a pu avoir accès. Il est entendu par «
        Informations » les documents et informations orales de toute nature (commerciaux, comptables, marketing, etc.) ou
        toute information relative au client, ses filiales ou sociétés le contrôlant directement ou indirectement (au sens de
        l'article L. 233-3 du code de commerce), qui a été ou sera communiquée et échangée à l'occasion de la réalisation des
        prestations, de quelque manière que ce soit, à quelque instant que ce soit, par écrit, oralement ou de toute autre
        manière. De même, ENGINEERING CONCEPT s'engage à ne pas divulguer ni exploiter, sous quelque forme que ce soit,
        pour son compte ou pour celui d'un tiers, directement ou indirectement, tout ou partie des éléments susvisés.
        ENGINEERING CONCEPT veillera, le cas échéant, au respect de cet engagement de confidentialité par l'ensemble de ses
        collaborateurs. Il est convenu qu’ENGINEERING CONCEPT est autorisé à communiquer autour des prestations
        effectuées pour le client à des fins promotionnelles à l'exception des informations que le client aura désignées comme
        stratégiques et confidentielles.  </p>
        <h6>5.3. Obligation relative à la propriété intellectuelle de l'oeuvre réalisée        </h6>
        <p> ENGINEERING CONCEPT conserve l'intégralité de ses droits d'auteur sur le contenu des formations et sur la
            documentation fournie aux participants. Toute reproduction, modification ou diffusion à des tiers de tout ou partie de
            la documentation est strictement interdite. ENGINEERING CONCEPT accorde au client sans limitation géographique ni
            temporelle, le droit utiliser de manière interne et pour la durée de protection par le droit d'auteur, les éléments conçus
            par ENGINEERING CONCEPT et intégrés dans ses travaux. Le client ne dispose d'aucun droit pour distribuer,
            commercialiser, et plus généralement de mettre à disposition ou de concéder l'utilisation de ces mêmes éléments à des
            tiers sans l'accord d’ENGINEERING CONCEPT. <br/>
            Le client ne pourra faire mention ou usage du nom, de la dénomination, des marques et logos ou autres appellations,
            commerciales ou non, d’ENGINEERING CONCEPT sans accord préalable et écrit de ce dernier. ENGINEERING CONCEPT
            pourra faire usage du nom, de la dénomination, des marques et logos du client en cours de contrat dans la mesure de
            ce qui est strictement nécessaire à l'exécution des prestations. </p>
            <h4> VI. Inexécution du contrat             </h4>
           <h6> 6.1. Responsabilité d’ENGINEERING CONCEPT        </h6>
           <p> La responsabilité d’ENGINEERING CONCEPT ne peut pas être engagée en cas d'inexécution ou de mauvaise exécution de
            ses obligations qui est due, soit au fait du client, soit au fait insurmontable et imprévisible d'un tiers au contrat, soit à un
            cas de force majeure. La responsabilité d’ENGINEERING CONCEPT pour tout manquement, négligence ou faute,
            entraînant un préjudice pour le client à l'occasion de l'exécution des prestations, sera plafonnée au montant des
            honoraires versés au titre des prestations mises en cause. Ce montant couvre l'ensemble des réclamations de toute
            nature (intérêts et frais inclus) et ce, quel que soit le nombre d'actions, de fondements invoqués ou de parties aux
            litiges. La responsabilité d’ENGINEERING CONCEPT ne pourra en aucun cas être engagée en cas d'utilisation des
            résultats des prestations, pour un objet ou dans un contexte différent de celui dans lequel il est intervenu, de mise en
            oeuvre erronée des recommandations ou d'absence de prise en compte des réserves d’ENGINEERING CONCEPT et/ou
            du formateur. </p>
            <h6>6.2. Obligations du client            </h6>
            <p>Afin de faciliter la bonne exécution des prestations, le client s'engage : - à fournir à ENGINEERING CONCEPT des
                informations et documents complets, exacts et dans les délais nécessaires ; - à prendre les décisions de validation dans
                les délais requis par ENGINEERING CONCEPT et plus généralement à répondre aux questions d’ENGINEERING CONCEPT
                dans les délais demandés par ENGINEERING CONCEPT; - si nécessaire, à désigner un correspondant investi d'un pouvoir
                de décision, - à s'assurer pour les conséquences de sa responsabilité civile au cas où elle serait engagée à la suite d'un
                accident causé au personnel, aux partenaires ou au matériel d’ENGINEERING CONCEPT.  </p>
                <h4> VII. Résolution du contrat et clause résolutoire                 </h4>
         <p>En cas de manquement par le client à l'une quelconque de ses obligations et quinze jours après mise en demeure
            d'avoir à exécuter cette obligation, ENGINEERING CONCEPT peut demander la résolution du contrat sans préjudice de
            dommages et intérêts. La résolution du contrat sera prononcée par lettre recommandée avec demande d'avis de
            réception et sera acquise de plein droit sans formalité judiciaire.  </p>
            <h4> VIII. Contrat de sous-traitance             </h4>
            <p>ENGINEERING CONCEPT se réserve le droit de céder tout ou partie de l'exécution des prestations à des prestataires tiers
                répondant aux mêmes exigences de qualification.  </p>
            <h4>IX. Non-sollicitation de personnel             </h4>
            <p>Pendant la durée des prestations et pendant une période d'un an après son achèvement, le client ne pourra pas
                solliciter ou tenter de débaucher (ou aider quelconque autre personne à solliciter ou tenter de débaucher) un
                quelconque collaborateur d’ENGINEERING CONCEPT avec lequel il aura eu des contacts dans le cadre de l'exécution des
                prestations. En cas de violation, le client sera redevable envers ENGINEERING CONCEPT, à titre de clause pénale d'une
                indemnité égale à un an du dernier salaire brut de la personne ainsi débauchée. Il en sera de même avec tout
                collaborateur du sous-traitant ou le sous-traitant lui- même. S’agissant du sous-traitant uniquement, en cas de violation,
                le client sera redevable envers ENGINEERING CONCEPT, à titre de clause pénale d'une indemnité égale au chiffre
                d’affaire sous-traité avec ce dernier pendant l’année qui a précédé la violation de la clause.  </p>
                <h4>X. Renonciation                 </h4>
                <p>Le fait pour ENGINEERING CONCEPT de ne pas se prévaloir à un moment donné de l'une quelconque des clauses des
                    présentes ne peut valoir renonciation à se prévaloir ultérieurement de ces mêmes clauses.  </p>
                    <h4>XI. Règlement des litiges                     </h4>
            <p>L'exécution des prestations est soumise au droit français. ENGINEERING CONCEPT recherchera une solution amiable à
                tout différend qui pourrait naître de l'interprétation de ses engagements ou de l'exécution de ses prestations,
                préalablement à toute action en justice. Tous les litiges auxquels les prestations pourraient donner lieu, concernant tant
                leur validité, leur interprétation, leur exécution, leur résiliation, leurs conséquences et leurs suites seront soumis à la
                compétence exclusive du tribunal de Commerce de Tours, quel que soit le siège ou la résidence du Client, nonobstant
                pluralité de défendeur ou appel en garantie. Cette clause attributive de compétence ne s'appliquera pas au cas de litige
                avec un Client non-professionnel pour lequel les règles légales de compétence matérielle et géographique
                s'appliqueront. La présente clause est stipulée dans l'intérêt d’ENGINEERING CONCEPT qui se réserve le droit d'y
                renoncer si bon lui semble. L'élection de domicile est faite par ENGINEERING CONCEPT à son siège social au 8, rue
                Honoré de Balzac 37000 Tours.  </p>
                <img src="https://raw.githubusercontent.com/azzouzisirin/application_victis/main/sigClient.png" width="90%"/>
</div>

       </div>


<img src="https://raw.githubusercontent.com/azzouzisirin/application_victis/main/logonavbar2.png" width="800px" height:"65px" style="margin-left: 9%;margin-top:70px;"/>

</div>  
</body>
</html>
    
    `;
};