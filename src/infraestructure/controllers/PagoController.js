const GetPagosUseCase = require('../../application/use-cases/GetPagosUseCase');
const CreatePagoUseCase = require('../../application/use-cases/CreatePagoUseCase');

class PagoController {
    constructor(pagoRepositorio) {
        this.getPagosUseCase = new GetPagosUseCase(pagoRepositorio);
        this.createPagoUseCase = new CreatePagoUseCase(pagoRepositorio);
    }

    async getPagos(req, res) {
        try {
            const pagos = await this.getPagosUseCase.execute();

            res.status(200).json({ success: true, data: pagos });
        } catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }
    }

    async createPago(req, res) {
        try {
            const newPago = await this.createPagoUseCase.execute(req.body);

            res.status(201).json({ success: true, data: newPago });
        } catch (error) {
            res.status(400).json({ success: false, error: error.message });
        }
    }
}

module.exports = PagoController;