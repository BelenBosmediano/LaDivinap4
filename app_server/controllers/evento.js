const axios = require('axios');


let apiOptions = {
  server: ""
}


if (process.env.NODE_ENV === 'production') {
    apiOptions.server = 'https://ladivina-69d1bc0b8c8c.herokuapp.com/'
} else {
    apiOptions.server = 'http://localhost:5000/'
}


// const getEvent = (req, res, body) => {
//   const event = {
//     title: 'Sample Event',
//     imageUrl: 'https://via.placeholder.com/300x200.png',
//     description: 'This is a sample event description.',
//   };

//   res.render('eventos' );
// };


const eventos = (req, res, next) => {
  const path = 'api/events';
  axios.get(`${apiOptions.server}${path}`).then((response) => {
    console.log(response.data);
    console.log(response.status);
    if (response.status === 200) {
      res.render('eventos' , { eventos: response.data });
    } else {
      console.log(response.status);
    }
  }).catch((err) => {
    console.log(err.message);
  });
}

const deleteEvent = (req, res, next) => {
  const path = `api/events/${req.params.eventid}`;
  axios.delete(`${apiOptions.server}${path}`).then((response) => {
    res.redirect('/evento2');
  }).catch((err) => {
    console.log(err.message);
  });
}
const getSingleEvent = (req, res, next) => {
  const path = `api/events/${req.params.eventid}`;
  axios.get(`${apiOptions.server}${path}`).then((response) => {
    if (response.status === 200) {
      res.render('evento' , { evento: response.data });
    } else {
      console.log(response.status);
    }
  }).catch((err) => {
    console.log(err.message);
  });
};

const renderForm = (req, res, body) => {
  const path = `api/events/${req.params.eventid}`;
  axios.get(`${apiOptions.server}${path}`).then((response) => {
    if (response.status === 200) {
      res.render('formulario' , { event: response.data });
    } else {
      console.log(response.status);
    }
  }).catch((err) => {
    console.log(err.message);
  });
};

const editEvent = (req, res, next) => {
  const path = `api/events/${req.params.eventid}`;
  const postdata = {
    nombre: req.body.nombre,
    imagen: req.body.imagen,
    genero:req.body.genero,
    ubicacion:req.body.ubicacion,
    fecha: req.body.fecha,
    detalle: req.body.detalle,
    precio: req.body.precio
    
  };
  axios.put(`${apiOptions.server}${path}`, postdata).then((response) => {
    if (response.status === 200) {
      res.redirect(`/evento2/evento/${req.params.eventid}`);
    } else {
      console.log(response.status);
    }
  }).catch((err) => {
    console.log(err.message);
  });
};

const renderFormCreate = (req, res, body) => {
  res.render('creareventos');
}

const createEvent = async (req, res, next) => {
  try {
    console.log("🚀 ~ createEvent ~ req:", req)
    const path = 'api/events';
    const postdata = {
      nombre: req.body.nombre,
      genero:req.body.genero,
      imagen: req.file.filename,
      ubicacion:req.body.ubicacion,
      fecha: req.body.fecha,
      detalle: req.body.detalle,
      precio: req.body.precio
    };
    await axios.post(`${apiOptions.server}${path}`, postdata).then((response) => {
      if (response.status === 201) {
        res.redirect(`/evento2`);
      } else {
        console.log(response.status);
      }
    }).catch((err) => {
      console.log(err.message);
    });
  } catch (error) {
    console.log("🚀 ~ createEvent ~ error:", error.message)
    
  }
};

module.exports = {
  eventos,
  //getEvent,
  deleteEvent,
  getSingleEvent,
  renderForm,
  editEvent,
  renderFormCreate,
  createEvent
}