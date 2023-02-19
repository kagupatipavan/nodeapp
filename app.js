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
<<<<<<< HEAD
app.listen(3000);
=======
app.listen(3000,192.168.29.246,()=>{
  console.log("working");
});
>>>>>>> 443e4defa12df7b5d4d336a56997bf8c41e016e5
