const router = require('express').Router();
const passport = require('passport');

/*router.get('/', (req,res)=>{
    res.send('Hello World');
})*/

//router.use('/', require('../swagger'));
router.use('/clients', require('./clients'));
router.use('/products', require('./product'));

router.get('/login', passport.authenticate('github'), (req, res)=>{});

router.get('/logout', (req, res, next)=>{
    req.logout((err)=>{
        if(err){
            return next(err);
        }
        res.redirect('/');
    })
})

module.exports = router;