const utilisateur = require('../models/utilisateur');

exports.getAllutilisateurs = async (req, res) => {
    try {
        const allutilisateurs = await utilisateur.find();

        res.send(allutilisateurs);
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
}; 
exports.Register = async (req, res) => {
    try { 
        const { email, password,PassEmail,shemaDossie,host, titre,nom,prenom,fonction,portable,tel,taux,adresse_1, adresse_2,codeVille} = req.body;
        const username=nom+"_"+prenom
        const newutilisateur = await utilisateur.create({email,host,PassEmail,portable,shemaDossie,fonction, password, titre,nom,prenom,tel,taux,adresse_1, adresse_2,codeVille,username});
           
        res.status(201).json({
            newutilisateur
        }); 
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};
exports.getutilisateurByUsername = async (req, res) => {
    try {
        const   Utilisateur = await utilisateur.findOne({username: req.params.username,titre:req.params.titre})

        res.status(200).json(Utilisateur);
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};

 
exports.Login = async(req, res) => {
    if(req.body.password && req.body.email){
      let user=await utilisateur.findOne({password:req.body.password,email:req.body.email})
      if(user){
          res.send(user)
      }else{
          res.send({resultat:"Utilisateur inexistant"})
      }
    }else{
      res.send({resultat:"Remplir tous les champs"})
    }
  
  };
exports.search = async (req, res, next) => {
    const utilisateurs = await utilisateur.find();
    const { q } = req.query;
  
    const keys = ["nom", "prenom"];
  
    const search = (data) => {
      return data.filter((item) =>
        keys.some((key) => item[key].toLowerCase().includes(q))
      );
    };
  
    q ? res.json(search(utilisateurs).slice(0, 10)) : res.json(utilisateurs.slice(0, 10));
  
  
};
exports.getutilisateurById = async (req, res) => {
    try {
        const Utilisateur = await utilisateur.findById(req.params.id);

        res.status(200).json(Utilisateur);
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};

exports.updateutilisateur = async (req, res) => {
    try {
        const Utilisateur = await utilisateur.findByIdAndUpdate(req.params.id, req.body, { new: true });

        res.status(200).json({
            Utilisateur
        });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};

exports.deleteutilisateur = async (req, res) => {
    try {
        const Utilisateur = await utilisateur.findByIdAndDelete(req.params.id);

        res.status(200).json({
            Utilisateur
        });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};
