const express= require('express');
const {join} = require('path');
const fs = require('fs');
const router = express.Router();
const getPosts = require('../controllers/getposts');


router.get('/',(req,res) => {
    res.sendFile(join(__dirname,'..','..','public','index.html'))
});
router.get('/posts', getPosts);


module.exports = router;
