const express = require('express');

const app = express();
const { products } = require('./data')

app.get('/api/products/:productID/reviews/:reviewsID', (req, res) => {
  console.log(req.params);
  const { productID } = req.params;
  const singlereview = products.find((review) => review.id === Number(productID));
  if (!singlereview) {
    return res.status(404).send('No reviews for this product');
  } else {
    return res.json(singlereview)
  }
})

app.get('/api/v1/query', (req, res) => {
  // console.log(req.query);
  const { search, limit } = req.query;
  let sortedProducts = [...products]
  console.log(limit);

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search)
    })
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit))
  }
  if (sortedProducts.length < 1) {
    return res.status(200).send('no product matched your search');
    // return res.status(200).json({ success: true, data: [{ limit: limit, search: search }] })
  }
  return res.status(200).json(sortedProducts)
})


const port = 5000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}....`);
})