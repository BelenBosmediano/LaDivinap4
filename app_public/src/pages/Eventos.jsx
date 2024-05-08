import React from 'react'
import EventosBody from '../components/eventos/EventosBody';
import '../stylesheets/stile.css'; 


const Eventos = () => {
    return (
        <>
            <div className='eventos-page'>
              <header className='bg-primary'>
                <h1 className="display-1 text-center">Eventos</h1>
              </header>
              <div className="container">
                <EventosBody />
              </div>
            </div>
        </>

    )
}

export default Eventos;
