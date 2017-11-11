import express from 'express';
import {StudentController} from '../controllers'
const router = express.Router();

router.post('/v1/user', StudentController.createResource );
router.get('/v1/list', StudentController.listResource);
router.get('/v1/finduser/:id', StudentController.getResource);
router.post('/v1/updateresource/:id', StudentController.updateResource);
router.post('/v1/deleteresource/:id', StudentController.deleteResource);

export default router;
