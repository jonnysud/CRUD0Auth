const router = require('express').Router();

/*router.get('/', (req,res)=>{
    res.send('Hello World');
})*/

router.use('/clients', require('./clients'));
router.use('/products', require('./product'));

module.exports = router;