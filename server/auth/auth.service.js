'use strict';
var compose = require('composable-middleware');
var admin = require("firebase-admin");
/**
 * Attaches the user object to the request if authenticated
 * Otherwise returns 403
 */
module.exports.isAuthenticated = function (req, res, next) {
  admin.auth().verifyIdToken(req.headers.authorization)
    .then(function (decodedToken) {
      req.uid = decodedToken.uid
      next();
    }).catch(function (error) {
      console.error(error);
      return res.status(401).end();
    })
}
