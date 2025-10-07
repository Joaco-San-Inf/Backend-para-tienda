/*
    Aca voy a iniciar el servidor para probar la API
*/
require("dotenv").config(); // para leer las variables de entorno desde el archivo variableGlobal
console.log("USUARIO:", process.env.DB_USER); // debug


const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./models"); 
const routes = require("./routes"); //rutas de los endpoint

app.use(cors()); // habilitar CORS para todas las rutas
app.use(express.json()); //para poder leer json
app.use('/uploads', express.static('uploads')); // servir archivos estaticos desde la carpeta uploads


// conexion a la db y creacion de tablas 
db.sequelize.sync({ force: false }).then(() => {
  
  console.log("Bases de datos conectada")
  console.log("✅ Tablas listas");

}); // force: true  -> cada vez que se inicie el servidor, borra y crea las tablas


app.use("/", routes);



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT} 🚀`);
});