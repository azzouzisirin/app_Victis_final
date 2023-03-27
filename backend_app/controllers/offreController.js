const offre = require('../models/offre');
const pdfTemplate = require("../documents/offre")
const pdf = require('html-pdf')
const path = require('path')
const nodemailer = require('nodemailer')
const fs = require('fs')
exports.getAlloffres = async (req, res) => {
    try {
        const alloffre = await offre.find();

        res.send(alloffre);
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
}; 

exports.getoffreByCategorie = async (req, res) => {
    try {
        const Offre = await offre.findOne({categorie:req.params.categorie});

        res.status(200).json(Offre);
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};

exports.Register = async (req, res) => {
    try {
        const allSession = await  offre.find().count();
        const id=allSession+1 
        const newoffre = await offre.create({id,remarque:req.body.remarque,CalendrieFormation:req.body.CalendrieFormation,listStagaire:req.body.listStagaire,listSousResponsable:req.body.listSousResponsable,HeureFormation:req.body.HeureFormation,prixNet:req.body.prixNet,ParcourCollectif:req.body.ParcourCollectif,PrixTVA:req.body.PrixTVA,lieuFormation:req.body.lieuFormation,rythme:req.body.rythme,checkEngin:req.body.checkEngin,titre:req.body.titre,checkLocal:req.body.checkLocal,RasionLocation:req.body.RasionLocation,typeLocation:req.body.typeLocation,idopco:req.body.idopco,IdClient:req.body.IdClient,IdFormation:req.body.IdFormation,TypeFormation:req.body.TypeFormation,DateDebut:req.body.DateDebut,DateFin:req.body.DateFin,BaremKilometre:req.body.BaremKilometre,typeDeplacement:req.body.typeDeplacement,typeFormation:req.body.typeFormation,NbStage:req.body.NbStage,PrixJournal:req.body.PrixJournal,PrixTotal:req.body.PrixTotal,Tva:req.body.Tva,PrixTTC:req.body.PrixTTC,designiationFormation:req.body.designiationFormation,TypeFinance:req.body.TypeFinance,DureeJour:req.body.DureeJour,DureeHeur:req.body.DureeHeur,TranspDistance:req.body.TranspDistance,FraisDeplacement:req.body.FraisDeplacement,hotel:req.body.hotel,petitDej:req.body.petitDej,dejune:req.body.dejune,fraisRestau:req.body.fraisRestau,diner:req.body.diner,FraisDeplacementJour:req.body.FraisDeplacementJour,heberge:req.body.heberge,Panier:req.body.Panier,TotalFrais:req.body.TotalFrais,TotalFraisJour:req.body.TotalFraisJour,idFormateur:req.body.idFormateur,finance:req.body.finance,PrixClient:req.body.PrixClient});

        res.status(201).json({
            newoffre
        }); 
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};


exports.search = async (req, res, next) => {
    const Offre = await offre.find();
    const { q } = req.query;
  
    const keys = ["nom", "categorie"];
   
    const search = (data) => {
      return data.filter((item) =>
        keys.some((key) => item[key].toLowerCase().includes(q))
      );
    };
  
    q ? res.json(search(Offre).slice(0, 10)) : res.json(Offre.slice(0, 10));
  
  
};
exports.getoffreById = async (req, res) => {
    try {
        const Offre = await offre.findOne({id:req.params.id});
 
        res.status(200).json(Offre);
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    } 
};

exports.updateoffre = async (req, res) => {
    try {
        const Offre = await offre.findOneAndUpdate({id:req.params.id},req.body, { new: true });

        res.status(200).json({
            Offre
        });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};

exports.deleteoffre = async (req, res) => {
    try {
        const Offre = await offre.findByIdAndDelete(req.params.id);

        res.status(200).json({
            Offre
        });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};
 
 
