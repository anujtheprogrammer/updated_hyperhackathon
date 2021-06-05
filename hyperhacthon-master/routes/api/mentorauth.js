const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const auth = require('../../middleware/auth');
const jwt = require('jsonwebtoken');
const config = require('config');
const {check,validationResult} = require('express-validator');
const Mentor = require('../../models/Mentor');



// @router   POST api/mentorauth
// @desc     login mentor and recruiter & get token
// @access   public

router.post('/', [
    check('email','please enter a valid email address').isEmail(),
    check('password','password should be min 6 character long').exists()
],async (req,res)=>{
    //console.log("hii");
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors : errors.array() });
    }
    //console.log("hiii");
    const { email, password} = req.body;

    try {
        console.log("hiiooo");
        let mentor = await Mentor.findOne({ email});

        if(!mentor){
            res.status(400).json({errors: [{msg: 'invalid credentials' }] });
        }
        //console.log("hiii");
        const isMatch = await bcrypt.compare(password,mentor.password);

        if(!isMatch){
            res.status(400).json({errors: [{msg: 'invalid credentials' }] }); 
        }

        const payload = {
            mentor: {
                id : mentor.id,
            }
        }

        jwt.sign(payload, 
            config.get('secretkey'), 
            {expiresIn : 3600000}, 
            (err ,token)=>{
                if(err) throw err;
                res.json({ token,name:mentor.name,email });
            });

    } catch (err) {
        console.error(err.message);
        res.status(500).send('server error');
    }
});


module.exports = router;