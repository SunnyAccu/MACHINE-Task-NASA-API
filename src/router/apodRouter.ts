import express from 'express';
import { fetchAndSaveAPOD } from '../controllers/apodControllers';

const router = express.Router();

router.route('/').get(fetchAndSaveAPOD);

export default router;
