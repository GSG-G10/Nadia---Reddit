require('env2')('env');
const express = require('express');
const compression = require ('compression');
const {join} = require('path');
const cookiePars =require('cookie-parser');
const router =require('./routes');

const app = express();

app .set('PORT',process.env.POST || 8000);

app.disable('x-powered-by');

app.use(express.static(join(__dirname,'..','public')));
app.use(cookiePars());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(router);

module.exports = app;
