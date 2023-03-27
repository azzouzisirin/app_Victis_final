const Financeur = require('../models/Financeur');

exports.getAllFinanceurs = async (req, res) => {
    try {
        const allFinanceurs = await Financeur.find();

        res.send(allFinanceurs);
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        }); 
    } 
};
exports.getAllName = async (req, res) => {
    try {
        const allFinanceurs = await Financeur.find();

        res.send({label:allFinanceurs.nom});
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        }); 
    }
}; 

exports.Register = async (req, res) => {
    try {
        const {email, raisonSocial,titre,remarque, portable, nom,prenom,tel,adresse_1, adresse_2,codeVille} = req.body;
        const username=nom+"_"+prenom
        const newclient = await Financeur.create({email,titre, remarque,raisonSocial, portable, nom,prenom,tel,adresse_1, adresse_2,codeVille,username});
        
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
exports.getFinanceurByRaison = async (req, res) => {
    try {
        const   financeur = await Financeur.find({raisonSocial: req.params.raisonSocial})

        res.status(200).json(financeur);
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};
exports.getFinanceurByUsername = async (req, res) => {
    try {
        const   financeur = await Financeur.findOne({username: req.params.username,raisonSociale:req.params.raisonSociale})

        res.status(200).json(financeur);
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
}; 
 

exports.search = async (req, res, next) => {
    const Financeurs = await Financeur.find();
    const { q } = req.query;
   
    const keys = ["raisonSocial"];
  
    const search = (data) => {
      return data.filter((item) =>
        keys.some((key) => item[key].toLowerCase().includes(q))
      );
    };
  
    q ? res.json(search(Financeurs).slice(0, 10)) : res.json(Financeurs.slice(0, 10));
  
  
};
exports.getFinanceurById = async (req, res) => {
    try {
        const financeur = await Financeur.findById(req.params.id);

        res.status(200).json(financeur);
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};

exports.updateFinanceur = async (req, res) => {
    try {
        const financeur = await Financeur.findByIdAndUpdate(req.params.id, req.body, { new: true });

        res.status(200).json({
            financeur
        });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};

exports.deleteFinanceur = async (req, res) => {
    try {
        const financeur = await Financeur.findByIdAndDelete(req.params.id);

        res.status(200).json({
            financeur
        });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};

