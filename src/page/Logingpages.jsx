import React from 'react';
import Nav from '../commnents/Nav';
import { Outlet } from 'react-router';
import Footer from '../commnents/Footer';
import { ToastContainer } from 'react-toastify';

const Logingpages = () => {
    return (
        <div className='min-h-screen flex flex-col'>
<ToastContainer

   
position="top-right"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover


></ToastContainer>


            <Nav></Nav> 


        <main className='flex-1'>
        <Outlet></Outlet>
        </main>
            <Footer></Footer>
        </div>
    );
};

export default Logingpages;