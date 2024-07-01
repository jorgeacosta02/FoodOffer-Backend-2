import { Request, Response } from "express";
import { MinuteModel } from "../../../models/MinuteModel";
import { UserModel } from "../../../models/UserModel";


const minuteRegisterController = async (req: Request, res: Response) => {
    
    const {
        date,
        title,
        text,
        dni,
    } = req.body;

    // validations    
    if(!date ) return res.status(400).json({msg: 'Por favor envíe fecha de acta.'});
    if(!title ) return res.status(400).json({msg: 'Por favor enfíe título del acta.'});
    if(!text ) return res.status(400).json({msg: 'Por favor enfíe texto del acta.'});

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
        const newMinute = new MinuteModel ({
            date,
            title,
            text,
        });
        
        // Save the consortium and put it in a variable.
        const savedMinute = await newMinute.save();

        // Send successful response to client.
        res.status(201).json(
            `El acta ${savedMinute.title} fue creada con éxito!!`
        );
    } catch (error: any) {
        
        // Send error response to client.
        res.status(500).json({'error': error.message});
    }
}

export default minuteRegisterController