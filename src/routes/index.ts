import { Router } from 'express';
import freeRoutes from './free.routes';
import authRoutes from './auth.routes';
import contactRoutes from './contact.routes';


const router = Router()

router.use('/', freeRoutes)
router.use('/', contactRoutes);
router.use('/', authRoutes);

export default router