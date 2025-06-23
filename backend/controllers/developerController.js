const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const developerModel = require('../models/developerModel');

exports.devLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Missing login credentials' });
        }

        const developer = await developerModel
            .findOne({ email: { $regex: new RegExp("^" + email + "$", "i") } })
            .select("+password");

        if (!developer) {
            return res.status(400).json({ message: 'You shouldn\'t be here.' });
        }

        const isMatch = await bcrypt.compare(password, developer.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Try again' });
        }

        const token = jwt.sign(
            { id: developer._id },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRATION || '7d' }
        );

        // Exclude password from response
        const { password: _, ...devInfo } = developer.toObject();

        return res.status(200).json({
            message: 'Login successful',
            token,
            developer: devInfo,
        });

    } catch (error) {
        return res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
};
