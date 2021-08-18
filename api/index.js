const express = require("express");
const morgan = require("morgan");
const cors = require("cors"); // para poder hacer peticiones desde cualquier punto (tambien se puede configurar de donde recibir las peticiones)
const { conn } = require("./src/models/index.js");
const routes = require("./src/routes/index");

const app = express();
const { PORT } = require("./src/utils/config/index.js");
const errorHandler = require("./src/utils/middelwares/errorHandler.js");
const setHeaders = require("./src/utils/middelwares/setHeaders.js");

app.use(cors()); // uso de cors definido anteriormente
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));
app.use(morgan("dev"));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000,https://turismo-city.vercel.app'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});
app.use(errorHandler);
app.use(setHeaders);

app.use("/", routes);

conn.sync({ force: false }).then(() => {
  console.log("Connect");
});

app.listen(PORT, () => {
  console.log(`Listen on port ${PORT}`);
});
