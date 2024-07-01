import { Request, Response } from "express";
import { ProjectModel } from "../../../models/ProjectModel";
import { UserModel } from "../../../models/UserModel";


const projectRegisterController = async (req: Request, res: Response) => {
    
    const {
        proposalDate,
        title,
        description,
        dni,
    } = req.body;

    // validations    
    if(!proposalDate ) return res.status(400).json({msg: 'Por favor envíe fecha de proposición.'});
    if(!title ) return res.status(400).json({msg: 'Por favor enfíe título del acta.'});
    if(!description ) return res.status(400).json({msg: 'Por favor enfíe texto del acta.'});

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
        const newProject = new ProjectModel ({
            proposalDate,
            title,
            description,
        });
        
        // Save the consortium and put it in a variable.
        const savedProject = await newProject.save();

        // Send successful response to client.
        res.status(201).json(
            `El proyecto ${savedProject.title} fue creado con éxito!!`
        );
    } catch (error: any) {
        
        // Send error response to client.
        res.status(500).json({'error': error.message});
    }
}

export default projectRegisterController