class Pago {
    constructor({
        _id_pago,
        _id_cliente,
        fecha_pago,
        monto,
        metodo_pago,
        concepto,
        estado
    }) {
        this.id_pago = _id_pago;
        this.id_cliente = _id_cliente;
        this.fecha_pago = fecha_pago;
        this.monto = monto;
        this.metodo_pago = metodo_pago;
        this.concepto = concepto;
        this.estado = estado;
    }
}

module.exports = Pago;