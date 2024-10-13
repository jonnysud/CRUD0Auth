const express = require("express");
const router = express.Router();
//const {saveClient} = require("../middleware/validate");
const {isAuthenticated} = require('../middleware/authenticate');

const clientController = require("../controllers/clients");

router.get('/', clientController.getAll); 

router.get('/:id', clientController.getSingle);

router.post('/',isAuthenticated, clientController.createClient);

router.put('/:id',isAuthenticated, clientController.updateClient);

router.delete('/:id', isAuthenticated,clientController.deleteClient);

module.exports = router;