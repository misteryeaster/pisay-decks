import express from 'express';
import { getAllSubjects } from '../controllers/subjectsController.js';

const router = express.Router();

router.get('/', getAllSubjects);

export default router;