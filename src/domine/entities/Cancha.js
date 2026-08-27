class Cancha {
    constructor({
        _id_cancha,
        nombre,
        tipo_superficie,
        ubicacion,
        capacidad,
        estado
    }) {
        this.id_cancha = _id_cancha;
        this.nombre = nombre;
        this.tipo_superficie = tipo_superficie;
        this.ubicacion = ubicacion;
        this.capacidad = capacidad;
        this.estado = estado;
    }
}

module.exports = Cancha;