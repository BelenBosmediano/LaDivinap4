const events = [
  {
    title: 'Evento 1',
    description: 'Descripcion del Eventos',
  },
];

exports.viewProfile = (req, res) => {
  res.render('Perfil', { events });
};

exports.editProfile = (req, res) => {
  res.send('Editar Perfil...');
};