const express = require('express');
const app = express();
const morgan = require('morgan');
const logger = require('./logger')
const authorize = require('./authorize');

//req => middleware => res
// app.use('/', logger);
//multiple middlewares
// app.use([authorize]);

app.use(morgan('tiny'))
app.get('/', (req, res) => {
  res.send('Home Page')
})

app.get('/about', (req, res) => {
  res.send('About Page')
})

app.get('/api/products', (req, res) => {
  res.send('Products Page')
})

app.get('/api/items', (req, res) => {
  console.log(req.user);
  res.send('Items Page')
})


const port = 5000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}....`);
})