import { Router } from "express";
import getAllPremiumAdvsController from "../controllers/getAllAdvController";


const freeRoutes = Router();

freeRoutes.get('/premiumAdv', getAllPremiumAdvsController);



export default freeRoutes