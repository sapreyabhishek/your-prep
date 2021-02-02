const express = require('express');
const path = require('path');
const app = express();
let any_path='./dist/your-prep';
let PORT = process.env.PORT || 5000;
app.use('/',express.static(path.join(__dirname,any_path)))
.get('*',(req,res)=>res.sendFile(path.join(__dirname,any_path +'/index.html')))
.listen(PORT,()=>{
    console.log(`running on port ${PORT}`);
})
