const express = require("express");
const router = express.Router();
//const { saveProduct } = require("../middleware/validate");
const {isAuthenticated} = require('../middleware/authenticate');
const productController = require("../controllers/products");

router.get('/', productController.getAll); 

router.get('/:id', productController.getSingle);

router.post('/', isAuthenticated, productController.createProduct);

router.put('/:id', isAuthenticated, productController.updateProduct);

router.delete('/:id', isAuthenticated,productController.deleteProduct);

module.exports = router;