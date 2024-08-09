import { Request, Response } from "express";
// import { UserModel } from "../models/UserModel";
// import { IUserDataFromDB } from "../Interfaces/userInterfaces";
import { AdvertisingModel } from "../models/AdvertisingModel";

const getAllPremiumAdvsController = async (req: Request, res: Response) => {
    try {
        const foundUsers = await AdvertisingModel.findAll();
        return res.status(200).json(foundUsers);
    } catch (error:any) {
        res.status(404).json({message: error.message});
    }
}

export default getAllPremiumAdvsController
