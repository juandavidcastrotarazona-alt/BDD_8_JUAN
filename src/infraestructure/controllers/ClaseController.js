const GetClasesUseCase = require('../../application/use-cases/GetClasesUseCase');
const CreateClaseUseCase = require('../../application/use-cases/CreateClaseUseCase');

class ClaseController {
    constructor(claseRepositorio) {
        this.getClasesUseCase = new GetClasesUseCase(claseRepositorio);
        this.createClaseUseCase = new CreateClaseUseCase(claseRepositorio);
    }

    async getClases(req, res) {
        try {
            const clases = await this.getClasesUseCase.execute();

            res.status(200).json({ success: true, data: clases });
        } catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }
    }

    async createClase(req, res) {
        try {
            const newClase = await this.createClaseUseCase.execute(req.body);

            res.status(201).json({ success: true, data: newClase });
        } catch (error) {
            res.status(400).json({ success: false, error: error.message });
        }
    }
}

module.exports = ClaseController;