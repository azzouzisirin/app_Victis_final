const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
   
  username: { 
    type: String,
},
titre: { 
  type: String,
  default:"M."
},
    email: { 
        type: String, 
        unique: true,
    },
    host: { 
      type: String, 
      unique: true,
  },
    password: {
        type: String,
    },
   
    nom: {
        type: String,
    },
    prenom:{
      type: String,

    },
     portable: {
      type: String,

    },
    tel: {
      type: String,

    },
 
    PassEmail:{
      type: String,  

    },
    shemaDossie:{
      type: String, 
      default:''

    },
    fonction:{
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


const utilisateur = mongoose.model('utilisateur', UserSchema);
module.exports = utilisateur;