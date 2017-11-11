import express from 'express';
import {StudentController} from '../controllers'
const router = express.Router();

router.post('/v1/user', StudentController.createResource );
router.get('/v1/list', StudentController.listResource);
router.post('/v1/finduser', StudentController.getResource);
router.post('/v1/updateresource', StudentController.updateResource);
router.post('/v1/deleteresource', StudentController.deleteResource);

export default router;
