import express from 'express';

const router = express.Router();

import serviceRouter from './service.js';

router.use('/service', serviceRouter);

export default router;