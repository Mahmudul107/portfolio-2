import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
    useEffect(() => {
        document.body.classList.add('overflow-x-hidden');
        return () => {
            document.body.classList.remove('overflow-x-hidden');
        };
    }, []);

    return (
        <div className='min-w-min bg-gradient-to-r from-[#086992] via-[#08206d] to-[#37006d] p-8'>
            <Outlet />
        </div>
    );
};

export default Main;
``
