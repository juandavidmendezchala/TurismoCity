<<<<<<< HEAD
const express = require("express");
const morgan = require("morgan");
const cors = require("cors"); // para poder hacer peticiones desde cualquier punto (tambien se puede configurar de donde recibir las peticiones)
const { conn } = require("./src/models/index.js");
const routes = require("./src/routes/index");
// const cors = require('cors')
// const routes = require('./src/routes/index')
// const cors = require('cors')
=======
const express = require('express');
const morgan = require('morgan');
const cors = require('cors') // para poder hacer peticiones desde cualquier punto (tambien se puede configurar de donde recibir las peticiones)
const { conn } = require('./src/models/index.js');
const routes = require('./src/routes/index')

>>>>>>> 2b37945087f2af98ddcefc67d412c5b061d27cc0

const app = express();
const { PORT } = require("./src/utils/config/index.js");
const errorHandler = require("./src/utils/middelwares/errorHandler.js");
const setHeaders = require("./src/utils/middelwares/setHeaders.js");

app.use(cors()); // uso de cors definido anteriormente
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));
app.use(morgan("dev"));
app.use(errorHandler);
app.use(setHeaders);

app.use("/", routes);

conn.sync({ force: true }).then(() => {
  console.log("Connect");
});

app.listen(PORT, () => {
  console.log(`Listen on port ${PORT}`);
});
