const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send('Hello World');
    
})
app.get('/pa',(req,res)=>{
    res.send('Hello World all');
})
app.listen(3000);