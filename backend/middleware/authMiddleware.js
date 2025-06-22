//backend/middleware/authMiddleware.js

const { verifyToken } = require('../utils/auth');
const developerModel = require('../models/developerModel');

const authMiddleware = async (req, res, next) => {
    console.log("Developer auth middleware triggered");

    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];

    console.log('Authorization header:', authHeader); // Log the authorization header
    console.log('Extracted token:', token); // Log the extracted token

    if (!token) {
        console.error('Token missing from Authorization header');
        return res.status(401).json({ message: 'Authorization token is required' });
    }

    try {
        const decoded = verifyToken(token); // Decodes and verifies the token
        console.log('Decoded token:', decoded); // Log the decoded token
        console.log('Decoded ID from token:', decoded.id);

        if (!decoded) {
            console.error('Invalid or expired token');
            return res.status(401).json({ message: 'Invalid or expired token' });
        }

        // Fetch the developer from the database
        const developer = await developerModel.findById(decoded.id);
        console.log('Fetched developer from database:', developer);

        if (!developer) {
            console.error('Developer not found in database');
            return res.status(404).json({ message: 'Developer does not exist' });
        }


        req.developer = { id: developer._id.toString() };

        next(); // Proceed to the next middleware or controller
    } catch (error) {
        console.error('Authentication middleware error:', error);
        res.status(500).json({
            message: 'Server error during authentication',
            error: error.message,
        });
    }
};

module.exports = authMiddleware;