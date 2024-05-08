const { response } = require("express");

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



module.exports.gethome = (req, res) => {
  res.render('index');
};  