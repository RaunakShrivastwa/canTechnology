import express from 'express';
import userController from '../controller/userController.js';


const user = new userController();

const router = express.Router();
router.post('/add',user.addUser)

export default router;