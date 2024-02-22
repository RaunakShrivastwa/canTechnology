import express from 'express';
import courseRouter from './CourseRouter.js';
import projectRouter from './ProjectRouter.js';
import userRouter from './userRouter.js';
import bodyParser from 'body-parser';

const router = express.Router();

// router.use(express.urlencoded({extended: true}))
// router.use(express.urlencoded({ extended: true }));
// router.use(express.json());

router.use(bodyParser.json())

router.use('/user',userRouter);
router.use('/course',courseRouter);
router.use('/project',projectRouter);

export default router;