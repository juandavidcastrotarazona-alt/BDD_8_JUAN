class Horario {
    constructor({
        _id_horario,
        dia_semana,
        hora_inicio,
        hora_fin
    }) {
        this.id_horario = _id_horario;
        this.dia_semana = dia_semana;
        this.hora_inicio = hora_inicio;
        this.hora_fin = hora_fin;
    }
}

module.exports = Horario;