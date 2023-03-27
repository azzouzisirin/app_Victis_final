const mongoose = require('mongoose');
const bcrypt=require('bcryptjs');

const UserSchema = new mongoose.Schema({
    
    pathDossier: { 
        type: String,
        default:'C:/Users/sarouna/Desktop/Session'
    

    },  
    addpath: { 
      type: String,
      default:''
  
 
  }, 
},{versionKey:false});


const InfoGeneral = mongoose.model('InfoGeneral', UserSchema);
module.exports = InfoGeneral;