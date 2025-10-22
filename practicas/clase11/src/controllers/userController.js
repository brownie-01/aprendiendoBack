import User from '../models/userModel.js'

// controladores: acruan como intermediario entreel cliente y la logica de la aplicacion.
//  Recibe solicitudes las procesa y las respode
// Estos controladores incluyen a los servicios

// CRUD

//crear usuarios
export const createUser = async (req, res) => {
    try {
        //tomamos datos del resquest por POST
        //llega x body
        //creamos el nuevo usario 
        const userData = new User(req.body)

        //validacion
        //destructuramos
        const { email } = userData
        const userExist = await User.findOne((email))
        if(userExist){
            return res
            .status(400)
            .json({ message: `User with ${email} aready exist`})
        }
         
        //guardamos el usuario en  la db
        await userData.save()
        res.status(201).json({ message: "User created" })
        
    } catch (error) {
        return res.status(500).json({ message: "internal server error", error})
    }
}