import express from 'express';
import { loginAdmin } from '../controllers/userController.js';




const router = express.Router();

router.post('/auth', loginAdmin);



export default router;