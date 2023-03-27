const express = require('express');
const router = express.Router();
const { getAllprospects,checkProcpect,getprospectByRaison, getprospectById,getprospectByUsername, updateprospect, deleteprospect,search,Register } = require('../controllers/prospectController');
  
router.route('/search').get(search);
router.route('/:id').get(getprospectById);
router.route('/findByRaison/:raisonSociale').get(getprospectByRaison); 
router.route('/findByRaisonAndNom/:raisonSociale/:username').get(getprospectByUsername);
router.route('/:id').put(updateprospect);
router.route('/:id').delete(deleteprospect);
 
router.route('/register').post(Register); 
router.route('/checkprocpect/:id').get(checkProcpect);
router.route('/').get(getAllprospects);
 
module.exports = router;