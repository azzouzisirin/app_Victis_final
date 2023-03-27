const express = require('express');
const router = express.Router();
const { getAlllocations, getlocationById,getlocationByRaisonSociale, updatelocation, deletelocation,search,Login, Register } = require('../controllers/locationController');
  
router.route('/search').get(search);
router.route('/:id').get(getlocationById);
router.route('/:id').put(updatelocation);
router.route('/:id').delete(deletelocation);
router.route('/register').post(Register); 
router.route('/login').post(Login);
router.route('/getByRaison/:raisonSociale').get(getlocationByRaisonSociale);
 
router.route('/').get(getAlllocations);

module.exports = router; 