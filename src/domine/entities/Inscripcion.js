class Inscripcion {
    constructor({
        _id_inscripcion,
        _id_cliente,
        _id_clase,
        fecha_inscripcion,
        estado
    }) {
        this.id_inscripcion = _id_inscripcion;
        this.id_cliente = _id_cliente;
        this.id_clase = _id_clase;
        this.fecha_inscripcion = fecha_inscripcion;
        this.estado = estado;
    }
}

module.exports = Inscripcion;