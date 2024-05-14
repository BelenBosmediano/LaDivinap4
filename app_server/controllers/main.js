const axios = require('axios');

const apiOptions = {
  server: "http://localhost:5000/"
}

if (process.env.NODE_ENV === "production") {
  apiOptions.server = "https://ladivinap4-604b84fbbc08.herokuapp.com/"
}


exports.createEvent = (req, res) => {
  res.send('Creating an event...');
};

exports.viewEvents = (req, res) => {
  const events = [
    { id: 1, name: 'Sample Event 1' },
    { id: 2, name: 'Sample Event 2' },
  ];

 
  
 
};

exports.viewEvent = (req, res) => {
  res.send('Viewing an event...');
};

exports.purchaseTickets = (req, res) => {
  res.send('Purchasing tickets...');
}; 



const gethome = async (req, res) => {
  try {
    const path = 'api/events';
    const response = await axios.get(`${apiOptions.server}${path}`);
    let events = [];
    for (let i = 0; i < 4; i++) {
      events.push(response.data[i]);
    }
    console.log("🚀 ~ events:", events)
    res.render('index', {logedIn: req.session.token ? true : false, events: events});
    
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
};  

module.exports = {
  gethome
};