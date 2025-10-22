import mongoose from "mongoose"; //es nusetro ODM
import { isGoodPassword } from "../utils/validators.js";

//nos falta excriptacion de constraseña

//creamos el esquema del usuario
const userSchema = new mongoose.Schema({
    // Nombres de los atributos
    name: {
        //validaciones
        type: String,
        required: true, // este dato es obligatorio!
        maxlength:20, // caracteres maximo
        minlength: 2, // caracteres minimo
        //transforma los datos antes de pasarlos
        trim: true, // este trim saca los espacios de los datos que le coloques
        lowercase: true, //lowercase guarda los datos que le das en minuscula, por mas que se lo des en mayuscula
    },
    lastName: {
        type: String,
        required: true,
        maxlength:20, 
        minlength: 2,
        trim: true, 
        lowercase: true
    },
    email: {
        type: String,
         required: true,
         maxlength: 6,
         trim: true,
         lowercase: true,
         // se asegura que el email nunca se repita
         unique: true,
         match: /^\S+@\S+\.\S+$/, 
    },
    age: {
        type: Number,
        required: true,
        //se asegura que el valor numerico sea minimo o maximo
        min: 16,
        max: 110,
    },

    password: {
        required: true,
        type: String,
        validate: {
            validator: function(value) {
                return isGoodPassword(value)
            },
            menssage:
            "Password must be bewteen 6 and 12 characters, with a lest one number, one upercse letter and one  lowercase letter"
        }
    }
}, {
    //cuando se cree y cuado se modifique se guardara en campos createdAt, updateAt
    timestamps: true} ) 

    //exportamos el modelo
export default mongoose.model("user", userSchema)