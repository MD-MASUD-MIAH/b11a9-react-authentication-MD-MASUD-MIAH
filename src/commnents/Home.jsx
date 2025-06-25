import React from 'react';
import { useLoaderData } from 'react-router';
import Card from './Card';

const Home = () => {

    const  data = useLoaderData() 

   
    return (
        <div className='pb-10'>
              <div className='my-12'>

              <h1 className='text-center pt-10 text-4xl font-bold'>Upcoming Events You’ll Love</h1> 


              <p className='text-center py-4 text-gray-400 w-[80%] mx-auto'>Discover the most exciting events happening near you—music festivals, art shows, film expos, <br /> <span className='hidden md:block'>comedy nights, and more! Whether you're into live concerts, cultural celebrations,  or creative gatherings, <br /> we've handpicked events that match your vibe. Stay in the loop and never miss out on the fun again!</span></p>
              </div>
            <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3 md:gap-20'>
                {
                    data.map(data=><Card key={data.id} data={data}></Card>)
                }
            </div>
        </div>
    );
};

export default Home;