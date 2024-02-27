import express from 'express';
import courseRouter from './CourseRouter.js';
import projectRouter from './ProjectRouter.js';
import resumeRouter from './ResumeRouter.js';

import userRouter from './userRouter.js';
import bodyParser from 'body-parser';


const router = express.Router();

router.use(bodyParser.json())

router.use('/user',userRouter);
router.use('/course',courseRouter);
router.use('/project',projectRouter);
router.use('/resume',resumeRouter);

export default router;