const express=require('express');

const router=express.Router();

// @route  GET /api/auth
// @desc   Get Logged in user
// @access Private
router.get('/',(req,res)=>{
    res.send('Get loged in user');
})

// @route  POST /api/auth
// @desc   Auth user and get token
// @access Public
router.post('/',(req,res)=>{
    res.send('Login user');
})

module.exports=router;