const mongoose = require('mongoose');
const bcrypt=require('bcryptjs');

const UserSchema = new mongoose.Schema({
    
    email: { 
        type: String,
        unique: true, 
        default:""
 
    },  
    titre: {
      type: String,
      default:""
  },
    username: { 
      type: String,

  },
    raisonSociale: {
        type: String,
        default:""

    },
    portable: {
        type: String,
        default:""

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
      default:""

    },
  
    adresse_1: {
      type: String,
      default:""

    },
    adresse_2: {
      type: String,
      default:""

    },
    codeVille: {
      type: String,


    }
},{versionKey:false});


const Formateur = mongoose.model('client', UserSchema);
module.exports = Formateur;