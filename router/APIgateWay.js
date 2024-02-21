import express from 'express';
import courseRouter from './CourseRouter.js';
const router = express.Router();
console.log("API Gatway Running...");

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.use('/course',courseRouter)
export default router;