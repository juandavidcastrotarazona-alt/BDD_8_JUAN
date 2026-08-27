class IHorarioRepositorio {
    async getAll() {
        throw new Error('Método getAll() no implementado');
    }

    async getById(id) {
        throw new Error('Método getById() no implementado');
    }

    async create(horarioData) {
        throw new Error('Método create() no implementado');
    }
}

module.exports = IHorarioRepositorio;