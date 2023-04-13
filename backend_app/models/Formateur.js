const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
   
  username: { 
    type: String,
},
    email: { 
        type: String,
        unique: true,
    },
    portable: {
        type: String,
    },
    titre: {
        type: String,
    },
    raisonSociale: {
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

    },
    assujtTva: {
      type: Boolean,
      default:false

    }, 
    checkfrais: {
      type: Boolean,
      default:false

    }, 
 
    tva: {
      type: String,
      

    }, 
    fraisDeplaccement: {
      type: String,

    },
    frais: {
      type:Object,
      default: [],
      },
      nomFichie:{
        type: String,
  
      }
},{versionKey:false});


const Formateur = mongoose.model('Formateur', UserSchema);
module.exports = Formateur;