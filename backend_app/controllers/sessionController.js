const session = require('../models/Session');
const offre = require('../models/offre');
const pdfTemplateConvention = require("../documents/Convention")
const pdfTemplateOffre = require("../documents/offre")
const pdfTemplateConvocation = require("../documents/Convocation")
const pdfTemplateFeuilEmargement = require("../documents/FeuilleEmargement")
const pdfCertificatRealisation = require("../documents/CertificatRealisation")
const pdfTemplateFeuilleEvaluation = require("../documents/FeuilleEvaluation")
const pdfTemplateContratFormation = require("../documents/ContratFormation")
const pdfTemplateRapportFormateur = require("../documents/RapportFormateur")
const AdmZip = require('adm-zip');
const fsExtra = require('fs-extra')


const pdf = require('html-pdf')
const path = require('path')
const nodemailer = require('nodemailer')
const fs = require('fs')
const client = require('../models/Client');
const formation = require('../models/Formation');
const formateur = require('../models/Formateur');
const { $where } = require('../models/Session');

   function getsession(Session,Formation,Client,Formateur,Offre){
    var date1 = new Date(Offre.DateDebut); 
    var date2 = new Date();
    var etat =0
    var Difference_In_Time = date2.getTime() - date1.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
         if(Session.etatSession=="en attendant" && Difference_In_Days<21 ){
            etat=1
         }
   if(Session&&Formation&&Client&&Formateur&&Offre){
        const test={ 
            DifferenceDate:etat,
            id:Session.id,
            etatSession:Session.etatSession,
            session:Session.numSession, 
            nomFormation:Formation.designation+" - "+Formation.type,
             nomClient:Client.nom+" "+Client.prenom,
            tel:Client.tel, 
            dateDebut:Offre.DateDebut  ,
            dateFin:Offre.DateFin   ,
            nomFormateur:Formateur.nom,
            remarque:Offre.remarque,
            DureeJour:Offre.DureeJour
          
        }
 
       return(test)
    }else if(Session&&Client&&Formateur&&Offre){
        const test={ 
            id:Session.id,
            etatSession:Session.etatSession,
            DifferenceDate:etat,
            session:Session.numSession, 
             nomClient:Client.nom+" "+Client.prenom,
            tel:Client.tel, 
            dateDebut:Offre.DateDebut  ,
            dateFin:Offre.DateFin   ,
            nomFormateur:Formateur.nom,
            remarque:Offre.remarque,
            DureeJour:Offre.DureeJour
          
        }
 
       return(test)
    }else  if(Session&&Formation&&Client&&Offre){
        const test={ 
            id:Session.id,
            DifferenceDate:etat,
            etatSession:Session.etatSession,
            session:Session.numSession, 
            nomFormation:Formation.designation+" - "+Formation.type,
             nomClient:Client.nom+" "+Client.prenom,
            tel:Client.tel, 
            dateDebut:Offre.DateDebut  ,
            dateFin:Offre.DateFin   ,
            remarque:Offre.remarque,
            DureeJour:Offre.DureeJour
          
        }
  
       return(test)}
    else if(Session&&Formation&&Formateur&&Offre){
        const test={ 
            id:Session.id,
            etatSession:Session.etatSession,
            DifferenceDate:etat,
            session:Session.numSession, 
            nomFormation:Formation.designation+" - "+Formation.type,
            dateDebut:Offre.DateDebut  ,
            dateFin:Offre.DateFin   ,
            nomFormateur:Formateur.nom,
            remarque:Offre.remarque,
            DureeJour:Offre.DureeJour
          
        }
 
       return(test)
    }
}

exports.getAllSessions = async (req, res) => {
    try {
        const countSession = await session.find().count();      
        const Session = await session.find();
        const Offre = await offre.find();
    
        const sss=[]
        var Formation={}
        var Client={}
        var Formateur={}
        for(var i=0;i<countSession;i++){
            Offre[i].IdFormation?  Formation = await formation.findById(Offre[i].IdFormation): Formation  = {}
            Offre[i].IdClient?   Client = await client.findById(Offre[i].IdClient): Client = {}
            Offre[i].idFormateur?    Formateur = await formateur.findById(Offre[i].idFormateur):Formateur = {}
 
            sss[i]=getsession(Session[i],Formation,Client,Formateur,Offre[i])

        } 

        res.json(sss );    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error 
        });
    } 
};

 


exports.Register = async (req, res) => {
    try {
        const allSession = await  session.find().count();
      const id=allSession+1
 
        const newSession = await session.create({id,numSession:req.body.numSession,numDevis:req.body.numDevis});
        const newoffre = await offre.create({id});
 

        res.status(201).json({
            newSession,
            id
        });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    } 
};
exports.search = async (req, res) => {
    try {
        const { q } = req.query;
          var Session=[]      
          if(q){
            Session = await session.find({$or:[{numSession:{$regex:q}},{etatSession:{$regex:q}}]})

          }else{
            Session = await session.find()
          }
          const countSession =  Session.length;      
          const Offre = await offre.find();
      
          const sss=[]
          var Formation={}
          var Client={}
          var Formateur={}
          for(var i=0;i<countSession;i++){
              Offre[i].IdFormation?  Formation = await formation.findById(Offre[i].IdFormation): Formation  = {}
              Offre[i].IdClient?   Client = await client.findById(Offre[i].IdClient): Client = {}
              Offre[i].idFormateur?    Formateur = await formateur.findById(Offre[i].idFormateur):Formateur = {}
   
              sss[i]=getsession(Session[i],Formation,Client,Formateur,Offre[i])
  
          } 
  
          res.json(sss );  
  

    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    } 
   
};
exports.getSessionById = async (req, res) => {
    try {
        const Offre = await offre.findOne({id:req.params.id});
        const Session = await session.findOne({id:req.params.id});
        var Client={}
        var Formation={}

        Offre.IdClient?   Client = await client.findById(Offre.IdClient): Client = {}
        Offre.IdFormation?   Formation = await formation.findById(Offre.IdFormation): Formation = {}
        
        const test={  
            remarque:Offre.remarque,
            idSession:Session._id,
            numSession:Session.numSession,
            numDevis:Session.numDevis,
             typeFormation:Offre.typeFormation,
            designiationFormation :Offre.designiationFormation,
            nomClient:Client.prenom,
            titreClient:Client.titre,
            email:Client.email,
            filename:Formation.nomFichie, 
            RaisonSociale:Client.raisonSociale,
            selectedTypeFormation:Offre.TypeFormation,
            
        } 

        res.status(200).json(test);
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    } 
};
exports.getDonneOffre = async (req, res) => { 
    try {
        const Offre = await offre.findOne({id:req.params.id});
        const Session = await session.findOne({id:req.params.id});
        var Client={}
        const nomUtilisateur=req.params.nomUtilisateur
        Offre.IdClient?   Client = await client.findById(Offre.IdClient): Client = {}
        var ParcourCollectif=''
        Offre.ParcourCollectif==true? ParcourCollectif="Parcours collectif":ParcourCollectif=Offre.NbStage
 
        var date1=Offre.DateDebut.substring(8, 10)+"/"+Offre.DateDebut.substring(5, 7)+'/'+Offre.DateDebut.substring(0, 4)
        var date2=Offre.DateFin.substring(8, 10)+"/"+Offre.DateFin.substring(5, 7)+'/'+Offre.DateFin.substring(0, 4)
    
        const test={  
            numSession: Session.numSession,
            NumDevis: Session.numDevis,
            nomUtilisateur:nomUtilisateur,
            RaisonClient: Client.raisonSociale,
            adress_1Client: Client.adresse_1,
            adress_2Client: Client.adresse_2,
            CodePostalClient:Client.codeVille,
            emailClient: Client.email,
            numClient:Client.tel,
            nomClient:Client.titre+" "+Client.nom+" "+Client.prenom,
            portableClient:Client.portable,
            rythme:Offre.rythme,
            typeFormation :Offre.TypeFormation,
            DateDebut:date1,
            duree  :Offre.DureeJour+" jours, soit "+ Offre.DureeHeur +" heures",
            lieuFormation:Offre.lieuFormation,
            nomFormation :Offre.designiationFormation,
            categFormation:Offre.typeFormation,
            DateFinFormation :date2,
            numbstage :ParcourCollectif,
            prixGlobal:Offre.PrixTotal,
            tva:Offre.Tva,
            prixTva:Offre.PrixTVA,
            prixNet:Offre.prixNet,
            prixGlobal:Offre.PrixTotal,
          
          
        }

        res.status(200).json(test);
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};
exports.getDonneFormateur = async (req, res) => { 
    try {
        const Offre = await offre.findOne({id:req.params.id});
        const Session = await session.findOne({id:req.params.id});
        var Client={}
        var Formateur={}
        Offre.idFormateur?   Formateur = await formateur.findById(Offre.idFormateur): formateur = {}

        Offre.IdClient?   Client = await client.findById(Offre.IdClient): Client = {}
        var ParcourCollectif=''
        Offre.ParcourCollectif==true? ParcourCollectif="Parcours collectif":ParcourCollectif=Offre.NbStage
 
        var date1=Offre.DateDebut.substring(8, 10)+"/"+Offre.DateDebut.substring(5, 7)+'/'+Offre.DateDebut.substring(0, 4)
        var date2=Offre.DateFin.substring(8, 10)+"/"+Offre.DateFin.substring(5, 7)+'/'+Offre.DateFin.substring(0, 4)
    
        const test={  
            numSession: Session.numSession,
            nomFormateur:Formateur.titre+" "+Formateur.nom+" "+Formateur.prenom,
            raisonClient: Client.raisonSociale,
            nomFormation :Offre.designiationFormation +" - "+Offre.typeFormation,
            DateFin :date2,
            adress_1Formateur:Formateur.adresse_1,
            adress_2Formateur:Formateur.adresse_2,
            CodePostalFormateur:Formateur.codeVille,
            numTel:Formateur.tel,
            emailFormateur:Formateur.email,
            nombStagaire:ParcourCollectif ,
            DateDebut:date1,
            duree  :Offre.DureeJour+" jours, soit "+ Offre.DureeHeur +" heures",
            LieuFormation:Offre.lieuFormation,
            HeureFormation:Offre.HeureFormation ,
            totalPrix:Formateur.tva ,
            Prixtva:Formateur.fraisDeplaccement ,
            tarifHt: Formateur.tarifHt,
  
        }

        res.status(200).json(test);
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};
exports.getDonneDocument = async (req, res) => { 
    try {
        const Offre = await offre.findOne({id:req.params.id});
        const Session = await session.findOne({id:req.params.id});
        var Client={}
        var Formateur={}

        Offre.IdClient?   Client = await client.findById(Offre.IdClient): Client = {}
        Offre.idFormateur?   Formateur = await formateur.findById(Offre.idFormateur): Formateur = {}

        var ParcourCollectif=''
        Offre.ParcourCollectif==true? ParcourCollectif="Parcours collectif":ParcourCollectif=Offre.NbStage
 
        var date1=Offre.DateDebut.substring(8, 10)+"/"+Offre.DateDebut.substring(5, 7)+'/'+Offre.DateDebut.substring(0, 4)
        var date2=Offre.DateFin.substring(8, 10)+"/"+Offre.DateFin.substring(5, 7)+'/'+Offre.DateFin.substring(0, 4)
        
         const test={  
            nomFormation :Offre.designiationFormation +" - "+Offre.typeFormation,
            salarieStagaire:Client.raisonSociale,
            dateDebut:date1, 
            dateFin :date2,
            dureeFormation  :Offre.DureeJour+" jours, soit "+ Offre.DureeHeur +" heures",
            numSession:Session.numSession,
            nomFormateur:Formateur.titre+ " "+Formateur.nom +" "+Formateur.prenom,
            nomSociete: Client.titre+ " "+Client.nom +" "+Client.prenom,
            nomStagaire  :req.params.nomStagaire,
          
        }

        res.status(200).json(test);
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};
exports.getDonneFeuilEmagement = async (req, res) => { 
    try {
        const Offre = await offre.findOne({id:req.params.id});
        const Session = await session.findOne({id:req.params.id});
        var Client={}
        var Formateur={}
        Offre.IdClient?   Client = await client.findById(Offre.IdClient): Client = {}
        Offre.idFormateur?   Formateur = await formateur.findById(Offre.idFormateur): Formateur = {}
        var varDisplay=""
        Offre.ParcourCollectif==true? ParcourCollectif="Parcours collectif":ParcourCollectif=Offre.NbStage
        var date1=Offre.DateDebut.substring(8, 10)+"/"+Offre.DateDebut.substring(5, 7)+'/'+Offre.DateDebut.substring(0, 4)
        var date2=Offre.DateFin.substring(8, 10)+"/"+Offre.DateFin.substring(5, 7)+'/'+Offre.DateFin.substring(0, 4)
        var displaySig=["none","none","none","none","none","none","none","none","none","none"]
         var dateFormation=["","","","","","","","","",""]
         var stagaire=["","","","","","","","","",""]
         var dureeMatin=["","","","","","","","","",""]
         var dureeApreMidi=["","","","","","","","","",""]  
         var titreMatin=["","","","","","","","","",""]
         var titreApresMidi=["","","","","","","","","",""]
         Date.prototype.addDays = function(noOfDays){
            var tmpDate = new Date(this.valueOf());
            tmpDate.setDate(tmpDate.getDate() + noOfDays);
            return tmpDate;
        } 
        var myDate = new Date(Offre.DateDebut);  
        var liststa=Offre.listStagaire
       
     var a=''

   if(Number(Offre.DureeJour)>5 && liststa.length>5){
  
    varDisplay="flex"
    if(Offre.rythme=="En continu" ){ 
        for(var j=0;j<liststa.length;j++){
            stagaire[j]=liststa[j].titre + " "+liststa[j].nom+" "+liststa[j].prenom

        }
        for(var i=0;i<Number(Offre.DureeJour);i++ ){
         displaySig[i]="flex"

        dateFormation[i]=  myDate.addDays(i).getDate().toString().padStart(2, '0')+"/"+myDate.addDays(i).getMonth().toString().padStart(2, '0')+'/'+myDate.addDays(i).getFullYear()

     
        dureeMatin[i]="9h00 - 12h00"
        dureeApreMidi[i]="13h00 - 17h00"
        titreMatin[i]="Matin"
        titreApresMidi[i]="Après-midi"
  
       }             }
           
        if(Offre.rythme=="En discontinu" ){
            for(var j=0;j<liststa.length;j++){
                stagaire[j]=liststa[j].titre + " "+liststa[j].nom+" "+liststa[j].prenom

            }
            for(var i=0;i<Number(Offre.DureeJour);i++ ){ 
                var myDateFormation = new Date(Offre.CalendrieFormation[i].date);
                displaySig[i]="flex"
               dateFormation[i]=  myDateFormation.addDays(i).getDate().toString().padStart(2, '0')+"/"+myDateFormation.addDays(i).getMonth().toString().padStart(2, '0')+'/'+myDateFormation.addDays(i).getFullYear()

           
               dureeMatin[i]="9h00 - 12h00"
               dureeApreMidi[i]="13h00 - 17h00"
               titreMatin[i]="Matin"
               titreApresMidi[i]="Après-midi"
           
              }         
        }
   }
     
    if(Number(Offre.DureeJour)>5 && liststa.length<5){
        varDisplay="flex"
    if(Offre.rythme=="En continu" ){ 
        for(var j=0;j<liststa.length;j++){
            stagaire[j]=liststa[j].titre + " "+liststa[j].nom+" "+liststa[j].prenom

        }
        for(var i=0;i<Number(Offre.DureeJour);i++ ){
         displaySig[i]="flex"

        dateFormation[i]=  myDate.addDays(i).getDate().toString().padStart(2, '0')+"/"+myDate.addDays(i).getMonth().toString().padStart(2, '0')+'/'+myDate.addDays(i).getFullYear()

      
        dureeMatin[i]="9h00 - 12h00"
        dureeApreMidi[i]="13h00 - 17h00"
        titreMatin[i]="Matin"
        titreApresMidi[i]="Après-midi"
          }             }
           
        if(Offre.rythme=="En discontinu" ){
            for(var j=0;j<liststa.length;j++){
                stagaire[j]=liststa[j].titre + " "+liststa[j].nom+" "+liststa[j].prenom
                 stagaire[j+5]= stagaire[j]
            }
            for(var i=0;i<Number(Offre.DureeJour);i++ ){ 
                var myDateFormation = new Date(Offre.CalendrieFormation[i].date);
                displaySig[i]="flex"
                displaySig[i+5]="flex"
               dateFormation[i]=  myDateFormation.addDays(i).getDate().toString().padStart(2, '0')+"/"+myDateFormation.addDays(i).getMonth().toString().padStart(2, '0')+'/'+myDateFormation.addDays(i).getFullYear()

           
               dureeMatin[i]="9h00 - 12h00"
               dureeApreMidi[i]="13h00 - 17h00"
               titreMatin[i]="Matin"
               titreApresMidi[i]="Après-midi"
           
              }         
        }
    }



 if(Number(Offre.DureeJour)<=5 && liststa.length>5){
    varDisplay="flex"
    if(Offre.rythme=="En continu" ){ 
        for(var j=0;j<liststa.length;j++){
            stagaire[j]=liststa[j].titre + " "+liststa[j].nom+" "+liststa[j].prenom

        }
        for(var i=0;i<Number(Offre.DureeJour);i++ ){
         displaySig[i]="flex"

        dateFormation[i]=  myDate.addDays(i).getDate().toString().padStart(2, '0')+"/"+myDate.addDays(i).getMonth().toString().padStart(2, '0')+'/'+myDate.addDays(i).getFullYear()
        stagaire[i]=liststa[i].titre + " "+liststa[i].nom+" "+liststa[i].prenom

        displaySig[i+5]="flex"

        dateFormation[i+5]=  myDate.addDays(i).getDate().toString().padStart(2, '0')+"/"+myDate.addDays(i).getMonth().toString().padStart(2, '0')+'/'+myDate.addDays(i).getFullYear()
        stagaire[i+5]=liststa[i].titre + " "+liststa[i].nom+" "+liststa[i].prenom

        dureeMatin[i]="9h00 - 12h00"
        dureeApreMidi[i]="13h00 - 17h00"
        titreMatin[i]="Matin"
        titreApresMidi[i]="Après-midi"
        dureeMatin[i+5]="9h00 - 12h00"
        dureeApreMidi[i+5]="13h00 - 17h00"
        titreMatin[i+5]="Matin"
        titreApresMidi[i+5]="Après-midi"
       }             }
           
        if(Offre.rythme=="En discontinu" ){
            for(var j=0;j<liststa.length;j++){
                stagaire[j]=liststa[j].titre + " "+liststa[j].nom+" "+liststa[j].prenom

            }
            for(var i=0;i<Number(Offre.DureeJour);i++ ){ 
                var myDateFormation = new Date(Offre.CalendrieFormation[i].date);
                displaySig[i]="flex"
                displaySig[i+5]="flex"
               dateFormation[i]=  myDateFormation.addDays(i).getDate().toString().padStart(2, '0')+"/"+myDateFormation.addDays(i).getMonth().toString().padStart(2, '0')+'/'+myDateFormation.addDays(i).getFullYear()
               dateFormation[i+5]=  myDateFormation.addDays(i).getDate().toString().padStart(2, '0')+"/"+myDateFormation.addDays(i).getMonth().toString().padStart(2, '0')+'/'+myDateFormation.addDays(i).getFullYear()

           
               dureeMatin[i]="9h00 - 12h00"
               dureeApreMidi[i]="13h00 - 17h00"
               titreMatin[i]="Matin"
               titreApresMidi[i]="Après-midi"
               dureeMatin[i+5]="9h00 - 12h00"
               dureeApreMidi[i+5]="13h00 - 17h00"
               titreMatin[i+5]="Matin"
               titreApresMidi[i+5]="Après-midi"
              }         
        }
    }
     
    if( Number(Offre.DureeJour)<=5 && liststa.length<=5){
        varDisplay="none"

        if(Offre.rythme=="En continu" ){ 
            for(var j=0;j<liststa.length;j++){
                stagaire[j]=liststa[j].titre + " "+liststa[j].nom+" "+liststa[j].prenom
                stagaire[5+j]=stagaire[j]
            }
            for(var i=0;i<Number(Offre.DureeJour);i++ ){
             displaySig[i]="flex"

            dateFormation[i]=  myDate.addDays(i).getDate().toString().padStart(2, '0')+"/"+myDate.addDays(i).getMonth().toString().padStart(2, '0')+'/'+myDate.addDays(i).getFullYear()

        
            dureeMatin[i]="9h00 - 12h00"
            dureeApreMidi[i]="13h00 - 17h00"
            titreMatin[i]="Matin"
            titreApresMidi[i]="Après-midi"
           }             }
               
            if(Offre.rythme=="En discontinu" ){
                for(var j=0;j<liststa.length;j++){ 
                    stagaire[j]=liststa[j].titre + " "+liststa[j].nom+" "+liststa[j].prenom
    
                }
                for(var i=0;i<Number(Offre.DureeJour);i++ ){ 
                    var myDateFormation = new Date(Offre.CalendrieFormation[i].date);
                    displaySig[i]="flex"
                   dateFormation[i]=  myDateFormation.addDays(i).getDate().toString().padStart(2, '0')+"/"+myDateFormation.addDays(i).getMonth().toString().padStart(2, '0')+'/'+myDateFormation.addDays(i).getFullYear()
                  
               
                   dureeMatin[i]="9h00 - 12h00"
                   dureeApreMidi[i]="13h00 - 17h00"
                   titreMatin[i]="Matin"
                   titreApresMidi[i]="Après-midi"
                  }         
            }
    
    
 }







          const test={  
            numSession:Session.numSession,
            nomFormation :Offre.designiationFormation +" - "+Offre.typeFormation,
            dateDebut:date1,
            displaySig:displaySig,
            dateFormation:dateFormation,
            stagaire:stagaire,
            dureeMatin:dureeMatin,
            varDisplay:varDisplay,
            dureeApreMidi:dureeApreMidi,
            titreMatin:titreMatin,
            titreApresMidi:titreApresMidi,
            dateFin :date2,
            dureFormation  :Offre.DureeJour+" jours, soit "+ Offre.DureeHeur +" heures",
            LieuFormation:Offre.lieuFormation ,
             }

        res.status(200).json(test);
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};
exports.getDonneConvention = async (req, res) => {
    try {
        const Offre = await offre.findOne({id:req.params.id});
        const Session = await session.findOne({id:req.params.id});
        var Client={}
        Offre.IdClient?   Client = await client.findById(Offre.IdClient): Client = {}
        var ParcourCollectif=''
        Offre.ParcourCollectif==true? ParcourCollectif="Parcours collectif":ParcourCollectif=Offre.NbStage
        var date1=Offre.DateDebut.substring(8, 10)+"/"+Offre.DateDebut.substring(5, 7)+'/'+Offre.DateDebut.substring(0, 4)
        var date2=Offre.DateFin.substring(8, 10)+"/"+Offre.DateFin.substring(5, 7)+'/'+Offre.DateFin.substring(0, 4)

        const test={ 
            RaisonClient:Client.raisonSociale,
            adress_1Client: Client.adresse_1,
            adress_2Client: Client.adresse_2,
            CodePostalClient:Client.codeVille,
            nomFormation:Offre.designiationFormation,
            moduleFormation:Offre.typeFormation,
            typeFormation:Offre.TypeFormation,
            module:Offre.typeFormation,
            nombStagaire:ParcourCollectif,  
            DateDebut:date1,
            DateFin:date2,
            duree  :Offre.DureeJour+" jours, soit "+ Offre.DureeHeur +" heures",
            LieuFormation:Offre.lieuFormation,
            selectedHeure:Offre.selectedHeure,
            prixHt:Offre.PrixTotal,
            tva:Offre.PrixTVA,
            prixAvecTVA:Offre.prixNet,
          
        }

        res.status(200).json(test);
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};


exports.getDonneConvocation = async (req, res) => {
    try {
        const Offre = await offre.findOne({id:req.params.id});
        const Session = await session.findOne({id:req.params.id});
        var Client={}
        Offre.IdClient?   Client = await client.findById(Offre.IdClient): Client = {}
        var Formateur={}
        Offre.idFormateur?   Formateur = await formateur.findById(Offre.idFormateur): Formateur = {}
      
        var ParcourCollectif=''
        Offre.ParcourCollectif==true? ParcourCollectif="Parcours collectif":ParcourCollectif=Offre.NbStage
      
        const test={ 
            NumSession:Session.numSession,
            numDevis:Session.numDevis ,
            Contact:req.params.nomUtilisateur,
            nomClient:Client.titre+" "+Client.nom+" "+Client.prenom,
            adressFormation:Client.adresse_1,
            CodePostalFormation:Client.codeVille,
            nomFormation:Offre.designiationFormation+" - "+Offre.typeFormation,
            lieuFormation:Offre.lieuFormation,
             dureeFormation:Offre.DureeJour+" jours, soit "+ Offre.DureeHeur +" heures", 
            dateFin:Offre.DateFin,
            dateDebut:Offre.DateDebut,
            typeFormation:Offre.TypeFormation,
            RaisonSociale:Client.raisonSociale,
            Module:Offre.typeFormation, 
            designiationFormation:Offre.designiationFormation,
            emailClient:Client.email,
            emailFormateur:Formateur.email,
          
        }
 
        res.status(200).json(test);
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
}; 
exports.updateSession = async (req, res) => {
    try {
        const Session = await session.findOneAndUpdate({id:req.params.id},req.body, { new: true });

        res.status(200).json({
            Session
        });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};

exports.deleteSession = async (req, res) => {
    try {
        const Session = await session.findOneAndDelete({id:req.params.id});
        const Offre = await offre.findOneAndDelete({id:req.params.id});

        res.status(200).json({
            Session
        });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};

// FAVORITE SYSTEM 

exports.createPdf = (req,res)=>{ 
  if(req.params.nomPdf=="Convention"){
    pdf.create(pdfTemplateConvention(req.body),{}).toFile('./documents/Convention.pdf',(err)=>{
        if(err){
            console.log(err);
        }
        res.send('pdf generated')
    }) 
} 
if(req.params.nomPdf=="offre"){
  

    pdf.create(pdfTemplateOffre(req.body),{}).toFile('./documents/offre.pdf',(err)=>{
        if(err){
            console.log(err);
        }
        res.send('pdf generated')
    }) 
}
if(req.params.nomPdf=="Convocation"){
    pdf.create(pdfTemplateConvocation(req.body),{}).toFile('./documents/Convocation.pdf',(err)=>{
        if(err){
            console.log(err);
        }
        res.send('pdf generated')
    }) 
}
if(req.params.nomPdf=="FeuilleEmargement"){
    let options = {
        width: '11.8in',
        height: '10in'
     } 
    pdf.create(pdfTemplateFeuilEmargement(req.body),options).toFile('./documents/FeuilleEmargement.pdf',(err)=>{
        if(err){
            console.log(err);
        }
        res.send('pdf generated')
    })   
}
if(req.params.nomPdf=="CertificatRealisation"){
pdf.create(pdfCertificatRealisation(req.body),{}).toFile('./documents/CertificatRealisation.pdf',(err)=>{
    if(err){
        console.log(err);
    }
    res.send('pdf generated')
}) 
} 
if(req.params.nomPdf=="FeuilleEvaluation"){
    pdf.create(pdfTemplateFeuilleEvaluation(req.body),{}).toFile('./documents/FeuilleEvaluation.pdf',(err)=>{
        if(err){
            console.log(err);
        }
        res.send('pdf generated')
    })
}
if(req.params.nomPdf=="ContratFormation"){
    pdf.create(pdfTemplateContratFormation(req.body),{}).toFile('./documents/ContratFormation.pdf',(err)=>{
        if(err){
            console.log(err);
        }
        res.send('pdf generated')
    })
}
if(req.params.nomPdf=="RapportFormateur"){
    pdf.create(pdfTemplateRapportFormateur(req.body),{}).toFile('./documents/RapportFormateur.pdf',(err)=>{
        if(err){
            console.log(err);
        }
        res.send('pdf generated')
    })
}
}

exports.copeFilePdf = (req,res)=>{
    fs.copyFile(req.body.filePath, req.body.filecopy, (error) => {
        if (error) {
          throw error
        } else {
            res.send('File has been moved to another folder.')
        }
      })
 }
exports.fetchPdf = (req,res)=>{
    if(req.params.nomFile=="Convention"){
    res.sendFile(path.join(process.cwd(),'documents', 'Convention.pdf'))
} 
if(req.params.nomFile=="offre"){
    res.sendFile(path.join(process.cwd(),'documents', 'offre.pdf'))


}
if(req.params.nomFile=="Convocation"){
    res.sendFile(path.join(process.cwd(),'documents', 'Convocation.pdf'))
}
if(req.params.nomFile=="FeuilleEmargement"){
    res.sendFile(path.join(process.cwd(),'documents', 'FeuilleEmargement.pdf'))
} 
if(req.params.nomFile=="CertificatRealisation"){
    res.sendFile(path.join(process.cwd(),'documents', 'CertificatRealisation.pdf'))
}
if(req.params.nomFile=="FeuilleEvaluation"){
    res.sendFile(path.join(process.cwd(),'documents', 'FeuilleEvaluation.pdf'))
}
if(req.params.nomFile=="ContratFormation"){
    res.sendFile(path.join(process.cwd(),'documents', 'ContratFormation.pdf'))
}
if(req.params.nomFile=="RapportFormateur"){
    res.sendFile(path.join(process.cwd(),'documents', 'RapportFormateur.pdf'))
}
}  
  
exports.sendPdf = (req,res)=>{ 
    if(req.params.typeEnvoye=="Convention"){

    pathToAttachment1 = path.join(process.cwd(),'documents', 'Convention.pdf')
 
    attachment1 = fs.readFileSync(pathToAttachment1).toString("base64")

    let smtpTransport = nodemailer.createTransport({
        host:'smtp.gmail.com',
        service:'Gmail',
        port:465,
        secure:true,
        auth:{ 
            user:req.body.EmailUser,
            pass:req.body.PassEmail
        },
        tls:{rejectUnauthorized:false}
    })

    smtpTransport.sendMail({
        from:req.body.EmailUser,
        to:req.body.email,
        subject:req.body.subject,
        html:req.body.linun+"<br/> "+req.body.lindeux+"<br/> "+req.body.lintrois+"<br/> Bien cordialement.",
        attachments:[
            {
                content:attachment1,
                filename:req.body.filename,
                contentType: 'application/pdf',
                path:pathToAttachment1
            }
        ]
    },function(error,info){

        if(error){
            console.log(error);
        }
        else{
            res.send("Mail has been sended to your email. Check your mail")
        }
       
    })
    }
    if(req.params.typeEnvoye=="offre"){
        var pathToAttachment=[] 
        var attachments=[]
        var attachment=[]

        pathToAttachment[0] = path.join(process.cwd(),'documents', 'offre.pdf')
        pathToAttachment[1] = path.join(process.cwd(),'documents', 'Questionnaire évaluation avant formation.pdf')
     
        attachment[0] = fs.readFileSync(pathToAttachment[0]).toString("base64")
        attachment[1] = fs.readFileSync(pathToAttachment[1]).toString("base64")
    attachments[0]={
            content:attachment[0],
            filename:req.body.filenameOffre,
            contentType: 'application/pdf',
            path:pathToAttachment[0]}
            attachments[1]={
        content:attachment[1],
                    filename:'Questionnaire évaluation avant formation.pdf',
                    contentType: 'application/pdf',
                    path:pathToAttachment[1] }
                    if(req.body.filename){
                        attachments[2]={  content:process.env.fileInfo+req.body.filename, 
                            filename:req.body.filenameProgramme,
                            contentType: 'application/pdf',
                            path:process.env.fileInfo+req.body.filename}
                      }

        let smtpTransport = nodemailer.createTransport({
            host:'smtp.gmail.com',
            service:'Gmail',
            port:465,
            secure:true,
            auth:{
                user:req.body.EmailUser,
                pass:req.body.PassEmail
            },
            tls:{rejectUnauthorized:false}
        })
            
        smtpTransport.sendMail({
            from:req.body.EmailUser,
            to:req.body.email,
            subject:req.body.subject,
            html:req.body.linun+"<br/> "+req.body.lindeux+"<br/> "+req.body.lintrois+"<br/> "+req.body.linquatre+"<br/> Bien cordialement.",
            attachments:attachments
        },function(error,info){
    
            if(error){
                console.log(error);
            }
            else{
                res.send("Mail has been sended to your email. Check your mail")
            }
           
        })



    }
    if(req.params.typeEnvoye=="OffreplusConvention"){

        pathToAttachment1 = path.join(process.cwd(),'documents', 'Convention.pdf')
        pathToAttachment2 = path.join(process.cwd(),'documents', 'offre.pdf')
        attachment1 = fs.readFileSync(pathToAttachment1).toString("base64")

        attachment2 = fs.readFileSync(pathToAttachment2).toString("base64")
    
        let smtpTransport = nodemailer.createTransport({
            host:'smtp.gmail.com',
            service:'Gmail',
            port:465,
            secure:true,
            auth:{
                user:req.body.EmailUser,
                pass:req.body.PassEmail
            },
            tls:{rejectUnauthorized:false}
        })
    
        smtpTransport.sendMail({
            from:req.body.EmailUser,
            to:req.body.email,
            subject:req.body.subject,
            html:req.body.linun+"<br/> "+req.body.lindeux+"<br/> "+req.body.lintrois+"<br/> "+req.body.linquatre+"<br/> Bien cordialement.",
            attachments:[
                {
                    content:attachment1,
                    filename:req.body.filenameConvention,
                    contentType: 'application/pdf',
                    path:pathToAttachment1
                },
                {
                    content:attachment2,
                    filename:req.body.filenameOffre,
                    contentType: 'application/pdf',
                    path:pathToAttachment2
                }
            ]
        },function(error,info){
    
            if(error){
                console.log(error);
            }
            else{
                res.send("Mail has been sended to your email. Check your mail")
            }
           
        })
        }
  if(req.params.typeEnvoye=="sendFormateur"){

            pathToAttachment1 = path.join(process.cwd(),'documents', 'RapportFormateur.pdf')
            pathToAttachment2 = path.join(process.cwd(),'documents', 'ContratFormation.pdf')
            attachment1 = fs.readFileSync(pathToAttachment1).toString("base64")
    
            attachment2 = fs.readFileSync(pathToAttachment2).toString("base64")
        
            let smtpTransport = nodemailer.createTransport({
                host:'smtp.gmail.com',
                service:'Gmail',
                port:465,
                secure:true,
                auth:{
                    user:req.body.EmailUser,
                    pass:req.body.PassEmail
                },
                tls:{rejectUnauthorized:false}
            })
        
            smtpTransport.sendMail({
                from:req.body.EmailUser,
                to:req.body.email,
                subject:req.body.subject,
                html:req.body.linun+"<br/> "+req.body.lindeux+"<br/> "+req.body.lintrois+"<br/> "+req.body.linquatre+"<br/> Bien cordialement.",
                attachments:[
                    {
                        content:attachment1,
                        filename:req.body.filenameConvention,
                        contentType: 'application/pdf',
                        path:pathToAttachment1
                    },
                    {
                        content:attachment2,
                        filename:req.body.filenameOffre,
                        contentType: 'application/pdf',
                        path:pathToAttachment2
                    }
                ]
            },function(error,info){
        
                if(error){
                    console.log(error);
                }
                else{
                    res.send("Mail has been sended to your email. Check your mail")
                }
               
            })
            }   


                if(req.params.typeEnvoye=="sendDocument"){

                    var listStagaire=req.body.listStagaire
                    var pathToAttachment=[] 
                    var attachments=[]
                    var attachment=[]
                
                    for( var i=0;i<listStagaire.length;i++){
                        path[i] = path.join(req.body.pathDossie, listStagaire[i].titre+' '+listStagaire[i].nom+' '+listStagaire[i].prenom+'.zip')
                        attachments[i]= {
                            filename:listStagaire[i].titre+' '+listStagaire[i].nom+' '+listStagaire[i].prenom+"_Documents de formation_Session "+req.body.numSession +".zip" ,
                            path:path[i]
                             }
                
                   }
                   pathToAttachment[listStagaire.length] =  path.join(process.cwd(),'documents', 'FeuilleEmargement.pdf')

                   attachment[listStagaire.length] = fs.readFileSync(pathToAttachment[listStagaire.length]).toString("base64")
                   attachments[listStagaire.length]= {
                       content:attachment[listStagaire.length],
                       filename:"FeuilleEmargement",
                       contentType: 'application/pdf',
                       path:pathToAttachment[listStagaire.length]
                   }
                
                      
                     
                
                                let smtpTransport = nodemailer.createTransport({
                                    host:'smtp.gmail.com',
                                    service:'Gmail',
                                    port:465,
                                    secure:true,
                                    auth:{
                                        user:req.body.EmailUser,
                                        pass:req.body.PassEmail
                                    },
                                    tls:{rejectUnauthorized:false}
                                })
                            
                                smtpTransport.sendMail({ 
                                    from:req.body.EmailUser,
                                    to:req.body.email,
                                    subject:req.body.subject,
                                    html:req.body.linun+"<br/> "+req.body.lindeux+"<br/> Bien cordialement.",
                                    attachments:attachments
                                },function(error,info){
                            
                                    if(error){
                                        console.log(error);
                                    }
                                    else{
                
                                        res.send("email send")
                                    }
                                   
                                })
                                } 
                

}

exports.createPdfConvocation =  ( req,res)=>{
  
    if(req.params.typeSend=="sendConditaure"){
        pdf.create(pdfTemplateConvocation(req.body),{}).toFile('./documents/Convocation.pdf',(err)=>{
            if(err){
                console.log(err);
            }else{
                fs.copyFile(req.body.filePath, req.body.filecopy, (error) => {
                    if (error) {
                      throw error
                    } else {
                        res.send('File has been moved to another folder.')
                    }
                  })

            }
        
        })
      

       } 
       
    
  
    }

    exports.sendPdfConvocation =  ( req,res)=>{
  
        if(req.params.typeSend=="sendConditaure"){
       
            if(req.body.typeFormation=="En inter-enterprise"){ 
      
              pathToAttachment1 = path.join(req.body.filepath, req.body.nomFile+".pdf")
              pathToAttachment2 = path.join(process.cwd(),'documents', 'Livret stagiaire.pdf')
              pathToAttachment3 = path.join(process.cwd(),'documents', 'Règlement intérieur.pdf')
     
              attachment1 = fs.readFileSync(pathToAttachment1).toString("base64")
      
              attachment2 = fs.readFileSync(pathToAttachment2).toString("base64")
              attachment3 = fs.readFileSync(pathToAttachment3).toString("base64")
    
          
              let smtpTransport = nodemailer.createTransport({
                  host:'smtp.gmail.com',
                  service:'Gmail',
                  port:465,
                  secure:true,
                  auth:{
                    user:req.body.EmailUser,
                    pass:req.body.PassEmail
                  },
                  tls:{rejectUnauthorized:false}
              })
          
              smtpTransport.sendMail({
                  from:req.body.EmailUser,
                  to:req.body.email,
                  subject:req.body.subject,
                  cc:req.body.ccemail,
      
                  html:req.body.linun+"<br/> "+req.body.lindeux+"<br/> "+req.body.lintrois+"<br/> "+req.body.linquatre+"<br/> Bien cordialement.",
                  attachments:[
                      {
                          content:attachment1,
                          filename:"Convocation",
                          contentType: 'application/pdf',
                          path:pathToAttachment1
                      },
                      {
                          content:attachment2,
                          filename:"procedure",
                          contentType: 'application/pdf',
                          path:pathToAttachment2
                      },
                      {
                        content:attachment3,
                        filename:"livre",
                        contentType: 'application/pdf',
                        path:pathToAttachment3
                    }
                  ]
              },function(error,info){
          
                  if(error){
                      console.log(error);
                  }
                  else{
                      res.send("Mail has been sended to your email. Check your mail")
                  }
                 
              })
              }else{
                pathToAttachment1 = path.join(process.cwd(),'documents', 'Convocation.pdf')
                
                attachment1 = fs.readFileSync(pathToAttachment1).toString("base64")
        
            
                let smtpTransport = nodemailer.createTransport({
                    host:'smtp.gmail.com',
                    service:'Gmail',
                    port:465,
                    secure:true,
                    auth:{
                        user:req.body.EmailUser,
                        pass:req.body.PassEmail
                    },
                    tls:{rejectUnauthorized:false}
                })
            
                smtpTransport.sendMail({
                    from:req.body.EmailUser,
                    to:req.body.email,
                    subject:req.body.subject,
                    cc:req.body.ccemail,
        
                    html:req.body.linun+"<br/> "+req.body.lindeux+"<br/> "+req.body.lintrois+"<br/> "+req.body.linquatre+"<br/> Bien cordialement.",
                    attachments:[
                        {
                            content:attachment1,
                            filename:"Convocation",
                            contentType: 'application/pdf',
                            path:pathToAttachment1
                        }
                    ]
                },function(error,info){
            
                    if(error){
                        console.log(error);
                    }
                    else{
                        res.send("Mail has been sended to your email. Check your mail")
                    }
                   
                })
              } 
           } 
           if(req.params.typeSend=="sendResponsable"){

            if(req.body.typeFormation=="En inter-enterprise"){ 
      
                pathToAttachmentLivre = path.join(process.cwd(),'documents', 'Livret stagiaire.pdf')
                pathToAttachmentReglement = path.join(process.cwd(),'documents', 'Règlement intérieur.pdf')
       
                attachmentLivre = fs.readFileSync(pathToAttachmentLivre).toString("base64")
        
                attachmentReglement = fs.readFileSync(pathToAttachmentReglement).toString("base64")
                var listStagaire=req.body.listStagaire
                var pathToAttachment=[]
                var attachment=[]
                var attachments=[]
          
         
                    for( var i=0;i<listStagaire;i++){
                         pathToAttachment[i] = path.join(req.body.pathDossier+"/"+nomDossie+ "/Convocations", "Convocation_"+i+".pdf")
                         
                         attachment[i] = fs.readFileSync(pathToAttachment[i]).toString("base64")
                         attachments[i]= {
                             content:attachment[i],
                             filename:"Convocation_stagaire_"+[i],
                             contentType: 'application/pdf',
                             path:pathToAttachment[i]
                         }
                 
                    }
                    attachments[listStagaire]= {
                        content:attachmentLivre,
                        filename:"Livret stagiaire",
                        contentType: 'application/pdf',
                        path:pathToAttachmentLivre
                    }
                    attachments[listStagaire+1]= {
                        content:attachmentReglement,
                        filename:"Livret stagiaire",
                        contentType: 'application/pdf',
                        path:pathToAttachmentReglement
                    }

                         let smtpTransport = nodemailer.createTransport({
                             host:'smtp.gmail.com',
                             service:'Gmail',
                             port:465,
                             secure:true,
                             auth:{
                                user:req.body.EmailUser,
                                pass:req.body.PassEmail
                             },
                             tls:{rejectUnauthorized:false}
                         })
                     
                         smtpTransport.sendMail({
                             from:req.body.EmailUser,
                             to:req.body.email,
                             subject:req.body.subject,
                 
                             html:req.body.linun+"<br/> "+req.body.lindeux+"<br/> "+req.body.lintrois+"<br/> "+req.body.linquatre+"<br/> Bien cordialement.",
                             attachments:attachments
                         },function(error,info){
                     
                             if(error){
                                 console.log(error);
                             }
                             else{
                                 res.send("Mail has been sended to your email. Check your mail")
                             }
                            
                         })
                }else{
                    var listStagaire=req.body.listStagaire
                    var pathToAttachment=[]
                    var attachment=[]
                    var attachments=[]
             
          
                        for( var i=0;i<listStagaire;i++){
                             pathToAttachment[i] = path.join(req.body.pathDossier+"/"+req.body.nomDossie+ "/Convocations", "Convocation_"+i+".pdf")
                             
                             attachment[i] = fs.readFileSync(pathToAttachment[i]).toString("base64")
                             attachments[i]= {
                                 content:attachment[i],
                                 filename:"Convocation_stagaire_"+[i],
                                 contentType: 'application/pdf',
                                 path:pathToAttachment[i]
                             }
                     
                        }
                             let smtpTransport = nodemailer.createTransport({
                                 host:'smtp.gmail.com',
                                 service:'Gmail',
                                 port:465,
                                 secure:true,
                                 auth:{
                                    user:req.body.EmailUser,
                                     pass:req.body.PassEmail
                                 },
                                 tls:{rejectUnauthorized:false}
                             })
                         
                             smtpTransport.sendMail({
                                 from:req.body.EmailUser,
                                 to:req.body.email,
                                 subject:req.body.subject,
                                 cc:req.body.ccemail,

                                 html:req.body.linun+"<br/> "+req.body.lindeux+"<br/> "+req.body.lintrois+"<br/> "+req.body.linquatre+"<br/> Bien cordialement.",
                                  attachments:attachments
                             },function(error,info){
                         
                                 if(error){
                                     console.log(error);
                                 }
                                 else{
                                     res.send("Mail has been sended to your email. Check your mail")
                                 }
                                
                             })
                }
    
              
            
            }
      
        }

 exports.mettreDansZip = (req, res) => {

  const zip = new AdmZip(); 
   
  zip.addLocalFile(req.body.CertificatFile);
  zip.addLocalFile(req.body.FeuilEvaluation);

  const data = zip.toBuffer();
  fs.writeFileSync(req.body.fileZip,data);
 

  res.send(data); 
   
  }
  exports.viderDossier = (req, res) => {

    fsExtra.emptyDirSync('./test');
    res.send("ok"); 

  }