const Entrenador = require('../../domain/entities/Entrenador');
const IEntrenadorRepositorio = require('../../domain/repositories/IEntrenadorRepositorio');

class EntrenadorRepositorio extends IEntrenadorRepositorio {
    constructor(dbPool) {
        super();
        this.dbPool = dbPool;
    }

    async getAll() {
        const result = await this.dbPool.query('SELECT * FROM entrenador');
        return result.rows.map(row => new Entrenador(row));
    }

    async create(entrenadorData) {
        const result = await this.dbPool.query(
            `INSERT INTO entrenador
      (nombre, apellido, especialidad, telefono, email,
       fecha_contratacion, estado)
      VALUES ($1,$2,$3,$4,$5,$6,$7)
      RETURNING *`,
            [
                entrenadorData.nombre,
                entrenadorData.apellido,
                entrenadorData.especialidad,
                entrenadorData.telefono,
                entrenadorData.email,
                entrenadorData.fecha_contratacion,
                entrenadorData.estado
            ]
        );

        return new Entrenador(result.rows[0]);
    }
}

module.exports = EntrenadorRepositorio;