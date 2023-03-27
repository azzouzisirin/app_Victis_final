const express = require('express');
const router = express.Router();
const { getAllutilisateurs, getutilisateurById,getutilisateurByUsername, updateutilisateur, deleteutilisateur,search,Login, Register } = require('../controllers/utilisateurController');
  
router.route('/search').get(search);
router.route('/:id').get(getutilisateurById);
router.route('/:id').put(updateutilisateur);
router.route('/:id').delete(deleteutilisateur);
router.route('/register').post(Register);
router.route('/login').post(Login);
router.route('/:titre/:username').get(getutilisateurByUsername);

router.route('/').get(getAllutilisateurs);

module.exports = router;