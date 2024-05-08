import useListEvents from "../../hooks/useListEvents";

const EventosBody = () => {
  const { isLoading, events } = useListEvents();
  
  return (
    <>
      <div className="container">
        <div className="row">
        {isLoading && <div className="spinner-borde"></div>}
          {events.map((event) => (
            <div className="col-md-4" key={event._id}>
              <div className="card mb-4">
                <img src={`/uploads/${event.imagen}`} className="card-img-top" alt="imagen evento" />
                <p>{event.nombre}</p>
                <p>{event.genero}</p>
                <p>{event.ubicacion}</p>
                <p>{event.precio}</p>
                <p>{event.fecha}</p>
              </div>
            </div>
          ))}
        </div>
        <a href="/evento2/create/event-form" className="btn btn-primary btn-lg">Crear Evento</a>
      </div>
    </>
  );
};

export default EventosBody;
