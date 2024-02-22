import express from 'express';
import userRouter from './userRouter.js';
import bodyParser from 'body-parser';

const router = express.Router();

// router.use(express.urlencoded({extended: true}))
router.use(bodyParser.json())

router.use('/user',userRouter);

export default router;