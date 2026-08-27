const express = require('express');
const cors = require('cors');
const config = require('./src/config/environment');
const studentRoutes = require('./src/infrastructure/routes/studentRoutes');
const app = express();
app.use(cors());
app.use(express.json());
// Registro de Rutas
app.use('/api/v1/students', studentRoutes);
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK', driver: config.dbDriver });
});
app.listen(config.port, () => {
    console.log(` Servidor ejecutándose en http://localhost: ${config.port}`);
    console.log(` Driver de Base de Datos Activo:  ${config.dbDriver}`);
});
