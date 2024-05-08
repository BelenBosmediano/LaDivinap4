const events = [
  {
    title: 'Evento 1',
    description: 'Descripcion del Evento',
  },
];

exports.viewProfile = (req, res) => {
  res.render('Perfil', { events });
};

exports.editProfile = (req, res) => {

  res.send('Seguir...');
};