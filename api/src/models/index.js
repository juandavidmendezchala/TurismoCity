const { Sequelize } = require('sequelize');
const { dbUser, dbPassword, dbHost, dbName } = require('../utils/config/index.js');
const userModel = require('./user.js')
const activityModel = require('./activity.js')
const airportsModel = require('./airports')
const feedback = require('./feedback')
const purchase = require('./purchase')

//const userActivity = require('./activitie.js')
const photo = require('./photo')

const sequelize = new Sequelize(`postgres://${dbUser}:${dbPassword}@${dbHost}/${dbName}`, {
    logging: false,
    native: false
})

const User = userModel(sequelize)
const Activity = activityModel(sequelize)
const Airports = airportsModel(sequelize)
const FeedBack = feedback(sequelize)
const Purchase = purchase(sequelize)
//const Package = userModel(sequelize)




//Package.belongsToMany(Activitie, {through: 'RecipeDiet'});
//Activitie.belongsToMany(Package, {through: 'RecipeDiet'});

//Country.hasMany(City, {foreignKey: 'countryCode', sourceKey: 'isoCode'});
//City.belongsTo(Country, {foreignKey: 'countryCode', targetKey: 'isoCode'});
//Package.hasMany(Activitie, {foreignKey: 'idPackete'});




Activity.belongsTo(User)
User.hasMany(Activity)

Activity.belongsToMany(User, { through: 'favorite' });
User.belongsToMany(Activity, { through: 'favorite' })

module.exports = {
    conn: sequelize,
    User,
    Activity,
    Airports,
    FeedBack,
    Purchase
}


FeedBack.belongsTo(Activity)
Activity.hasMany(FeedBack)
FeedBack.belongsTo(User)
User.hasMany(FeedBack)

Purchase.belongsTo(Activity)
Activity.hasMany(Purchase)
Purchase.belongsTo(User)
User.hasMany(Purchase)
/*FeedBack.belongsTo(User)
User.hasMany(FeedBack)
*/

