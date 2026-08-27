const GetHorariosUseCase = require('../../application/use-cases/GetHorariosUseCase');
const CreateHorarioUseCase = require('../../application/use-cases/CreateHorarioUseCase');

class HorarioController {
    constructor(horarioRepositorio) {
        this.getHorariosUseCase = new GetHorariosUseCase(horarioRepositorio);
        this.createHorarioUseCase = new CreateHorarioUseCase(horarioRepositorio);
    }

    async getHorarios(req, res) {
        try {
            const horarios = await this.getHorariosUseCase.execute();

            res.status(200).json({ success: true, data: horarios });
        } catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }
    }

    async createHorario(req, res) {
        try {
            const newHorario = await this.createHorarioUseCase.execute(req.body);

            res.status(201).json({ success: true, data: newHorario });
        } catch (error) {
            res.status(400).json({ success: false, error: error.message });
        }
    }
}

module.exports = HorarioController;