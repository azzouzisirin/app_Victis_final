const prospect = require('../models/Prospect');
const Client=require('../models/Client')
exports.Register = async (req, res) => {
    try {
        const {email, raisonSociale,titre, portable, nom,prenom,tel,adresse_1, adresse_2,codeVille} = req.body;
        const username=nom+"_"+prenom
        const newprospect = await prospect.create({email,titre, raisonSociale, portable, nom,prenom,tel,adresse_1, adresse_2,codeVille,username});
        
        res.status(201).json({
            email,
            username  
        });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};
exports.getAllprospects = async (req, res) => {
    try {
        const allprospects = await prospect.find().distinct( "raisonSociale" );

        res.json(allprospects);
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};


exports.search = async (req, res, next) => {
    const prospects = await prospect.find();
    const { q } = req.query;
  
    const keys = ["nom", "prenom"];
  
    const search = (data) => {
      return data.filter((item) =>
        keys.some((key) => item[key].toLowerCase().includes(q))
      );
    };
  
    q ? res.json(search(prospects).slice(0, 10)) : res.json(prospects.slice(0, 10));
  
  
};
exports.getprospectById = async (req, res) => {
    try {
        const   Prospect = await prospect.findById(req.params.id);

        res.status(200).json(Prospect);
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};
exports.getprospectByUsername = async (req, res) => {
    try {
        const   Client = await prospect.findOne({username: req.params.username,raisonSociale:req.params.raisonSociale})

        res.status(200).json(Client);
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
}; 
exports.getprospectByRaison = async (req, res) => {
    try {
        const   Client = await prospect.find({raisonSociale:req.params.raisonSociale})

        res.status(200).json(Client);
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};

exports.updateprospect = async (req, res) => {

    try { 
        const Prospect = await prospect.findById(req.params.id);

        var Username=Prospect.username
        if(req.body.nom && req.body.prenom  ){
            Username=req.body.nom+"_"+req.body.prenom

        }
       else if(req.body.nom ){
            Username=req.body.nom+"_"+Prospect.prenom

        }else  if(req.body.prenom){
            Username=Prospect.nom+"_"+req.body.prenom
        }

        

        const prospects = await prospect.findByIdAndUpdate(req.params.id, {email:req.body.email,raisonSociale:req.body.raisonSociale,titre:req.body.titre, portable:req.body.portable, nom:req.body.nom,prenom:req.body.prenom,tel:req.body.tel,adresse_1:req.body.adresse_1, adresse_2:req.body.adresse_2,codeVille:req.body.codeVille,username:Username}, { new: true });
 
        res.status(200).json({
            prospects
        }); 
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};

exports.deleteprospect = async (req, res) => {
    try {
        const Client = await prospect.findByIdAndDelete(req.params.id);

        res.status(200).json({
            Client
        });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
}; 

exports.checkProcpect = async (req, res) => {
    try {
        const Prospect = await prospect.findById(req.params.id);
        const newclient = await Client.create({email:Prospect.email,titre:Prospect.titre, raisonSociale:Prospect.raisonSociale, portable:Prospect.portable, nom:Prospect.nom,prenom:Prospect.prenom,tel:Prospect.tel,adresse_1:Prospect.adresse_1, adresse_2:Prospect.adresse_2,codeVille:Prospect.codeVille,username:Prospect.username});
        
        const Prospect1 = await prospect.findByIdAndDelete(req.params.id);

        res.status(200).json({
            newclient
        });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};

