const express = require("express");
const router = express.Router();
const {saveClient} = require("../middleware/validate");

const clientController = require("../controllers/clients");

router.get('/', clientController.getAll); 

router.get('/:id', clientController.getSingle);

router.post('/',saveClient, clientController.createClient);

router.put('/:id',saveClient, clientController.updateClient);

router.delete('/:id', clientController.deleteClient);

module.exports = router;