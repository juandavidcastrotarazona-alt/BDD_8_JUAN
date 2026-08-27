const express = require('express');
const router = express.Router();

const { reservaRepositorio } = require('../../container');
const ReservaController = require('../controllers/ReservaController');

const controller = new ReservaController(reservaRepositorio);

router.get('/', (req, res) =>
    controller.getReservas(req, res)
);

router.post('/', (req, res) =>
    controller.createReserva(req, res)
);

module.exports = router;