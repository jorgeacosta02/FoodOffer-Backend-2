import { Request, Response } from "express";
import { ConsortiumModel } from "../../../models/ConsortiumModel";
import { UserModel } from "../../../models/UserModel";


const consortiumRegisterController = async (req: Request, res: Response) => {
    
    const {
        name,
        address,
        dni,
    } = req.body;

    // validations    
    if(!name ) return res.status(400).json({msg: 'Por favor envíe nombre del consorcio.'});
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

    // if user exists
    try {

        // Create new consortium
        const newConsortium = new ConsortiumModel ({
            name,
            address,
        });
        
        // Save the consortium and put it in a variable.
        const savedUser = await newConsortium.save();

        // Send successful response to client.
        res.status(201).json(
            `El consorcio ${savedUser.name} fue creado con éxito!!`
        );
    } catch (error: any) {
        
        // Send error response to client.
        res.status(500).json({'error': error.message});
    }
}

export default consortiumRegisterController