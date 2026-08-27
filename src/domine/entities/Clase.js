class Clase {
    constructor({
        _id_clase,
        nombre,
        nivel,
        fecha_inicio,
        fecha_fin,
        capacidad_maxima,
        estado,
        _id_entrenador,
        _id_cancha,
        _id_horario
    }) {
        this.id_clase = _id_clase;
        this.nombre = nombre;
        this.nivel = nivel;
        this.fecha_inicio = fecha_inicio;
        this.fecha_fin = fecha_fin;
        this.capacidad_maxima = capacidad_maxima;
        this.estado = estado;
        this.id_entrenador = _id_entrenador;
        this.id_cancha = _id_cancha;
        this.id_horario = _id_horario;
    }
}

module.exports = Clase;