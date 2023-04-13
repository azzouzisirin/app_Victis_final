const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
   
raisonSocial: { 
    type: String,
},

titre: { 
  type: String,
},
  email: { 
        type: String,
        unique: true,
    },
  remarque: { 
      type: String,
  }, 
 username: {  
    type: String,

},
  nom: {
        type: String,
    },
  prenom:{
      type: String,

    },
  tel: {
      type: String,

    },
   portable: {
      type: String,

    },
  adresse_1: {
      type: String,

    },
  adresse_2: {
      type: String,

    },
  codeVille: {
      type: String,

    }
},{versionKey:false});


const Financeur = mongoose.model('Financeur', UserSchema);
module.exports = Financeur;