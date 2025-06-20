const express = require('express');
const router = express.Router();

const { devLogin } = require('../controllers/developerController')


router.post('/login', devLogin)



module.exports = router;