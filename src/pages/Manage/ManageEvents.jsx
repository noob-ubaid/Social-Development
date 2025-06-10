import React from 'react';
import { useLoaderData } from 'react-router';
import MyEvents from '../MyEvents/MyEvents';

const ManageEvents = () => {
    const data = useLoaderData()
    return (
       <div className='flex flex-col gap-6 my-8 md:my-12'>
       {
        data.length < 1 ? <p>not found</p> : data.map(card => <MyEvents key={card._id} card={card}></MyEvents>)
       }
       </div>
    );
};

export default ManageEvents;