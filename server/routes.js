'use strict';
function route(app) {


  app.use('/api/creditos', require('/api/creditos'));

  app.get('/', angularRouter);
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
    .get();
  app.get('*', angularRouter);
}

function angularRouter(req, res) {
  res.send({ estado: 'error', mensaje: 'Not found 404' })
}

module.exports = route;
