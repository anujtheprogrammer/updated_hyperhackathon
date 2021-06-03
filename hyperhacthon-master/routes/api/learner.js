const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const {check,validationResult} = require('express-validator');
const Learner = require('../../models/Learner');
const Profile = require('../../models/Profile');

// @router   POST api/learner
// @desc     register learner
// @access   public

router.post('/', [
    check('name','enter a valid name').not().isEmpty(),
    check('email','please enter a valid email address').isEmail(),
    check('password','password should be min 6 character long').isLength({ min: 6 }),
], async (req,res)=>{
    
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors : errors.array()});
    }

    const {name, email, password,usertype} = req.body;

    try{
        // user should not already exist
        let learner = await Learner.findOne({ email });
        if(learner){
            res.status(400).json({ errors : [{ msg : 'user already exist'}]});
        }

        learner = new Learner({
            name,
            email,
            password,
            usertype,
        })

        const salt = await bcrypt.genSalt(10);
        learner.password = await bcrypt.hash(password, salt);

        await learner.save();

        // return jsonwebtokens
        const payload = {
            user: {
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
    } catch (err){
        console.error(err.message);
        res.status(500).send('server error');
    }
});


// @route   GET api/learner
// @desc    Get all learner
// @access  public

router.get('/', async(req, res) => {
    try {
        const profiles = await Profile.find();
        res.json(profiles);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('server error');
    }
});

module.exports = router;