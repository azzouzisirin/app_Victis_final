const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
   
 raisonSociale: { 
    type: String,
},
   email: { 
        type: String,
        unique: true,
    },
    titre: {
      type: String,
      default:"",
  }, 
 
   nom: {
        type: String,
        default:"",
    }, 
   prenom:{
      type: String,
      default:"",

    },
   tel: {
      type: String,

    },
   portable:{
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

    },
     observation: {
      type: String,

    },
   frais: {
      type:Object,
      default: [],
      },
},{versionKey:false});


const location = mongoose.model('location', UserSchema);
module.exports = location;