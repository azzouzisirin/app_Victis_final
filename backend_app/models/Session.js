const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

numSession  : {
    type: String,
    default:""

},
numDevis: {
    type: String,
       default:""
},
nomDossie: {
    type: String,
       default:""
},
etatSession: {
    type: String,
       default:"en attendant"
},

 
   
});


const Session = mongoose.model('Session', UserSchema);
module.exports = Session;