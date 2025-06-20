const bcrypt = require('bcryptjs');
const developerModel = require('../models/developerModel')


exports .devLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        if(!email || !password) {
            return res.status(400).json({
                message: 'Missing login credentials'
            })
        }

        const developer = await developerModel.findOne({ email: { $regex: new RegExp("^" + email + "$", "i") } }).select("+password firstName lastName email role");

        if(!developer) {
            return res.status(400).json({ message: 'You shouldn\'t be here.' })
        }

        const isMatch = await bcrypt.compare(password, developer.password);
        if(!isMatch) {
            return res.status(400).json({ message: 'try again'})
        }

    } catch (error) { res.status(500).json({ message: "Server error", error: error.message }); }
}