import { Request, Response } from "express";
import { ConsortiumModel } from "../models/ConsortiumModel";
import { UserModel } from "../models/UserModel";
import bcrypt from 'bcrypt';
// import { createUserToken } from "../../../libs/jwt";


const consortiumRegisterController = async (req: Request, res: Response) => {
    
    const {
        name,
        address,
        dni,
    } = req.body;

    // validations    
    if(!name ) return res.status(400).json({msg: 'Por favor envíe nombre del consorcioi.'});
    if(!address ) return res.status(400).json({msg: 'Por favor envíe domicilio del consorcio.'});

    // user check
    const user = await UserModel.findOne({
        where:{
            dni:dni
        }
    });

    // if user does not exists
    if(!user){
        return res.status(400).json({msg: 'El usuario no existe.'})
    }

    // if user is not admin
    if(user.role !== 'admin'){
        return res.status(400).json({msg: 'El usuario no es administrador.'})
    }

    // if user is not active
    if(user.active !== true){
        return res.status(400).json({msg: 'El usuario no está activo.'})
    }

    // if user does not exists
    try {

        // Genero un salt para hashear
        const salt = await bcrypt.genSalt(10);

        // Hasheo la contraseña
        const hash = await bcrypt.hash(password, salt);

        // Creo un nuevo usuario
        const newUser = new UserModel ({
            firstName,
            lastName,
            dni,
            phone,
            email,
            password: hash
        });
        
        // Grabo el usuaro en la base de datos y lo coloco en una variable.
        const savedUser = await newUser.save();

        // Creo un token para el usuario usando la función de libs/jwt
        const token: string = await createUserToken({
            id: savedUser.id,
            firstName: savedUser.firstName,
            lastName: savedUser.lastName,
            dni: savedUser.dni,
            phone: savedUser.phone,
            email: savedUser.email,
            active: savedUser.active,
            role: savedUser.role
        });

        // Coloco una cookie con el token en la respuesta
        res.cookie('token', token);

        // Envío la respuesta de éxito al cliente
        res.status(201).json(
            `El usuario ${savedUser.firstName} ${savedUser.lastName} fue creado con éxito!!`
        );
    } catch (error: any) {
        
        // Envío respuesta de error al cliente
        res.status(500).json({'error': error.message});
    }
}

export default userRegisterController