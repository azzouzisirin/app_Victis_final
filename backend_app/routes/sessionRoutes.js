const express = require('express');
const router = express.Router();
const { mettreDansZip,viderDossier,getDonneFacturation,createPdf,getDonneFeuilEmagement,getDonneFormateur,createPdfConvocation,sendPdfConvocation,copeFilePdf, fetchPdf, sendPdf, getSessionById,getDonneOffre,getDonneDocument,getDonneConvocation,getDonneConvention, updateSession, deleteSession,search, Register } = require('../controllers/sessionController');
  
router.route('/search').get(search);
router.route('/:id').get(getSessionById);
router.route('/getDonneOffre/:id/:nomUtilisateur').get(getDonneOffre);
router.route('/getDonneDocument/:id/:nomStagaire').get(getDonneDocument);
router.route('/getDonneFormateur/:id').get(getDonneFormateur);

router.route('/getDonneFeuilEmagement/:id/:typeformation').post(getDonneFeuilEmagement);
router.route('/getDonneFacturation/:id').get(getDonneFacturation);

router.route('/getDonneConvocation/:id/:nomUtilisateur').get(getDonneConvocation);
router.get('/getDonneConvention/:id',getDonneConvention) 
 
router.route('/:id').put(updateSession);
router.route('/:id').delete(deleteSession);
router.route('/register').post(Register);
router.post('/createPdf/:nomPdf',createPdf) 
router.post('/copeFilePdf',copeFilePdf)  
router.post('/mettreDansZip/:typeFormation',mettreDansZip) 
router.get('/vider/dossie',viderDossier) 

      
router.get('/showPdf/:nomFile',fetchPdf) 
 
router.post('/createPdfConcocation/:typeSend',createPdfConvocation) 
router.post('/sendPdfConcocation/:typeSend',sendPdfConvocation) 

   

router.post('/send/pdf/:typeEnvoye',sendPdf) 
  
module.exports = router;