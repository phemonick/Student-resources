import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
	res.send('am the index');
});


export default router;
