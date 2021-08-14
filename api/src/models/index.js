const { Sequelize } = require('sequelize');
const { dbUser, dbPassword, dbHost, dbName } = require('../utils/config/index.js');
const userModel = require('./user.js')
const activityModel = require('./activity.js')
const airportsModel = require('./airports')

const sequelize = new Sequelize(`postgres://${dbUser}:${dbPassword}@${dbHost}/${dbName}`, {
    logging: false,
    native: false
})

const User = userModel(sequelize)
const Activity = activityModel(sequelize)
const Airports = airportsModel(sequelize)

module.exports = {
    conn: sequelize,
    User,
    Activity,
    Airports
}

Activity.belongsTo(User)
User.hasMany(Activity)

Activity.belongsToMany(User, {through: 'purchase'});
User.belongsToMany(Activity, {through: 'purchase'})

Activity.belongsToMany(User, {through: 'favorites'});
User.belongsToMany(Activity, {through: 'favorites'})



