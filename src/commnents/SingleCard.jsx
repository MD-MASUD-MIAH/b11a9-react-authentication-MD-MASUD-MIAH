import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { TitleUse } from './Title';

const SingleCard = ({singledata}) => {


  TitleUse('Details')
    const {
       
        name,
        thumbnail,
        category,
        date,
        location,
        entry_fee,
        description
      } = singledata 

      const handleClick = (e) => {

        e.preventDefault()

      
        toast.success('Reserve Seat  successful!');
       e.target.reset()
      };
    
    return (
        <div>
           
            <ToastContainer></ToastContainer>
            <div className='  p-4 md:py-23  '> 

       <div className='border grid grid-cols-1 gap-20 lg:grid-cols-3 justify-center items-center  border-gray-400 rounded-2xl p-5 md:p-10'>
      
      
       <div className=' '>
           <img className='rounded-2xl  w-full h-full  ' src={thumbnail} alt="" /> 

           </div>


         <div className='flex flex-col gap-5'>
         <h1 className='font-bold text-2xl'>{name}</h1> 
         
       


  <div>

  <div className="space-y-2">
  <div className="flex">
    <span className="font-normal min-w-[100px]">Location:</span>
    <h1 className="font-bold">{location}</h1>
  </div>
  <div className="flex">
    <span className="font-normal min-w-[100px]">Date:</span>
    <h1 className="font-bold">{date}</h1>
  </div>
  <div className="flex">
    <span className="font-normal min-w-[100px]">Entry Fee:</span>
    <h1 className="font-bold">{entry_fee} Taka</h1>
  </div>
  <div className="flex">
    <span className="font-normal min-w-[100px]">Category:</span>
    <h1 className="font-bold">{category}</h1>
  </div>
</div>

    <div>
   

    </div>
  </div>
         <p className=' hidden md:block text-[14px]'>{description}</p> 

      
         </div> 

         <div className="md:max-w-sm   mx-auto border rounded p-6 shadow ">
      <h2 className="text-xl font-semibold mb-6">Reserve </h2>
      <form onSubmit={handleClick} className="space-y-4">
        <div>
          <label className="block text-sm mb-1">Your Name</label>
          <input

          name='name'
            type="text"
            className="w-full border-b placeholder:text-xs border-gray-300 focus:outline-none py-1"
            placeholder="Enter your name"
            required
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Username or Email</label>
          <input

          name='email'
            type="email"
            className="w-full border-b placeholder:text-xs border-gray-300 focus:outline-none py-1"
            placeholder="Enter your username or email"
            required
          />
        </div>

       
      

        <button
     
          className="w-full bg-[#8E24AA] hover:bg-[#731b8c] text-white py-2 rounded shadow-lg hover:shadow-purple-500/50 transition duration-300 "
        >
        Reserve Seat
        </button>

     
      </form>
    </div>

       </div>
             
            </div>
        </div>
    );
};

export default SingleCard;