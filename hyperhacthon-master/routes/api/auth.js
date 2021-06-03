const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const auth = require('../../middleware/auth');
const jwt = require('jsonwebtoken');
const config = require('config');
const {check,validationResult} = require('express-validator');
const Learner = require('../../models/Learner');

// @router   POST api/auth
// @desc     login learner & get token
// @access   public

router.post('/', [
    check('email','please enter a valid email address').isEmail(),
    check('password','password should be min 6 character long').exists()
],async (req,res)=>{

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors : errors.array() });
    }

    const { email, password} = req.body;

    try {
        
        let learner = await Learner.findOne({ email});

        if(!learner){
            res.status(400).json({errors: [{msg: 'invalid credentials' }] });
        }

        const isMatch = await bcrypt.compare(password,learner.password);

        if(!isMatch){
            res.status(400).json({errors: [{msg: 'invalid credentials' }] }); 
        }

        const payload = {
            learner: {
                id : learner.id,
            }
        }

        jwt.sign(payload, 
            config.get('secretkey'), 
            {expiresIn : 3600000}, 
            (err ,token)=>{
                if(err) throw err;
                res.json({ token });
            });

    } catch (err) {
        console.error(err.message);
        res.status(500).send('server error');
    }
});

module.exports = router;