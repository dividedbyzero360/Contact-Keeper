// Common JS=> Node ES6 Modules=> React
const express = require('express');
const connectDB=require('./config/db');
const app=express();

connectDB();

app.get('/',(req,res)=>res.json({msg:'Welcome to the contact keeper API'}));

app.use(express.json());

app.use('/api/users',require('./routes/users'));
app.use('/api/contacts',require('./routes/auth'))
app.use('/api/auth',require('./routes/contacts'))

const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`Server started on port ${PORT}`));

