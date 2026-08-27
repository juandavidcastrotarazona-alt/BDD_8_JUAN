const Inscripcion = require('../../domain/entities/Inscripcion');
const IInscripcionRepositorio = require('../../domain/repositories/IInscripcionRepositorio');

class InscripcionRepositorio extends IInscripcionRepositorio {
    constructor(dbPool) {
        super();
        this.dbPool = dbPool;
    }

    async getAll() {
        const result = await this.dbPool.query('SELECT * FROM inscripcion');
        return result.rows.map(row => new Inscripcion(row));
    }

    async create(inscripcionData) {
        const result = await this.dbPool.query(
            `INSERT INTO inscripcion
      (id_cliente, id_clase, fecha_inscripcion, estado)
      VALUES ($1,$2,$3,$4)
      RETURNING *`,
            [
                inscripcionData.id_cliente,
                inscripcionData.id_clase,
                inscripcionData.fecha_inscripcion,
                inscripcionData.estado
            ]
        );

        return new Inscripcion(result.rows[0]);
    }
}

module.exports = InscripcionRepositorio;