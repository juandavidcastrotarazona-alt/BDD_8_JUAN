const Cliente = require('../../domain/entities/Cliente');
const IClienteRepositorio = require('../../domain/repositories/IClienteRepositorio');

class ClienteRepositorio extends IClienteRepositorio {
    constructor(dbPool) {
        super();
        this.dbPool = dbPool;
    }

    async getAll() {
        const result = await this.dbPool.query('SELECT * FROM cliente');
        return result.rows.map(row => new Cliente(row));
    }

    async create(clienteData) {
        const {
            tipo_documento,
            numero_documento,
            nombre,
            apellido,
            fecha_nacimiento,
            telefono,
            email,
            direccion,
            fecha_registro,
            estado
        } = clienteData;

        const result = await this.dbPool.query(
            `INSERT INTO cliente
      (tipo_documento, numero_documento, nombre, apellido,
      fecha_nacimiento, telefono, email, direccion,
      fecha_registro, estado)
      VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)
      RETURNING *`,
            [
                tipo_documento,
                numero_documento,
                nombre,
                apellido,
                fecha_nacimiento,
                telefono,
                email,
                direccion,
                fecha_registro,
                estado
            ]
        );

        return new Cliente(result.rows[0]);
    }
}

module.exports = ClienteRepositorio;