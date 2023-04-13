const location = require('../models/location');

exports.getAlllocations = async (req, res) => {
    try {
        const alllocations = await location.find().distinct( "raisonSociale" );
 
        res.send(alllocations); 
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error  
        });
    }
};
exports.Register = async (req, res) => {
    try { 
        const { email,portable,observation,nom,prenom,tel,adresse_1,titre, adresse_2,codeVille,raisonSociale,frais} = req.body;
        const newlocation = await location.create({email,portable,observation,titre,nom,prenom,tel,adresse_1, adresse_2,codeVille,raisonSociale,frais});
           
        res.status(201).json({
            newlocation
        }); 
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};
exports.getlocationByRaisonSociale = async (req, res) => { 
    try {
        const   Location = await location.findOne({raisonSociale: req.params.raisonSociale})

        res.status(200).json({frais:Location.frais,adresse_1:Location.adresse_1,codeVille:Location.codeVille});
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};

 
exports.Login = async(req, res) => {
  
    try {
        const Location =  await location.findOne({ email: req.body.email,password:req.body.password })
      
            if (Location) {
              
                        res.status(200).json(
                            Location
                        );
                    } else {
                        res.status(200).json({
                            status: 'failed',
                            error: 'Wrong email or password'
                        });
                    }
               
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};
exports.search = async (req, res, next) => {
    const locations = await location.find();
    const { q } = req.query;
  
    const keys = ["raisonSociale", "codeVille"];
  
    const search = (data) => {
      return data.filter((item) =>
        keys.some((key) => item[key].toLowerCase().includes(q))
      );
    };
   
    q ? res.json(search(locations).slice(0, 10)) : res.json(locations.slice(0, 10));
  
  
};
exports.getlocationById = async (req, res) => {
    try {
        const Location = await location.findById(req.params.id);

        res.status(200).json(Location);
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};

exports.updatelocation = async (req, res) => {
    try {
        const Location = await location.findByIdAndUpdate(req.params.id, req.body, { new: true });

        res.status(200).json({
            Location
        });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};

exports.deletelocation = async (req, res) => {
    try {
        const Location = await location.findByIdAndDelete(req.params.id);

        res.status(200).json({
            Location
        });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            error
        });
    }
};

