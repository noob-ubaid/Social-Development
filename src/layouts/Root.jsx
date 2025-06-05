import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div className='max-w-[1600px] mx-auto font-roboto'>
            <Navbar/>
            <div className='px-4 md:px-0'>
        <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;