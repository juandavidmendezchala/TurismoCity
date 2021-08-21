const { Sequelize } = require('sequelize');
const { dbUser, dbPassword, dbHost, dbName } = require('../utils/config/index.js');
const userModel = require('./user.js')
const activityModel = require('./activity.js')
const airportsModel = require('./airports')
const promoModel = require('./promo')
const feedback = require('./feedback')
const purchase = require('./purchase')

//const userActivity = require('./activitie.js')
const photo = require('./photo')

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
let sequelize =
  process.env.NODE_ENV === "production"
    ? new Sequelize({
        database: DB_NAME,
        dialect: "postgres",
        host: DB_HOST,
        port: 5432,
        username: DB_USER,
        password: DB_PASSWORD,
        pool: {
          max: 3,
          min: 1,
          idle: 10000,
        },
        dialectOptions: {
          ssl: {
            require: true,
            // Ref.: https://github.com/brianc/node-postgres/issues/2009
            rejectUnauthorized: false,
          },
          keepAlive: true,
        },
        ssl: true,
      })
    : new Sequelize(
        `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
        { logging: false, native: false }
      );

// const sequelize = new Sequelize(`postgres://${dbUser}:${dbPassword}@${dbHost}/${dbName}`, {
//  logging: false,
//    native: false
// })

const User = userModel(sequelize)
const Activity = activityModel(sequelize)
const Airports = airportsModel(sequelize)
const FeedBack = feedback(sequelize)
const Purchase = purchase(sequelize)
const Promo = promoModel(sequelize)
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
    Purchase,
    Promo
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

