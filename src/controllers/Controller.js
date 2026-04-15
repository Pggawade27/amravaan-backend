import { queryExecutor } from "../helper/queryExecutor.js";

export const contactUs = async (req, res) => {
    try {
        const { name, mobile, message } = req.body;
        await queryExecutor('INSERT INTO contact_us (name, mobile, message) VALUES (?, ?, ?)', [name, mobile, message]);
        return res.status(201).json({ message: 'Thank you for contacting us. We will get back to you soon.' });

    } catch (error) {
        console.error('[contactUs > contactUs]', error.message, error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

export const userFeedback = async (req, res) => {
    try {
        const { name, location, feedback, rating } = req.body;
        await queryExecutor('INSERT INTO user_feedback (name, location, feedback, rating) VALUES (?, ?, ?, ?)', [name, location, feedback, rating]);
        return res.status(201).json({ message: 'Thank you for your feedback.' });
    } catch (error) {
        console.error('[userFeedback > userFeedback]', error.message, error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}