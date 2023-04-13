const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const env = require('dotenv')
const clientRoutes = require('./routes/clientRoutes');
const prospectRoutes = require('./routes/prospectRoutes');
const fsExtra = require('fs-extra')
const AdmZip = require('adm-zip');
const fs = require("fs");
const nodemailer = require('nodemailer')

const bodyParser = require('body-parser');
env.config()
 
const multer = require("multer");
const { 
  GridFsStorage
} = require("multer-gridfs-storage");
const s='';
const locationRoutes = require('./routes/locationRoutes');

const formateurRoutes = require('./routes/formateurRoutes');
const utilisateurRoutes = require('./routes/utilisateurRoutes');
const financeurRoutes = require('./routes/FinanceurRoutes');

const formationRoutes = require('./routes/formationRoutes');
const sessionRoutes = require('./routes/sessionRoutes');
const offreRoutes = require('./routes/offreRoutes');


const app = express();
const port = process.env.PORT || 4000;
let bucket;
mongoose.connection.on("connected", () => {
    var client = mongoose.connections[0].client;
    var db = mongoose.connections[0].db;
    bucket = new mongoose.mongo.GridFSBucket(db, {
      bucketName: "newBucket"
    });
    console.log(bucket);
  });
  app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));

const storage = new GridFsStorage({
  url: process.env.MONGODB_URL,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      const filename = file.originalname;
      const fileInfo = {
        filename: filename,
        bucketName: "newBucket"
      };
      resolve(fileInfo);
      s=fileInfo.filename

    });
  }
});

const upload = multer({
  storage
}); 
mongoose.set('strictQuery', true);
app.get("/fileinfo/:filename", (req, res) => {
  const file = bucket
    .find({
      filename: req.params.filename 
    })
    .toArray((err, files) => {
      if (!files || files.length === 0) {
        return res.status(404)
          .json({
            err: "no files exist"
          });
      }
      bucket.openDownloadStreamByName(req.params.filename)
        .pipe(res);
    });
});

app.post("/upload", upload.single("file"), (req, res) => {
  res.status(200)
    .json("ok");
    
});
app.post('/sendemail',(req,res)=>{
  let smtpTransport = nodemailer.createTransport({
    host:req.body.host,
    port:465,
    secure:true,
    auth:{ 
        user:req.body.EmailUser,
        pass:req.body.PassEmail
    },
    tls:{rejectUnauthorized:false}
})

smtpTransport.sendMail({
    from:req.body.EmailUser,
    to:req.body.emailSend,
    subject:"test",
    html:"<br/> Bien cordialement."
  
},function(error,info){

    if(error){
        console.log(error);
    }
    else{
        res.send("Mail has been sended to your email. Check your mail")
    }
   
})
})
// MIDDLEWARES
app.use(cors());
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// ROUTES
app.use('/formateur', formateurRoutes);
app.use('/location', locationRoutes);

app.use('/utilisateur', utilisateurRoutes);
app.use('/financeur', financeurRoutes);

app.use('/formation', formationRoutes);
app.use('/offre', offreRoutes);

app.use('/session', sessionRoutes);

app.use('/client',clientRoutes);
app.use('/prospect',prospectRoutes);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());




   
// STRIPE CONNECTION

app.post('/newfolder/:nomFolder', async (req, res)=>{
  const path=require('path')
  const fs=require('fs')
  const desktopPath=path.join(req.body.pathDossier,req.body.addpath)
  const folderName=req.params.nomFolder;
  const folderPath=path.join(desktopPath,folderName);
  try {
  if(!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
    
    res.status(200).json("new file");
  } 
  else {res.status(200).json("exict")}
} catch (err) {
  console.log(err);
}
});

app.post('/rename',async(req,res)=>{
  const fs = require("fs")
  const path=require('path')

  const currPath=path.join(req.body.pathDossier,req.body.recendfolder);
const newPath =path.join(req.body.pathDossier,req.body.newfolder) ;

try {
  fs.renameSync(currPath, newPath)
  res.status(200).json("Successfully renamed the directory.")
} catch(err) {
  console.log(err)
}
})
mongoose.connect(process.env.MONGODB_URL, () => {
    console.log('Successfully connected to database.');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
    const os = require('os');
});

