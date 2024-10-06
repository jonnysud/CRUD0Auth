const mongodb = require('../data/databases');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) =>{
    const result = await mongodb.getDatabase().db().collection('products').find();
    result.toArray().then((products)=>{
        res.setHeader("Content-Type", "application/json");
        res.status(200).json(products);
    })
}
const getSingle = async (req, res) =>{
    const productId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('products').find({_id:productId});
    result.toArray().then((products)=>{
        res.setHeader("Content-Type", "application/json");
        res.status(200).json(products[0]);
    })
}

const createProduct = async (req, res) =>{
    const product = {
        productName : req.body.productName,
        productCost : req.body.productCost
    };
    const response = await mongodb.getDatabase().db().collection('products').insertOne(product);
    if(response.acknowledged){
        res.status(204).send();
    } else{
        res.status(500).json(response.error || 'Some error occurred while creating the product.');
    }
}

const updateProduct = async (req, res) =>{
    const productId = new ObjectId(req.params.id);
    const product = {
        productName : req.body.productName,
        productCost : req.body.productCost
    };
    const response = await mongodb.getDatabase().db().collection('products').replaceOne({_id:productId}, product);
    if(response.modifiedCount > 0){
        res.status(204).send();
    } else{
        res.status(500).json(response.error || 'Some error occurred while updating the product.');
    }
}

const deleteProduct = async (req, res) =>{
    const productId = new ObjectId(req.params.id);
    const response = await mongodb.getDatabase().db().collection('products').deleteOne({_id:productId});
    if(response.deletedCount > 0){
        res.status(204).send();
    } else{
        res.status(500).json(response.error || 'Some error occurred while updating the user.');
    }
}

module.exports = 
{
    getAll,
    getSingle,
    createProduct,
    updateProduct,
    deleteProduct
}