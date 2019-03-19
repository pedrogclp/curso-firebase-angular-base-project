'use strict'

const authService = require('../auth/auth.service');
const express = require('express');
const controller = require('./creditos.controller');
const router = express.Router();

router.get('/', authService.isAuthenticated, controller.obtenerCreditos);
router.get('/:id', authService.isAuthenticated, controller.obtenerCreditoPorId);
router.put('/:id', authService.isAuthenticated, controller.actualizarCredito);
router.post('/', authService.isAuthenticated, controller.agregarCredito);
router.delete('/:id', authService.isAuthenticated,controller.eliminarCredito);

module.exports = router;
