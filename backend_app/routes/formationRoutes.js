const express = require('express');
const router = express.Router();
const { getAllFormations, getFormationById,getFormationByCategorieAndNom,getFormationByCategorie, updateFormation, deleteFormation,search, Register } = require('../controllers/formationController');
  
router.route('/search').get(search);
router.route('/:id').get(getFormationById);
router.route('/findByCateg/:designation').get(getFormationByCategorie);
router.route('/findByCategAndNom/:designation/:type').get(getFormationByCategorieAndNom);

router.route('/:id').put(updateFormation);
router.route('/:id').delete(deleteFormation);
router.route('/register').post(Register);
 
router.route('/').get(getAllFormations);
  
module.exports = router;