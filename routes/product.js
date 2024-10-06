const express = require("express");
const router = express.Router();
const { saveProduct } = require("../middleware/validate");

const productController = require("../controllers/products");

router.get('/', productController.getAll); 

router.get('/:id', productController.getSingle);

router.post('/', saveProduct, productController.createProduct);

router.put('/:id', saveProduct, productController.updateProduct);

router.delete('/:id', productController.deleteProduct);

module.exports = router;