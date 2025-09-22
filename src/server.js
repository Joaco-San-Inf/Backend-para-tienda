/*
    Aca voy a iniciar el servidor para probar la API
*/
require("dotenv").config(); // para leer las variables de entorno desde el archivo .env

const express = require("express");
const app = express();
const db = require("./models");
const routes = require("./routes");

app.use(express.json()); //para poder leer json


// conexion a la db y creacion de tablas 
db.sequelize.sync({ force: false }).then(() => {
  console.log("✅ Tablas listas");
}); // force: true  -> cada vez que se inicie el servidor, borra y crea las tablas



app.use("/api", routes);



const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT} 🚀`);
});