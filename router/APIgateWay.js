import express from 'express';
import userRouter from './userRouter.js';
import bodyParser from 'body-parser';
import courseRouter from './CourseRouter.js';

const router = express.Router();

// router.use(express.urlencoded({extended: true}))
router.use(bodyParser.json())

router.use('/user',userRouter);

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.use('/course',courseRouter)
export default router;