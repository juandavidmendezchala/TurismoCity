const {Sequelize} = require('sequelize');
const { dbUser, dbPassword, dbHost, dbName } = require('../utils/config/index.js');
const userModel = require('./user.js')
const userActivity = require('./activitie.js')


const sequelize = new Sequelize(`postgres://${dbUser}:${dbPassword}@${dbHost}/${dbName}`, {
    logging: false,
    native: false
})

const User = userModel(sequelize)
const Activitie = userModel(sequelize)

module.exports = {
    conn: sequelize,
    User,
    Activitie
}