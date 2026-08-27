const express = require('express');
const router = express.Router();

const { horarioRepositorio } = require('../../container');
const HorarioController = require('../controllers/HorarioController');

const controller = new HorarioController(horarioRepositorio);

router.get('/', (req, res) =>
    controller.getHorarios(req, res)
);

router.post('/', (req, res) =>
    controller.createHorario(req, res)
);

module.exports = router;