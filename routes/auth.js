const express = require('express');
const { check, validationResult } = require('express-validator');
const bycrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config')

const User = require('../models/User');
const auth = require('../middleware/auth');

const router = express.Router();

// @route  GET /api/auth
// @desc   Get Logged in user
// @access Private
router.get('/', auth, async (req, res) => {
    try {
        let user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server error');
    }
});

// @route  POST /api/auth
// @desc   Auth user and get token
// @access Public
router.post('/', [
    check('email', 'Please provide a valid email').isEmail(),
    check('password', 'Please provide a valid password (must be 6 digit long)').isLength({
        min: 6
    })
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }
        let isPasswordSame = await bycrypt.compare(password, user.password);
        if (isPasswordSame) {
            const payload = {
                user: {
                    id: user.id
                }
            };
            jwt.sign(payload, config.get('jsonwebtoken'), {
                expiresIn: 360000
            }, (err, token) => {
                if (err) throw err;
                res.json({ token })
            });
        } else {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server Error');
    }
})

module.exports = router;