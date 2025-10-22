// aca utilizamos mongo como nuestro ODM( object document mapping)
import mongoose from "mongoose";
import { MONGODB_URI, UTN_DB } from "./config.js";

// creamos la coneccion a la base de datos

export const connectDB = async () => {
    try {
        //Nos conectamos a la URI de mongoDB
        //local host - > 127.0.0.1
        //"mongodb://127.0.0.1:PORT/DATABASE_NAME"
        await mongoose.connect(`${MONGODB_URI}/${UTN_DB}`)
        console.log("Database connected")
    } catch (error) {
        console.error(`Error connecting to database `,error)
        //para salir de la ejecucion
        process.exit(1)
    }
}


