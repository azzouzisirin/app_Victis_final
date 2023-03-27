const mongoose = require('mongoose');
const bcrypt=require('bcryptjs');

const UserSchema = new mongoose.Schema({
    
    email: { 
        type: String,
        unique: true, 

    },  
  
    username: { 
      type: String,

  },
  titre: { 
    type: String,
    default:"Mr"
  },
    raisonSociale: {
        type: String,

    },
    portable: {
        type: String,

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


const Formateur = mongoose.model('prospect', UserSchema);
module.exports = Formateur;