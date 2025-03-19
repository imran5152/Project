let express = require('express')
let app = express()
let fs = require('fs')
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello, world!');
});


app.get('/greet/:name', (req, res) => {
  const name = req.params.name;
  res.send(`Hello, ${name}!`);
});


app.listen(2300,()=> console.log('Server started'))

 
