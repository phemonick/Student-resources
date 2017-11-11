import express from 'express';
import {StudentController} from '../controllers'
const router = express.Router();

router.post('/v1/user', StudentController.createResource );
router.get('/v1/list', StudentController.listResource);
router.post('/v1/finduser', StudentController.getResource)

export default router;
