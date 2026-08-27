const Cancha = require('../../domain/entities/Cancha');
const ICanchaRepositorio = require('../../domain/repositories/ICanchaRepositorio');

class CanchaRepositorio extends ICanchaRepositorio {
    constructor(dbPool) {
        super();
        this.dbPool = dbPool;
    }

    async getAll() {
        const result = await this.dbPool.query('SELECT * FROM cancha');
        return result.rows.map(row => new Cancha(row));
    }

    async create(canchaData) {
        const result = await this.dbPool.query(
            `INSERT INTO cancha
      (nombre, tipo_superficie, ubicacion, capacidad, estado)
      VALUES ($1,$2,$3,$4,$5)
      RETURNING *`,
            [
                canchaData.nombre,
                canchaData.tipo_superficie,
                canchaData.ubicacion,
                canchaData.capacidad,
                canchaData.estado
            ]
        );

        return new Cancha(result.rows[0]);
    }
}

module.exports = CanchaRepositorio;