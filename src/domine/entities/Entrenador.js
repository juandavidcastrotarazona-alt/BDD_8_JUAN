class Entrenador {
    constructor({
        _id_entrenador,
        nombre,
        apellido,
        especialidad,
        telefono,
        email,
        fecha_contratacion,
        estado
    }) {
        this.id_entrenador = _id_entrenador;
        this.nombre = nombre;
        this.apellido = apellido;
        this.especialidad = especialidad;
        this.telefono = telefono;
        this.email = email;
        this.fecha_contratacion = fecha_contratacion;
        this.estado = estado;
    }
}

module.exports = Entrenador;