const express = require('express');
const router = express.Router();

const { entrenadorRepositorio } = require('../../container');
const EntrenadorController = require('../controllers/EntrenadorController');

const controller = new EntrenadorController(entrenadorRepositorio);

router.get('/', (req, res) =>
    controller.getEntrenadores(req, res)
);

router.post('/', (req, res) =>
    controller.createEntrenador(req, res)
);

module.exports = router;