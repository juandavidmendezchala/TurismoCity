require('dotenv').config();

module.exports = {
    dbUser: process.env.DB_USER || 'postgres' ,
    dbName: process.env.DB_NAME,
    dbPort: process.env.DB_PORT,
    dbHost: process.env.DB_HOST,
    dbPassword: process.env.DB_PASSWORD,
    host: process.env.DB_HOST || 3001,
    PORT: process.env.PORT,
    APIKEY: process.env.API_KEY,
    APIKEYFLIGHT: process.env.API_KEY_FLIGHT,
    APIKEYNEWS: process.env.API_KEY_NEWS
}