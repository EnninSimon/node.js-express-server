const express = require('express');
const app = express();

//req => middleware => res

const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  // res.send('middleware')
  next()
}

app.get('/', logger, (req, res) => {
  res.send('Home Page')
})

app.get('/about', logger, (req, res) => {
  res.send('About Page')
})


const port = 5000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}....`);
})