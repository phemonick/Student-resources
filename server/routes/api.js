import express from 'express';
import {StudentController} from '../controllers'
const router = express.Router();

router.post('/v1/user', StudentController.createResource )

export default router;
