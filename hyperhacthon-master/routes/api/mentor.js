const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const {check,validationResult} = require('express-validator');
const Mentor = require('../../models/Mentor');

// @router   POST api/mentor
// @desc     register mentor
// @access   public

router.post('/', [
    check('name','enter a valid name').not().isEmpty(),
    check('email','please enter a valid email address').isEmail(),
    check('password','password should be min 6 character long').isLength({ min: 6 }),
], async (req,res)=>{
    console.log("hii");
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors : errors.array()});
    }

    const {name, email, password,usertype} = req.body;

    try{
        // user should not already exist
        let mentor = await Mentor.findOne({ email });
        if(mentor){
            res.status(400).json({ errors : [{ msg : 'user already exist'}]});
        }

        mentor = new Mentor({
            name,
            email,
            password,
            usertype,
        })

        const salt = await bcrypt.genSalt(10);
        mentor.password = await bcrypt.hash(password, salt);

        await mentor.save();

        // return jsonwebtokens
        const payload = {
            user: {
                id : mentor.id,
            }
        }

        jwt.sign(payload, 
            config.get('secretkey'), 
            {expiresIn : 3600000}, 
            (err ,token)=>{
                if(err) throw err;
                res.json({ token });
            });
    } catch (err){
        console.error(err.message);
        res.status(500).send('server error');
    }
});




module.exports = router;