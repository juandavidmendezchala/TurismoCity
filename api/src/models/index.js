const { Sequelize } = require('sequelize');
const { dbUser, dbPassword, dbHost, dbName } = require('../utils/config/index.js');
const userModel = require('./user.js')
const activityModel = require('./activity.js')
const airportsModel = require('./airports')
const feedback = require('./feedback')

//const userActivity = require('./activitie.js')
const package = require('./package')
const photo = require ('./photo')

const sequelize = new Sequelize(`postgres://${dbUser}:${dbPassword}@${dbHost}/${dbName}`, {
    logging: false,
    native: false
})

const User = userModel(sequelize)
const Activity = activityModel(sequelize)
const Airports = airportsModel(sequelize)
const FeedBack = feedback(sequelize)
//const Package = userModel(sequelize)




//Package.belongsToMany(Activitie, {through: 'RecipeDiet'});
//Activitie.belongsToMany(Package, {through: 'RecipeDiet'});

//Country.hasMany(City, {foreignKey: 'countryCode', sourceKey: 'isoCode'});
//City.belongsTo(Country, {foreignKey: 'countryCode', targetKey: 'isoCode'});
//Package.hasMany(Activitie, {foreignKey: 'idPackete'});


FeedBack.belongsTo(Activity)
Activity.hasMany(FeedBack)

FeedBack.belongsTo(User)
User.hasMany(FeedBack)

Activity.belongsTo(User)
User.hasMany(Activity)

Activity.belongsToMany(User, {through: 'purchase'});
User.belongsToMany(Activity, {through: 'purchase'})

Activity.belongsToMany(User, {through: 'favorite'});
User.belongsToMany(Activity, {through: 'favorite'})

module.exports = {
    conn: sequelize,
    User,
    Activity,
    Airports,
    FeedBack,
}




