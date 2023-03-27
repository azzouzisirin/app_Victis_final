const express = require('express');
const router = express.Router();
const { getAllFormateurs, getFormateurById,getFormateurByUsername, updateFormateur, deleteFormateur,search, Register } = require('../controllers/formateurController');
 
router.route('/search').get(search);
router.route('/:id').get(getFormateurById);
router.route('/:id').put(updateFormateur);
router.route('/:id').delete(deleteFormateur);
router.route('/register').post(Register); 
router.route('/findbyusername/:username').get(getFormateurByUsername);
 
router.route('/').get(getAllFormateurs);

module.exports = router;