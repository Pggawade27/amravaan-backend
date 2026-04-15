import { Router } from 'express';
import { contactUs, userFeedback } from '../controllers/Controller.js';

const router = Router();

router.post('/contact-us', contactUs);
router.post('/user-feedback', userFeedback);
router.get('/', (req, res) => {
    res.send('Amravaan Backend is running');
});
export default router;
