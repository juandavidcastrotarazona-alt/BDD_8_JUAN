const Horario = require('../../domain/entities/Horario');
const IHorarioRepositorio = require('../../domain/repositories/IHorarioRepositorio');

class HorarioRepositorio extends IHorarioRepositorio {
    constructor(dbPool) {
        super();
        this.dbPool = dbPool;
    }

    async getAll() {
        const result = await this.dbPool.query('SELECT * FROM horario');
        return result.rows.map(row => new Horario(row));
    }

    async create(horarioData) {
        const result = await this.dbPool.query(
            `INSERT INTO horario
      (dia_semana, hora_inicio, hora_fin)
      VALUES ($1,$2,$3)
      RETURNING *`,
            [
                horarioData.dia_semana,
                horarioData.hora_inicio,
                horarioData.hora_fin
            ]
        );

        return new Horario(result.rows[0]);
    }
}

module.exports = HorarioRepositorio;