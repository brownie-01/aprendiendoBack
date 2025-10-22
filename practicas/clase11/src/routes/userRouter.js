import express from 'express';
import { createUser } from '../controllers/userController.js';

//creamos el enrutador
// controla el ocnjunot de las rutas
// orienta a una entidad


export const userRoute = express.Router()

// Los endpoints -> http://localhost:3000/api/user/create

//Endpoints
userRoute.post("/create", createUser)
