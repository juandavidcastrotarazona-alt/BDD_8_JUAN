const { Pool } = require('pg');
const config = require('../../config/environment');
let pool;
if (config.dbDriver === 'GCP') {
    console.log('🔌 Conectando a Base de Datos en Google Cloud Platform (Cloud SQL)...');
    pool = new Pool({
        host: config.gcpDb.host,
        port: config.gcpDb.port,
        user: config.gcpDb.user,
        password: config.gcpDb.password,
        database: config.gcpDb.database,
        ssl: { rejectUnauthorized: false } // Requerido para conexiones cifradas Cloud SQL
    });
} else {
    console.log(' 💻Conectando a Base de Datos Local (PostgreSQL)... ');
    pool = new Pool({
        host: config.localDb.host,
        port: config.localDb.port,
        user: config.localDb.user,
        password: config.localDb.password,
        database: config.localDb.database,
    });
}
module.exports = pool;
