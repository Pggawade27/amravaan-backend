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