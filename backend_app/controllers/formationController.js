const Formation = require('../models/Formation');

exports.getAllFormations = async (req, res) => {
    try {
        const allFormation = await Formation.find().distinct( "designation" );
 
        res.json(allFormation);  
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    } 
};


exports.getFormationByCategorie = async (req, res) => { 
    try {
        const formation = await Formation.find({designation:req.params.designation});

        res.status(200).json(formation);
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
}; 
exports.getFormationByCategorieAndNom = async (req, res) => { 
    try {
        const formation = await Formation.findOne({type:req.params.type,designation:req.params.designation});

        res.status(200).json(formation);
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};
exports.Register = async (req, res) => {
    try {
        const newFormation = await Formation.create(req.body);

        res.status(201).json({
            newFormation
        });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};
 

exports.search = async (req, res, next) => {
    const formation = await Formation.find();
    const { q } = req.query;
  
    const keys = ["designation"];
    
    const search = (data) => {
      return data.filter((item) =>
        keys.some((key) => item[key].toLowerCase().includes(q))
      ); 
    };
   
    q ? res.json(search(formation).slice(0, 10)) : res.json(formation.slice(0, 10));
  
  
};
exports.getFormationById = async (req, res) => {
    try {
        const formation = await Formation.findById(req.params.id).select('-password');

        res.status(200).json(formation);
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        }); 
    } 
};  
 
exports.updateFormation = async (req, res) => {
    try {
        const formation = await Formation.findOneAndUpdate({id:req.params.id}, req.body, { new: true });

        res.status(200).json({
            formation
        });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
}; 

exports.deleteFormation = async (req, res) => {
    try {
        const formation = await Formation.findByIdAndDelete(req.params.id);

        res.status(200).json({
            formation
        });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};


