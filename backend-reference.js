const http = require('http');
const { readFileSync } = require('fs');

//get all files
const homePage = readFileSync('./navbar-app/index.html')
const homeStyles = readFileSync('./navbar-app/styles.css')
const homeImage = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')

const server = http.createServer((req, res) => {
  const url = req.url
  console.log(url);
  //Home page
  if (url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write(homePage)
    res.end()

  }

  //Styles
  else if (url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write('<h1>About page</h1>')
    res.end()
  }

  //About page
  else if (url === '/about') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write('<h1>About page</h1>')
    res.end()
  }

  //Styles
  else if (url === '/styles.css') {
    res.writeHead(200, { 'content-type': 'text/css' })
    res.write(homeStyles)
    res.end()
  }
  //Image
  else if (url === '/logo.svg') {
    res.writeHead(200, { 'content-type': 'image/svg+xml' })
    res.write(homeImage)
    res.end()
  }

  //logic
  else if (url === '/browser-app.js') {
    res.writeHead(200, { 'content-type': 'text/javascript' })
    res.write(homeLogic)
    res.end()
  }

  //404
  else {
    res.writeHead(404, { 'content-type': 'text/html' })
    res.write('<h1>Oops page not found</h1>')
    res.end()
  }
})

server.listen(5000);

//----------------------------------------------------------------------

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('home page')
})

app.get('/about', (req, res) => {
  res.status(200).send('about page')
})

app.all('*', (req, res) => {
  res.status(404).send('<h1>Resource not found</h1>')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000...');
})
//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use
//app.listen

//------------------------------------------------------------------------
//setting up stati and middleware

const express = require('express');
const path = require('path');

const app = express()

//setup static and middleware
app.use(express.static('./public'))

app.all('*', (req, res) => {
  res.status(404).send('resource not found')
})

const port = 5000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}....`);
})


// ---------------------------------------------------------------------------------------

const express = require('express');
const app = express();

const { products, people } = require('./data')

app.get('/', (req, res) => {
  res.send('<h1>Home Page</h1> <a href="/api/products">Products</a>')
})

app.get('/api/products/:productID', (req, res) => {
  // console.log(req.params);
  const { productID } = req.params;
  const singleproduct = products.find((product) => product.id === Number(productID))
  if (!singleproduct) {
    return res.status(404).send('Product does not exist')
  } else {
    return res.json(singleproduct)
  }

  console.log(req.params);
})

app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
  console.log(req.params);
  res.send('hello world')
})
// app.get('/api/products', (req, res) => {
//   const newProduct = products.map((product) => {
//     const {id, name, image} = product;
//     return {id, name, image}
//   })
//   res.json(newProduct)
// })

const port = 5000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
})


