const express = require('express');
const router = express.Router();
const { getAlloffres, getoffreById,getoffreByCategorie, updateoffre, deleteoffre,search, Register } = require('../controllers/offreController');
  
router.route('/search').get(search); 
router.route('/:id').get(getoffreById);
router.route('/findByCateg/:categorie').get(getoffreByCategorie);
   
router.route('/:id').put(updateoffre);  
router.route('/:id').delete(deleteoffre);
router.route('/register').post(Register);  


router.route('/').get(getAlloffres);
 
module.exports = router; 