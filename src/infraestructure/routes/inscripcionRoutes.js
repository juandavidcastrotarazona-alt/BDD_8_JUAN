const express = require('express');
const router = express.Router();

const { inscripcionRepositorio } = require('../../container');
const InscripcionController = require('../controllers/InscripcionController');

const controller = new InscripcionController(inscripcionRepositorio);

router.get('/', (req, res) =>
    controller.getInscripciones(req, res)
);

router.post('/', (req, res) =>
    controller.createInscripcion(req, res)
);

module.exports = router;