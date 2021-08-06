const express = require('express');
const morgan = require('morgan');
const { conn } = require('./src/models/index.js');
const routes  = require('./src/routes/index')
const cors = require('cors')

const app = express();
const {PORT} = require('./src/utils/config/index');
const errorHandler = require('./src/utils/middelwares/errorHandler.js');
const setHeaders = require('./src/utils/middelwares/setHeaders.js');

app.use(cors()) // uso de cors definido anteriormente
app.use(express.urlencoded({extended: true, limit: "50mb"}));
app.use(express.json({limit: "50mb"}))
<<<<<<< HEAD
//app.use(cors) // uso de cors definido anteriormente
=======
>>>>>>> 61c5a534f95264f3a0517c8b501c7bcdde9d4438
app.use(morgan('dev'))
app.use(errorHandler)
app.use(setHeaders)

app.use('/', routes)

conn.sync({force: true})
.then(() => {
    console.log('Connect')
})

app.listen(PORT, () => {
    console.log(`Listen on port ${PORT}`)
});

