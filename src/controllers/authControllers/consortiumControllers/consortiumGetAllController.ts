import { Request, Response } from "express";
import { IUserDataFromDB } from "../../../Interfaces/userInterfaces";
import { ConsortiumModel } from "../../../models/ConsortiumModel";


const consortiumGetAllController = async (req: Request, res: Response) => {
    try {
        // recupera todos los consorcios
        const consortiums = await ConsortiumModel.findAll();
        // envía los consorcios al cliente
        res.status(200).json(consortiums);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }

}

export default consortiumGetAllController