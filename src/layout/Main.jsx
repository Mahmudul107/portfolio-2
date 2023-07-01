import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='bg-gradient-to-r from-[#086992] via-[#08206d] to-[#37006d] p-8'>
            <Outlet />
            <div className='divider divide-zinc-50'></div>
        </div>
    );
};

export default Main;