const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 7865;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, res) => {
  const cartId = req.params.id;
  res.send(`Payment methods for cart ${cartId}`);
});

app.get('/cart/:id', (req, res) => {
  res.status(404).send('Not Found');
});

app.get('/available_payments', (req, res) => {
  res.json({
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  });
});

app.post('/login', (req, res) => {
  const username = req.body.userName;
  res.send(`Welcome ${username}`);
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`API available on localhost port ${port}`);
  });
}

module.exports = app;
