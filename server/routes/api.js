import express from 'express';
import {StudentController} from '../controllers'
const router = express.Router();

router.post('/v1/user', StudentController.createResource );
router.get('/v1/list', StudentController.listResource)

export default router;
