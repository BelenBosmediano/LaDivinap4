const axios = require('axios');
const paypal = require('@paypal/checkout-server-sdk');


let apiOptions = {
  server: ''
}

if (process.env.NODE_ENV === 'production') {
    apiOptions.server = 'https://ladivina-69d1bc0b8c8c.herokuapp.com/'
} else {
    apiOptions.server = 'http://localhost:5000/'
}

const getEvent = (req, res) => {

  axios.get(`${apiOptions.server}api/events/${req.params.id}`)
  .then((response) => {
    const eventData = response.data;
    res.render('metodopag', { eventData });
  }).catch( (error) => {
    console.log(error);
  });
};

const postBuyTickets = async (req, res) => {
  const response = await axios.get(`${apiOptions.server}api/events/${req.body.id}`)
  const eventData = response.data.precio;

  let environment = new paypal.core.SandboxEnvironment(
    process.env.PAY_PAL_CLIENT_ID,
    process.env.PAY_PAL_CLIENT_SECRET
  );
  let client = new paypal.core.PayPalHttpClient(environment);

  const request = new paypal.orders.OrdersCreateRequest();

  request.prefer('return=representation');

  request.requestBody({
    intent: 'CAPTURE',
    purchase_units: [{
      amount: {
        currency_code: 'USD',
        value: `${eventData * req.body.cantidad}`
      }
    }]
  });

  try {
    const response = await client.execute(request);
    res.redirect("/");
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
  
};

module.exports = {
  getEvent,
  postBuyTickets
};