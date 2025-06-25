import React from 'react';
import Navbar from '../commnents/Navbar';
import { Outlet,  useNavigation } from 'react-router';
import Hero from '../commnents/Hero';
import { ToastContainer, } from 'react-toastify';
import Footer from '../commnents/Footer';
import Loader from '../commnents/Loader';
import { Helmet } from 'react-helmet-async';
import { TitleUse } from '../commnents/Title';
import ExtratSection from '../commnents/ExtratSection';
import LetestEvent from '../commnents/LetestEvent';
import CatogoryEvent from '../commnents/CatogoryEvent';
const Root = () => {

   const {state} =  useNavigation()

   TitleUse('Home')
    return (
        <div>
  
         <header className=''> 


           
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
         
         
         >

         </ToastContainer>
       <div className='flex 
        justify-center'>
       <Navbar></Navbar> 
       </div>
        <Hero ></Hero>
         </header>

         <main>
       {
    state =='loading' ?<Loader></Loader> : <Outlet></Outlet>
       } 

    <LetestEvent></LetestEvent> 

    <CatogoryEvent></CatogoryEvent>
         </main>

         <footer>

            <Footer></Footer>
         </footer>
        </div>
    );
};

export default Root;