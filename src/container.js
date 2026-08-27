const dbPool = require('./infrastructure/database/dbFactory');

const ClienteRepositorio = require('./infrastructure/repositories/ClienteRepositorio');
const EntrenadorRepositorio = require('./infrastructure/repositories/EntrenadorRepositorio');
const CanchaRepositorio = require('./infrastructure/repositories/CanchaRepositorio');
const HorarioRepositorio = require('./infrastructure/repositories/HorarioRepositorio');
const ClaseRepositorio = require('./infrastructure/repositories/ClaseRepositorio');
const ReservaRepositorio = require('./infrastructure/repositories/ReservaRepositorio');
const PagoRepositorio = require('./infrastructure/repositories/PagoRepositorio');
const InscripcionRepositorio = require('./infrastructure/repositories/InscripcionRepositorio');

const clienteRepositorio = new ClienteRepositorio(dbPool);
const entrenadorRepositorio = new EntrenadorRepositorio(dbPool);
const canchaRepositorio = new CanchaRepositorio(dbPool);
const horarioRepositorio = new HorarioRepositorio(dbPool);
const claseRepositorio = new ClaseRepositorio(dbPool);
const reservaRepositorio = new ReservaRepositorio(dbPool);
const pagoRepositorio = new PagoRepositorio(dbPool);
const inscripcionRepositorio = new InscripcionRepositorio(dbPool);

module.exports = {
    clienteRepositorio,
    entrenadorRepositorio,
    canchaRepositorio,
    horarioRepositorio,
    claseRepositorio,
    reservaRepositorio,
    pagoRepositorio,
    inscripcionRepositorio
};