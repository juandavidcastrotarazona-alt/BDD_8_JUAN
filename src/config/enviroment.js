require('dotenv').config();
module.exports = {
    port: process.env.PORT || 3000,
    dbDriver: process.env.DB_DRIVER || 'LOCAL',
    localDb: {
        host: process.env.LOCAL_DB_HOST,
        port: process.env.LOCAL_DB_PORT,
        user: process.env.LOCAL_DB_USER,
        password: process.env.LOCAL_DB_PASSWORD,
        database: process.env.LOCAL_DB_NAME,
    },
    gcpDb: {
        host: process.env.GCP_DB_HOST,
        port: process.env.GCP_DB_PORT,
        user: process.env.GCP_DB_USER,
        password: process.env.GCP_DB_PASSWORD,
        database: process.env.GCP_DB_NAME,
    }
};
