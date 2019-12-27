const express = require('express');
const { check, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const config = require('config');

const router = express.Router();

// @route  POST /api/users
// @desc   Register a user
// @access Public
router.post('/', [
    check('name', 'Please provide a name').not().isEmpty(),
    check('email', 'Please provide a valid email').isEmail(),
    check('password', 'Please provide a valid password (must be 6 digit long)').isLength({
        min: 6
    })
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    try {
        const { name, email, password } = req.body;
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: 'User already exist' });
        }
        user = new User({
            name,
            email,
            password
        });
        const saltRounds = 10;
        const generatedSalt=await bcrypt.genSalt(10);
        console.log(generatedSalt)
        const saltedPassword = await bcrypt.hash(user.password, generatedSalt);
        user.password = saltedPassword;
        
        await user.save();
        
        const payload = {
            user: {
                id: user.id
            }
        };
        jwt.sign(payload, config.get('jsonwebtoken'), {
            expiresIn: 360000
        },(err,token)=>{
            if(err) throw err;
            res.json({token})
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server Error');
    }
})

module.exports = router;