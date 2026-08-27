const GetEntrenadoresUseCase = require('../../application/use-cases/GetEntrenadoresUseCase');
const CreateEntrenadorUseCase = require('../../application/use-cases/CreateEntrenadorUseCase');

class EntrenadorController {
    constructor(entrenadorRepositorio) {
        this.getEntrenadoresUseCase = new GetEntrenadoresUseCase(entrenadorRepositorio);
        this.createEntrenadorUseCase = new CreateEntrenadorUseCase(entrenadorRepositorio);
    }

    async getEntrenadores(req, res) {
        try {
            const entrenadores = await this.getEntrenadoresUseCase.execute();

            res.status(200).json({ success: true, data: entrenadores });
        } catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }
    }

    async createEntrenador(req, res) {
        try {
            const newEntrenador = await this.createEntrenadorUseCase.execute(req.body);

            res.status(201).json({ success: true, data: newEntrenador });
        } catch (error) {
            res.status(400).json({ success: false, error: error.message });
        }
    }
}

module.exports = EntrenadorController;