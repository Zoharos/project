const express = require('express'); 
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('./webpack.config.js');
const mongoose = require('mongoose');
const http = require('http');
const https = require('https');
const fs = require('fs');
const cors = require('cors');
const login = require('./server/api/login')


const privateKey  = fs.readFileSync('server/encryption/localhost.key', 'utf8');
const certificate = fs.readFileSync('server/encryption/localhost.crt', 'utf8');
const credentials = {key: privateKey, cert: certificate};



const app = express();
app.use(cors());
app.use(webpackMiddleware(webpack(webpackConfig)));

const uri = "mongodb+srv://real-nadlan-users:z8LzAyjpdk4tXpOI@golancorporation-cyaxt.gcp.mongodb.net/Real-Nadlan?retryWrites=true";
mongoose.connect(uri, {useNewUrlParser: true});

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.get('/real_estate', (req, res) => {
  res.redirect('/');
})

app.use('/api/login',login);

app.listen(4000, () => {
  console.log('Listening');
});

const httpServer = http.createServer(app, () => {
  console.log('Listening HTTP');
});
const httpsServer = https.createServer(credentials,app, () => {
  console.log('Listening HTTPs')
});

httpServer.listen(8080);
httpsServer.listen(8443);