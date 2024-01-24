// src/router/apodRouter.ts
import express from 'express';
import { fetchAndSaveAPOD } from '../controllers/apodControllers';

const router = express.Router();

// Define routes
router.route('/').get(async (req, res) => {
  try {
    const message = await fetchAndSaveAPOD();
    res.status(200).json({ success: true, message });
  } catch (error) {
    res.status(500).json({ success: false, message: error});
  }
});

export default router;
