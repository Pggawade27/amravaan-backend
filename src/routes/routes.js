import { Router } from 'express';
import { contactUs } from '../controllers/Controller.js';

const router = Router();

router.post('/contact-us', contactUs);
router.get('/', (req, res) => {
    res.send('Amravaan Backend is running');
});
export default router;
