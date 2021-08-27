const { Sequelize } = require('sequelize');
const { dbUser, dbPassword, dbHost, dbName } = require('../utils/config/index.js');
const userModel = require('./user.js')
const activityModel = require('./activity.js')
const airportsModel = require('./airports')
const promoModel = require('./promo')
const feedback = require('./feedback')
const purchase = require('./purchase')
const schedModel = require('./scheduler')
const whishModel = require('./whishes')
const answer = require('./Answer')
const question = require('./Question')
const typeModel = require('./typeactivity')

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
      }) :
     new Sequelize(
        `postgres://${dbUser}:${dbPassword}@${dbHost}/${dbName}`,
        { logging: false, native: false }
      );

const User = userModel(sequelize)
const Activity = activityModel(sequelize)
const Airports = airportsModel(sequelize)
const FeedBack = feedback(sequelize)
const Purchase = purchase(sequelize)
const Scheduler = schedModel(sequelize)
const Whishes = whishModel(sequelize)
const Answer = answer(sequelize)
const Question = question(sequelize)
const Promo = promoModel(sequelize)
const Type = typeModel(sequelize)
//const Package = userModel(sequelize)




//Package.belongsToMany(Activitie, {through: 'RecipeDiet'});
//Activitie.belongsToMany(Package, {through: 'RecipeDiet'});

//Country.hasMany(City, {foreignKey: 'countryCode', sourceKey: 'isoCode'});
//City.belongsTo(Country, {foreignKey: 'countryCode', targetKey: 'isoCode'});
//Package.hasMany(Activitie, {foreignKey: 'idPackete'});

Scheduler.belongsTo(User)
User.hasMany(Scheduler)

Whishes.belongsTo(User)
User.hasMany(Whishes)

Activity.belongsTo(User)
User.hasMany(Activity)

Activity.belongsToMany(User, { through: 'favorite' });
User.belongsToMany(Activity, { through: 'favorite' });

Activity.belongsToMany(Type, {through: 'type_activity'});
Type.belongsToMany(Activity, {through: 'type_activity'});

FeedBack.belongsTo(Activity)
Activity.hasMany(FeedBack)
FeedBack.belongsTo(User)
User.hasMany(FeedBack)

Question.belongsTo(Activity)
Activity.hasMany(Question)
Question.belongsTo(User)
User.hasMany(Question)

Question.hasMany(Answer)
Answer.belongsTo(Question)

Answer.belongsTo(User)
User.hasMany(Answer)

Purchase.belongsTo(Activity)
Activity.hasMany(Purchase)
Purchase.belongsTo(User)
User.hasMany(Purchase)
/*FeedBack.belongsTo(User)
User.hasMany(FeedBack)
*/

module.exports = {
  conn: sequelize,
  User,
  Activity,
  Airports,
  FeedBack,
  Purchase,
  Scheduler,
  Whishes,
  Question,
  Answer,
  Promo,
  Type
}

