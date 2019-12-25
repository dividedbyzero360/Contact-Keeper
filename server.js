// Common JS=> Node ES6 Modules=> React
const express = require('express');
const app=express();

app.get('/',(req,res)=>res.json({msg:'Welcome to the contact keeper API'}));
//app.get('/',(req,res)=>res.send('Hello World'));

const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`Server started on port ${PORT}`));

