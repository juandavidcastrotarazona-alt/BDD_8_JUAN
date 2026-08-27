class IClaseRepositorio {
    async getAll() {
        throw new Error('Método getAll() no implementado');
    }

    async getById(id) {
        throw new Error('Método getById() no implementado');
    }

    async create(claseData) {
        throw new Error('Método create() no implementado');
    }
}

module.exports = IClaseRepositorio;