'use strict';
require('zone.js/dist/zone-node');
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');

var admin = require("firebase-admin");
var serviceAccount = require("./firebase-creditos.json");

const app = express();

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://creditos-60ac0.firebaseio.com"
});

app.use(bodyParser.json());
app.use(express.static(`${__dirname}/dist`));

require('./server/routes')(app);

app.listen(3000, () => {
  console.log(`Listening on http://localhost:3000`);
});