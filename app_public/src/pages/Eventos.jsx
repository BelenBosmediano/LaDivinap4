import React from 'react'
import EventosBody from '../components/eventos/EventosBody';

const Eventos = () => {
    return (
        <>
            <div className='bg-primary'>
                <h1 className="display-1">Eventos</h1>
            </div>
            <div className="container">
                <EventosBody />
            </div>
        </>

    )
}

export default Eventos;
