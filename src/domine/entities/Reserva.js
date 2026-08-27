class Reserva {
    constructor({
        _id_reserva,
        _id_cliente,
        _id_cancha,
        fecha_reserva,
        hora_inicio,
        hora_fin,
        estado
    }) {
        this.id_reserva = _id_reserva;
        this.id_cliente = _id_cliente;
        this.id_cancha = _id_cancha;
        this.fecha_reserva = fecha_reserva;
        this.hora_inicio = hora_inicio;
        this.hora_fin = hora_fin;
        this.estado = estado;
    }
}

module.exports = Reserva;
