import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import MyEvents from '../MyEvents/MyEvents';
import NoEvents from '../NoEvents/NoEvents';

const ManageEvents = () => {
    const data = useLoaderData()
    const [events,setEvents] = useState(data)
    return (
       <div className='flex flex-col gap-6 my-8 md:my-12'>
       {
        events.length < 1 ? <NoEvents></NoEvents> : events.map(card => <MyEvents key={card._id} events={events} setEvents={setEvents} card={card}></MyEvents>)
       }
       </div>
    );
};

export default ManageEvents;