import express from 'express';
const router = express.Router();

import { serviceController } from '../controllers/serviceController.js';

router.post('/services', (req, res) => serviceController.create(req, res));

export default router;