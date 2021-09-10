const express= require('express');
const {join} = require('path');
const fs = require('fs');
const router = express.Router();
const getPosts = require('../controllers/posts.js/getposts');
const signUp = require('../controllers/Authentication/signup');


router.get('/',(req,res) => {
    res.sendFile(join(__dirname,'..','..','public','index.html'))
});

router.get('/posts', getPosts);
router.post('/signup', signUp );

module.exports = router;
