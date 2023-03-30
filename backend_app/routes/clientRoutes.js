const express = require('express');
const router = express.Router();
const { getAllclients,getclientByRaison, getclientById,getclientByUsername, updateclient, deleteclient,search,Register } = require('../controllers/clientController');
  
router.route('/search').get(search); 
router.route('/:id').get(getclientById);
router.route('/findByRaison/:raisonSociale').get(getclientByRaison); 
router.route('/findByRaisonAndNom/:raisonSociale/:username').get(getclientByUsername);
router.route('/:id').put(updateclient);   
router.route('/:id').delete(deleteclient);
 
router.route('/register').post(Register); 
  
router.route('/').get(getAllclients);
 
module.exports = router;