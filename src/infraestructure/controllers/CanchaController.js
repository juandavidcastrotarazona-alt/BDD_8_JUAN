const GetCanchasUseCase = require('../../application/use-cases/GetCanchasUseCase');
const CreateCanchaUseCase = require('../../application/use-cases/CreateCanchaUseCase');

class CanchaController {
    constructor(canchaRepositorio) {
        this.getCanchasUseCase = new GetCanchasUseCase(canchaRepositorio);
        this.createCanchaUseCase = new CreateCanchaUseCase(canchaRepositorio);
    }

    async getCanchas(req, res) {
        try {
            const canchas = await this.getCanchasUseCase.execute();

            res.status(200).json({ success: true, data: canchas });
        } catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }
    }

    async createCancha(req, res) {
        try {
            const newCancha = await this.createCanchaUseCase.execute(req.body);

            res.status(201).json({ success: true, data: newCancha });
        } catch (error) {
            res.status(400).json({ success: false, error: error.message });
        }
    }
}

module.exports = CanchaController;