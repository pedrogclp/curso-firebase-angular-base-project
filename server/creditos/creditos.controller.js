'use strict'

const admin = require('firebase-admin');
const ref = admin.firestore().collection('creditos');

/*
'Creditos'
          1
            'Institución'
            'montoMin'
            'montoMax'
            'plazoMin'
            'plazoMax'
            'interes'
            '_id
*/

function obtenerCreditos(req, res){
  ref.get()
  .then(result => {
    var creditos = [];
    result.forEach( doc => {
      var credito = doc.data();
      credito['_id'] = doc.id;
      creditos.push(credito);
    });

    res.send({ estado: 'exito', mensaje: 'Créditos cargados', resultado: creditos });
  })
  .catch(error => {
    res.send({ estado: 'error', mensaje: 'Hubo un error cargando los créditos.' });
  })
}

function obtenerCreditoPorId(req, res) {
  var id = req.params.id;
  ref.doc(id).get()
    .then(result => {
      if(result.data()){
        var credito = result.data();
        credito['_id'] = result.id;
        res.send({ estado: 'exito', mensaje: 'Crédito cargado.', resultado: credito });
      }else{
        res.send({ estado: 'error', mensaje: 'No existe el crédito.' });
      }
    })
    .catch(error => {
      res.send({ estado: 'error', mensaje: 'Error al obtener el crédito.' });
    })
}

function actualizarCredito(req, res) {
  var id = req.params.id;
  var creditos = req.body;

  if (id === null || id === undefined || id === '') {
    res.send({ estado: 'error', mensaje: 'Error de ID al actualizar el crédito.' });
  }

  ref.doc(id).update(creditos)
  .then(result => {
    res.send({ estado: 'exito', mensaje: 'Crédito actualizado con éxito.' });
  })
  .catch(error => {
    res.send({ estado: 'error', mensaje: 'Error al actualizar los créditos.' });
  })
}

function agregarCredito(req, res) {
  var credito = req.body;
  ref.add(credito)
    .then(result => {
      res.send({ estado: 'exito', mensaje: 'Crédito agregado con éxito.' });
    })
    .catch(error => {
      res.send({ estado: 'error', mensaje: 'Error al agregar el crédito.' });
    })
}

function eliminarCredito(req, res) {
  var id = req.params.id;

  ref.doc(id).delete()
    .then(result => {
      res.send({ estado: 'exito', mensaje: 'Crédito eliminado con éxito.' });
    })
    .catch(error => {
      res.send({ estado: 'error', mensaje: 'Error al eliminar el crédito.' });
    })
}

module.exports = {
  obtenerCreditos,
  obtenerCreditoPorId,
  actualizarCredito,
  agregarCredito,
  eliminarCredito
}
