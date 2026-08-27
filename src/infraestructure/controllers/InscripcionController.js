const GetInscripcionesUseCase = require('../../application/use-cases/GetInscripcionesUseCase');
const CreateInscripcionUseCase = require('../../application/use-cases/CreateInscripcionUseCase');

class InscripcionController {
    constructor(inscripcionRepositorio) {
        this.getInscripcionesUseCase = new GetInscripcionesUseCase(inscripcionRepositorio);
        this.createInscripcionUseCase = new CreateInscripcionUseCase(inscripcionRepositorio);
    }

    async getInscripciones(req, res) {
        try {
            const inscripciones = await this.getInscripcionesUseCase.execute();

            res.status(200).json({ success: true, data: inscripciones });
        } catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }
    }

    async createInscripcion(req, res) {
        try {
            const newInscripcion = await this.createInscripcionUseCase.execute(req.body);

            res.status(201).json({ success: true, data: newInscripcion });
        } catch (error) {
            res.status(400).json({ success: false, error: error.message });
        }
    }
}

module.exports = InscripcionController;