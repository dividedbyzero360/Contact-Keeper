const express = require('express');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');
const Contact = require('../models/Contact');
const auth = require('../middleware/auth');

const router = express.Router();

// @route  GET /api/contacts
// @desc   Get all user contacts
// @access Private
router.get('/', auth, async (req, res) => {
    try {
        const contacts = await Contact.find({ user: req.user.id }).sort({ date: -1 });
        res.json(contacts);
    } catch (error) {
        console.log(error);
        res.status(500).send('Server Error');
    }
});

// @route  POST /api/contacts
// @desc   Add a new contact
// @access Private
router.post('/', [auth, [
    check('name', 'Please provide a name').not().isEmpty()
]], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    try {
        const { name, email, phone, type } = req.body;
        const newContact = new Contact({
            name,
            email,
            phone,
            type,
            user: req.user.id
        });
        let contact = await newContact.save();
        res.json(contact);

    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server Error');
    }
});

// @route  PUT /api/contacts/:id
// @desc   Update contact
// @access Private
router.put('/:id', (req, res) => {
    res.send('Register a user');
})

// @route  DELETE /api/contacts/:id
// @desc   Delete contact
// @access Private
router.delete('/:id', (req, res) => {
    res.send('Register a user');
})

module.exports = router;