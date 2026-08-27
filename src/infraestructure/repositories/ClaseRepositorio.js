const Clase = require('../../domain/entities/Clase');
const IClaseRepositorio = require('../../domain/repositories/IClaseRepositorio');

class ClaseRepositorio extends IClaseRepositorio {
    constructor(dbPool) {
        super();
        this.dbPool = dbPool;
    }

    async getAll() {
        const result = await this.dbPool.query('SELECT * FROM clase');
        return result.rows.map(row => new Clase(row));
    }

    async create(claseData) {
        const result = await this.dbPool.query(
            `INSERT INTO clase
      (nombre, nivel, fecha_inicio, fecha_fin,
      capacidad_maxima, estado, id_entrenador,
      id_cancha, id_horario)
      VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)
      RETURNING *`,
            [
                claseData.nombre,
                claseData.nivel,
                claseData.fecha_inicio,
                claseData.fecha_fin,
                claseData.capacidad_maxima,
                claseData.estado,
                claseData.id_entrenador,
                claseData.id_cancha,
                claseData.id_horario
            ]
        );

        return new Clase(result.rows[0]);
    }
}

module.exports = ClaseRepositorio;