const express = require('express');
const router = express.Router();
const { getAllFinanceurs,getAllName,getFinanceurByUsername, getFinanceurById,getFinanceurByRaison, updateFinanceur, deleteFinanceur,search, Register } = require('../controllers/FinanceurController');
 
router.route('/search').get(search);
router.route('/:id').get(getFinanceurById);
router.route('/:id').put(updateFinanceur);
router.route('/:id').delete(deleteFinanceur);
router.route('/register').post(Register); 
router.route('/findByRaison/:raisonSocial').get(getFinanceurByRaison);
router.route('/findByRaisonAndNom/:raisonSociale/:username').get(getFinanceurByUsername);
    
router.route('/').get(getAllFinanceurs);
router.route('/getAllName').get(getAllName);

module.exports = router;