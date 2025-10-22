//mongoose es nuestro ODM ( Object Document Mapping, base de datos documental )
import mongoose from "mongoose";

//el mongoose lo que hace es mapeear la base de datos documental, para que podamos manejarla en codigo.

export const connectDB = async () => {
    // como es asincronico tenemos que usar try catch
    try {
        //Nos conectamos a la URI de mongoDB
        //local host - > 127.0.0.1
        //"mongodb://127.0.0.1:PORT/DATABASE_NAME"
        await mongoose.connect("mongodb://127.0.0.1:27017/utn2025") //este local host que sacamos de mongodb 
        console.log( " Data vse connected")
    } catch (error) {
        console.log(`Error connectecting to database`, error)
        //si falla hay que salir por completo de  la ejecucion
        process.exit(1)
    }
}