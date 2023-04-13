const client = require('../models/Client');

exports.Register = async (req, res) => {
    try {
        const {email, raisonSociale,titre, portable, nom,prenom,tel,adresse_1, adresse_2,codeVille} = req.body;
        const username=nom+"_"+prenom
        const newclient = await client.create({email,titre, raisonSociale, portable, nom,prenom,tel,adresse_1, adresse_2,codeVille,username});
        
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
exports.getAllclients = async (req, res) => {
    try {
        const allclients = await client.find().distinct( "raisonSociale" );

        res.json(allclients);
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};


exports.search = async (req, res, next) => {
    const clients = await client.find();
    const { q } = req.query;
  
    const keys = ["raisonSociale"];
  
    const search = (data) => {
      return data.filter((item) =>
        keys.some((key) => item[key].toLowerCase().includes(q))
      );
    };
  
    q ? res.json(search(clients).slice(0, 10)) : res.json(clients.slice(0, 10));
  
  
};
exports.getclientById = async (req, res) => {
    try {
        const   Client = await client.findById(req.params.id);

        res.status(200).json(Client);
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};
exports.getclientByUsername = async (req, res) => {
    try {
        const   Client = await client.findOne({username: req.params.username,raisonSociale:req.params.raisonSociale})

        res.status(200).json(Client);
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
}; 
exports.getclientByRaison = async (req, res) => { 
    try {
        const   Client = await client.find({raisonSociale:req.params.raisonSociale})

        res.status(200).json(Client);
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};

exports.updateclient = async (req, res) => {
    try { 
        const {email, raisonSociale,titre, portable, nom,prenom,tel,adresse_1, adresse_2,codeVille} = req.body;
        const username=nom+"_"+prenom

        const clients = await client.findByIdAndUpdate(req.params.id, {email, raisonSociale,titre, portable, nom,prenom,tel,adresse_1, adresse_2,codeVille,username}, { new: true });
 
        res.status(200).json({
            clients
        });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};

exports.deleteclient = async (req, res) => {
    try {
        const Client = await client.findByIdAndDelete(req.params.id);

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

