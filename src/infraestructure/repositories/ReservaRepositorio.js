const Reserva = require('../../domain/entities/Reserva');
const IReservaRepositorio = require('../../domain/repositories/IReservaRepositorio');

class ReservaRepositorio extends IReservaRepositorio {
    constructor(dbPool) {
        super();
        this.dbPool = dbPool;
    }

    async getAll() {
        const result = await this.dbPool.query('SELECT * FROM reserva');
        return result.rows.map(row => new Reserva(row));
    }

    async create(reservaData) {
        const result = await this.dbPool.query(
            `INSERT INTO reserva
      (id_cliente, id_cancha, fecha_reserva,
      hora_inicio, hora_fin, estado)
      VALUES ($1,$2,$3,$4,$5,$6)
      RETURNING *`,
            [
                reservaData.id_cliente,
                reservaData.id_cancha,
                reservaData.fecha_reserva,
                reservaData.hora_inicio,
                reservaData.hora_fin,
                reservaData.estado
            ]
        );

        return new Reserva(result.rows[0]);
    }
}

module.exports = ReservaRepositorio;