class Cliente {
    constructor({
        _id_cliente,
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
    }) {
        this.id_cliente = _id_cliente;
        this.tipo_documento = tipo_documento;
        this.numero_documento = numero_documento;
        this.nombre = nombre;
        this.apellido = apellido;
        this.fecha_nacimiento = fecha_nacimiento;
        this.telefono = telefono;
        this.email = email;
        this.direccion = direccion;
        this.fecha_registro = fecha_registro;
        this.estado = estado;
    }
}

module.exports = Cliente;