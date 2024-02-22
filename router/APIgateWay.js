import express from 'express';
import courseRouter from './CourseRouter.js';
import projectRouter from './ProjectRouter.js';

const router = express.Router();
console.log("API Gatway Running...");

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.use('/course',courseRouter);
router.use('/project',projectRouter);

export default router;