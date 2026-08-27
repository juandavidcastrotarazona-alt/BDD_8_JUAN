const Pago = require('../../domain/entities/Pago');
const IPagoRepositorio = require('../../domain/repositories/IPagoRepositorio');

class PagoRepositorio extends IPagoRepositorio {
    constructor(dbPool) {
        super();
        this.dbPool = dbPool;
    }

    async getAll() {
        const result = await this.dbPool.query('SELECT * FROM pago');
        return result.rows.map(row => new Pago(row));
    }

    async create(pagoData) {
        const result = await this.dbPool.query(
            `INSERT INTO pago
      (id_cliente, fecha_pago, monto,
      metodo_pago, concepto, estado)
      VALUES ($1,$2,$3,$4,$5,$6)
      RETURNING *`,
            [
                pagoData.id_cliente,
                pagoData.fecha_pago,
                pagoData.monto,
                pagoData.metodo_pago,
                pagoData.concepto,
                pagoData.estado
            ]
        );

        return new Pago(result.rows[0]);
    }
}

module.exports = PagoRepositorio;