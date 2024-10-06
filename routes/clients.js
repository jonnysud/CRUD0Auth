const express = require("express");
const router = express.Router();

const clientController = require("../controllers/clients");

router.get('/', clientController.getAll); 

router.get('/:id', clientController.getSingle);

router.post('/', clientController.createClient);

router.put('/:id', clientController.updateClient);

router.delete('/:id', clientController.deleteClient);

module.exports = router;