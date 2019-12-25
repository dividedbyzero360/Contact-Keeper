const express=require('express');

const router=express.Router();

// @route  GET /api/contacts
// @desc   Get all user contacts
// @access Private
router.post('/',(req,res)=>{
    res.send('Register a user');
})

// @route  POST /api/contacts
// @desc   Add a new contact
// @access Private
router.post('/',(req,res)=>{
    res.send('Register a user');
})

// @route  PUT /api/contacts/:id
// @desc   Update contact
// @access Private
router.put('/:id',(req,res)=>{
    res.send('Register a user');
})

// @route  DELETE /api/contacts/:id
// @desc   Delete contact
// @access Private
router.delete('/:id',(req,res)=>{
    res.send('Register a user');
})

module.exports=router;