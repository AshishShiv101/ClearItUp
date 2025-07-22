import jwt from 'jsonwebtoken';

const authUser = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ success: false, message: 'Not Authorized. Please log in again.' });
        }

        const token = authHeader.split(' ')[1];

        // You should ideally use jwt.verify() instead of decode for security
        const token_decoded = jwt.decode(token); // 🔁 Change to jwt.verify(token, YOUR_SECRET) in production

        if (!token_decoded || !token_decoded.clerkId) {
            return res.status(401).json({ success: false, message: 'Invalid or expired token' });
        }

        req.clerkId = token_decoded.clerkId;  // ✅ Recommended place

        next();
    } catch (error) {
        console.error('Auth Error:', error.message);
        return res.status(401).json({ success: false, message: 'Unauthorized request' });
    }
};

export default authUser;
