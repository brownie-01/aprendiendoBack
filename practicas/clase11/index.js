import express from 'express';
import bodyParser from 'body-parser';
import { connectDB } from './db.js';
import { PORT } from './config.js';
import { userRoute } from './src/routes/userRouter.js';


//instacia del sevidor de express
const app = express()
//coneccion ala base de datos
connectDB()

// con app.use aplicamos dependecias en nuestro servidor

//Middlewares -> son software del medio - osea esta en el medio de dos sistemanas
app.use(bodyParser.json())

//parseamos el cuerpo de la solicitudad
app.use(bodyParser.urlencoded({exrended: true}))

//Rutas
app.use("/api/user", userRoute)

//creamos la escucha del servidor 
app.listen(PORT, () => {
    console.log(`server running at ${PORT}`)
})

