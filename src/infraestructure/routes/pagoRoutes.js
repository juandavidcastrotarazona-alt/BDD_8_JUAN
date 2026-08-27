const express = require('express');
const router = express.Router();

const { pagoRepositorio } = require('../../container');
const PagoController = require('../controllers/PagoController');

const controller = new PagoController(pagoRepositorio);

router.get('/', (req, res) =>
    controller.getPagos(req, res)
);

router.post('/', (req, res) =>
    controller.createPago(req, res)
);

module.exports = router;