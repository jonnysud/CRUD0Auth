const validator = require('../helpers/validate');

const saveClient = (req, res, next) => {
    const validationRule = {
        firstName : 'required|string',
        lastName : 'required|string',
        email: 'required|email',
        favoriteColor: 'required|string',
        birthday: 'string'
    };
    validator(req.body, validationRule, {}, (err,status)=>{
        if(!status){
            res.status(412).send({
                sucess:false,
                message: 'Validation failed',
                data: err
            });
        }else{
            next();
        }
    })
}

const saveProduct = (req, res, next)=>{
    const validationRule = {
        productName : 'required|string',
        productCost : 'required'
    }
    validator(req.body, validationRule, {}, (err,status)=>{
        if(!status){
            res.status(412).send({
                sucess:false,
                message: 'Validation failed',
                data: err
            });
        }else{
            next();
        }
    })
}
module.exports = {
    saveClient,
    saveProduct
};