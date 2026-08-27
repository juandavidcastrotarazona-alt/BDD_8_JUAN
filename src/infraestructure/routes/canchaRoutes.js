const express = require('express');
const router = express.Router();

const { canchaRepositorio } = require('../../container');
const CanchaController = require('../controllers/CanchaController');

const controller = new CanchaController(canchaRepositorio);

router.get('/', (req, res) =>
    controller.getCanchas(req, res)
);

router.post('/', (req, res) =>
    controller.createCancha(req, res)
);

module.exports = router;