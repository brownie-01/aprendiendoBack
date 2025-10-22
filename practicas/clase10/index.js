import express from 'express'
import { connectDB } from './db';
import bodyParser from 'body-parser';
// nuestro archivo principal

//pasear de json las solicitudes, esto hace que solo se reciban solicitudes en formato json
app.use(bodyParser.json())

//Parsear el cuerpo de la solicitud para que pueda ser leida
app.use(bodyParser.urlencoded({extended: true}))

// esto crea una instancia de servidor de express 
const app = express();


//creamos una ruta
app.get((req, res), async () => {
})


//conexion a la base de datos.
connectDB();

//lo basico para crear un servidor es tener lo de arriva y crear la escucha para hacerlo correr( es local )

app.listen(3000, () => {
    console.log(`server runnig at 8080`)
})
// el puerto 3000 




























//    "start": "node index.js", // esto es para mas comodidad, solamente configuramos los scrips 
//    "dev" : "nodemon index.js" // a diferencia del anterior, levanta el proyecto y no sufre cambios en el proyecto