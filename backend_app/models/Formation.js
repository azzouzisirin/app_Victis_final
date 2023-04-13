const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
   
  type: { 
        type: String,
    },  
     
    designation: {
        type: String,
    }, 
    DureeJour: {
        type: String  
    },
    DureeHeur: {
        type: String
    },
    Prix: {
        type: String,
    },
    nomFichie:{
      type: String,

    }
},{versionKey:false});


const Formation = mongoose.model('Formation', UserSchema);
module.exports = Formation;