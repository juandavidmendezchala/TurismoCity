const { Sequelize } = require('sequelize');
const { dbUser, dbPassword, dbHost, dbName } = require('../utils/config/index.js');
const userModel = require('./user.js')
const packageModel = require('./package.js')
const activityModel = require('./activity.js')
const airportsModel = require('./airports')

const userActivity = require('./activitie.js')
const package = require('./package')
const photo = require ('./photo')

const sequelize = new Sequelize(`postgres://${dbUser}:${dbPassword}@${dbHost}/${dbName}`, {
    logging: false,
    native: false
})

const User = userModel(sequelize)
const Package = packageModel(sequelize)
const Activity = activityModel(sequelize)
const Airports = airportsModel(sequelize)
//const Package = userModel(sequelize)
const Photo = photo(sequelize)
const Package = package(sequelize)



//Package.belongsToMany(Activitie, {through: 'RecipeDiet'});
//Activitie.belongsToMany(Package, {through: 'RecipeDiet'});

//Country.hasMany(City, {foreignKey: 'countryCode', sourceKey: 'isoCode'});
//City.belongsTo(Country, {foreignKey: 'countryCode', targetKey: 'isoCode'});
//Package.hasMany(Activitie, {foreignKey: 'idPackete'});

module.exports = {
    conn: sequelize,
    User,
    Package,
    Activity,
    Airports
}

Activity.belongsTo(Package)
Package.hasMany(Activity)

Package.belongsTo(User)
User.hasMany(Package)




