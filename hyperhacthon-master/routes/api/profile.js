const express = require('express');
const request = require('request');
const config = require('config');
const router = express.Router();
const auth = require('../../middleware/auth');
const {check, validationResult} = require('express-validator');
const Profile = require('../../models/Profile');
const Learner = require('../../models/Learner');



// @route   GET api/profile/me
// @desc    get current users profile
// @access  Private


router.get('/me', auth, async(req, res) =>{
    try {
        
        const profile = await Profile.findOne({user : req.user.id}).
        populate('learner',['name']);
        if(!profile){
            return res.status(400).json({msg:'There is no profile for this user'});
        }
        res.json(profile);
    } catch (err) { 
        console.error(err.message);
        res.status(500).send('server error');
    }
});





// @router   post api/profile
// @desc     create or update user profile
// @access   private

router.post('/', auth ,async (req,res)=>{
    const {
        contact_number,
        github,
        education,
        experience,
        techstack,
        location,
        lname
    } = req.body;

    const profileFeilds = {};
    profileFeilds.user = req.user.id;
    if(contact_number) profileFeilds.contact_number = contact_number;
    if(github) profileFeilds.github = github;
    if(education) profileFeilds.education = education;
    if(experience) profileFeilds.experience = experience;
    if(techstack) profileFeilds.techstack = techstack;
    if(location) profileFeilds.location = location;
    if(lname) profileFeilds.lname = lname;

    try {
        let profile = await Profile.findOne({user : req.user.id});

        if(profile){
            // update this profile if found
            Profile = await Profile.findByIdAndUpdate({user : req.user.id}, {$set: profileFeilds}, {new:true});

            return res.json(profile);
        }

        // if profile not found
        profile = new Profile(profileFeilds);

        await profile.save();
        res.json(profile);

    } catch (err) {
        console.error(err.message);
        res.status(500).send('server error');
    }
});

module.exports = router;