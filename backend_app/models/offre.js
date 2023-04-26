const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    _id: {
        type: String
    },
  IdClient: { 
        type: String,
    },   

   titre: { 
        type: String,
    },    
  IdFormation: {
        type: String, 
      },
   TypeFormation: {
        type: String,
        default:"En intra-entreprise",
 
    },
    remarque: {
        type: String,

    },
  DateDebut: {
        type: String,

    },
   DateFin: {
        type: String,


    },
    chekAutres: {
        type: Boolean,
        default:false

    },
    chekResponsable: {
        type: Boolean,
        default:false


    },
   rythme: {
        type: String,
        default:"En continu",
 
    },
    selectedHeure:{
        type: String,
        default:"Cours du jour",

    },
   HeureFormation:{
        type: String,
        default:"de 9h00 à 12h00 et de 13h00 à 17h00",
    },
   DureeJour: {
        type: String,

    },
   DureeHeur: {
        type: String,

    },
   NbStage: {
        type: Number,

    },
   PrixJournal: {
        type: Number,

    },
   PrixTotal: {
        type: Number,
        default:0

    },
    
   Tva: {
        type: Number,
        default: 20,

    },
  
  PrixTVA: {
    type: Number,
    default:0

},
 
prixNet: {
    type: Number,
    default:0

},

 
   PrixTTC: {
        type: Number,

    },
 
  TypeFinance: {
        type: String,
        default:"0",
    },
  TranspDistance: {
        type: String,
        default:"0",


    },
    typeDeplacement: {
        type: String,

    },
    lieuFormation: {
        type: String,
        default:"à distance"

    }, 
    codeVilleFormation: {
        type: String,
        default:""

    }, 
   typeFormation: {
        type: String,
        default:""

    },
   designiationFormation: {
        type: String,
        default:""
    },
   BaremKilometre  : {
        type: String,
        default:"0.661"

    },
    hotel : {
        type: String,

    },
   petitDej : {
        type: Number,
        default:15,

    },
   dejune : {
        type: Number,
        default:15,

    },
   diner : {
        type: Number,
        default:15,

    },
   fraisRestau: {
        type: String,
        default:"15"

    },

   idFormateur: {
        type: String,

    },
    ParcourCollectif: {
        type: Boolean,

    },
   FraisDeplacement: {
        type: String,

    },
  heberge: {
        type: String,

    },
   TotalFrais: {
        type: String,

    },
  Panier: {
        type: String,

    },
  FraisDeplacementJour: {
        type: String,

    },
   checkLocal: {
        type: Boolean,

    },
   checkEngin: {
        type: Boolean,

    },
   RasionLocation: {
        type: String,

    },
  typeLocation: {
        type: String,

    },
  TotalFraisJour: {
        type: String,

    },


   finance: {
      type:Object,
      default: [],
      },
    CalendrieFormation: {
        type:Object,
        default: [],
        },

        listStagaire: {
            type:Object,
            default: [],
            },
            listSousResponsable: {
                type:Object,
                default: [],
                },
   idopco: {
        type: String, 
        default: "",
    },
    PrixClient: {
        type:Number,
      
        },
  
},{versionKey:false});


const Offre = mongoose.model('Offre', UserSchema);
module.exports = Offre;