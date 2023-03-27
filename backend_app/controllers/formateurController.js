const Formateur = require('../models/Formateur');

exports.getAllFormateurs = async (req, res) => {
    try {
        const allFormateurs = await Formateur.find();

        res.send(allFormateurs);
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        }); 
    } 
}; 
exports.Register = async (req, res) => {
    try { 
        const { email,raisonSociale,portable,assujtTva, nomFichie,titre,nom,prenom,tel,adresse_1,fraisDeplaccement,frais,tva,checkfrais, adresse_2,codeVille} = req.body;
        const username=nom+"_"+prenom
        const newFormateur = await Formateur.create({email,nomFichie,raisonSociale,assujtTva,portable,tva,fraisDeplaccement,frais,
             titre,checkfrais,nom,prenom,tel,adresse_1, adresse_2,codeVille,username});
           
        res.status(201).json(
            newFormateur
        ); 
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};
exports.getFormateurByUsername = async (req, res) => {
    try {
        const   formateur = await Formateur.find({username: req.params.username})

        res.status(200).json(formateur);
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};

 

exports.search = async (req, res, next) => {
    const Formateurs = await Formateur.find();
    const { q } = req.query;
  
    const keys = ["nom", "prenom","tel"];
  
    const search = (data) => {
      return data.filter((item) =>
        keys.some((key) => item[key].toLowerCase().includes(q))
      );
    };
  
    q ? res.json(search(Formateurs).slice(0, 10)) : res.json(Formateurs.slice(0, 10));
  
  
};
exports.getFormateurById = async (req, res) => {
    try {
        const formateur = await Formateur.findById(req.params.id);

        res.status(200).json(formateur);
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};
 
exports.updateFormateur = async (req, res) => {
    try {
        const formateur = await Formateur.findByIdAndUpdate(req.params.id, req.body, { new: true });

        res.status(200).json({
            formateur
        });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};

exports.deleteFormateur = async (req, res) => {
    try {
        const formateur = await Formateur.findByIdAndDelete(req.params.id);

        res.status(200).json({
            formateur
        });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};

