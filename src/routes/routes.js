import { Router } from 'express';
import { contactUs, getUserFeedback, saveUserFeedback } from '../controllers/Controller.js';

const router = Router();

router.post('/contact-us', contactUs);
router.post('/save-user-feedback', saveUserFeedback);
router.get('/get-user-feedback', getUserFeedback);
router.get('/', (req, res) => {
    res.send('Amravaan Backend is running');
});
export default router;
