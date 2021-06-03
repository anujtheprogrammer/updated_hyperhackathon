
const { json } = require('express');
const express = require ('express');
const router = express.Router();
const { check, validationResult} = require('express-validator');
const { post } = require('request');
const auth = require('../../middleware/auth');
const Profile = require('../../models/Profile');
const Learner = require('../../models/Learner');
const Mentor = require('../../models/Mentor');
const Post = require('../../models/Addpost');

// @route   POST api/addpost
// @desc    Create a post
// @access  Public

router.post('/',
    [ 
        [
            check('post', 'Text is required')
            .not()
            .isEmpty()
        ]
    ], 
    
    async (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
        }
        
        try {
            //console.log(req.mentor);
            //const user = await Mentor.findById(req.user.id).select('-password');
            
            const newPost =  new Post({
                name : req.body.name,
                post: req.body.post,
                location: req.body.location,
                about_company: req.body.about_company,
                responsibility: req.body.responsibility,
                requirements: req.body.requirements,
                //user: req.user.id
            });

            const post = await newPost.save();
            res.json(post);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('server error');
        }
    }
);


// @route   GET api/addpost
// @desc    Get all projects
// @access  Private

router.get('/', auth, async(req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('server error');
    }
});



// @route   PUT api/addpost/applied/:id
// @desc    apply for a post
// @access  Private

router.put('/applied/:id', auth, async(req, res) =>{
    try {
        const post = await Post.findById(req.params.id);

        // check if the post is already applied
        if(post.applied.filter(like => String(like.user) === req.user.id).length >0){
            return res.status(400).json({msg:'post already applied'});
        }
        post.applied.unshift({user: req.user.id});
        await post.save();
        res.json(post.applied);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('server error');
    }
});



// @route   PUT api/addpost/withdraw/:id
// @desc    withdraw application for a post
// @access  Private
router.put('/withdraw/:id', auth, async(req, res) =>{
    try {
        const post = await Post.findById(req.params.id);

        // check if the post is already applied
        if(post.applied.filter(like => String(like.user) === req.user.id).length === 0){
            return res.status(400).json({msg:'Post is not yet been applied'});
        }

        // Get remove index
        const removeIndex = post.applied.map(like => String(like.user)).indexOf(req.user.id);
        post.applied.splice(removeIndex, 1);

        await post.save();
        res.json(post.applied);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('server error');
    }
});


module.exports = router;