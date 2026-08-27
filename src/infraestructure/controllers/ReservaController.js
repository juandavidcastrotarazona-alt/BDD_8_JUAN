const GetReservasUseCase = require('../../application/use-cases/GetReservasUseCase');
const CreateReservaUseCase = require('../../application/use-cases/CreateReservaUseCase');

class ReservaController {
    constructor(reservaRepositorio) {
        this.getReservasUseCase = new GetReservasUseCase(reservaRepositorio);
        this.createReservaUseCase = new CreateReservaUseCase(reservaRepositorio);
    }

    async getReservas(req, res) {
        try {
            const reservas = await this.getReservasUseCase.execute();

            res.status(200).json({ success: true, data: reservas });
        } catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }
    }

    async createReserva(req, res) {
        try {
            const newReserva = await this.createReservaUseCase.execute(req.body);

            res.status(201).json({ success: true, data: newReserva });
        } catch (error) {
            res.status(400).json({ success: false, error: error.message });
        }
    }
}

module.exports = ReservaController;