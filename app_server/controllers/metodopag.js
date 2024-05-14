const axios = require('axios');
const paypal = require('@paypal/checkout-server-sdk');
const QRcode = require('qrcode');


let apiOptions = {
  server: ''
}

if (process.env.NODE_ENV === 'production') {
    apiOptions.server = 'https://ladivinap4-604b84fbbc08.herokuapp.com/'
} else {
    apiOptions.server = 'http://localhost:5000/'
}

const getEvent = (req, res) => {

  axios.get(`${apiOptions.server}api/events/${req.params.id}`)
  .then((response) => {
    const eventData = response.data;
    res.render('metodopag', { eventData, logedIn: req.session.token ? true : false });
  }).catch( (error) => {
    console.log(error);
  });
};

const postBuyTickets = async (req, res) => {
  try {
  const response = await axios.get(`${apiOptions.server}api/events/${req.body.id}`)
  const eventData = response.data.precio;
  console.log("🚀 ~ postBuyTickets ~ response:", response.data)
  console.log("🚀 ~ postBuyTickets ~ req.session.userid:", req.session.userid)

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

  
    const responsePaypal = await client.execute(request);
    res.redirect(`/metodopag/qrentradas/event/${response.data._id}/user/${req.session.userid}`);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: error.message });
  }
  
};
  

const qrentradas = async (req, res) => {
  const responseUser = axios.get(`${apiOptions.server}api/users/${req.params.userid}`)
  const responseEvent = axios.get(`${apiOptions.server}api/events/${req.params.eventid}`)
  let url = `${apiOptions.server}metodopag/qrentradas/event/${req.params.eventid}/user/${req.session.userid}`
  const qrcode = await QRcode.toDataURL(url)
  res.render('qrentradas', { qr: qrcode, logedIn: req.session.token ? true : false, user: responseUser.data, event: responseEvent.data });
}



module.exports = {
  getEvent,
  postBuyTickets,
  qrentradas,
};