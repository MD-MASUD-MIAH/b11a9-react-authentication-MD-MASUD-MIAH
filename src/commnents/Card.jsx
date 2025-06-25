import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Contexts/AuthContext';
 
const Card = ({data}) => {

    const {click,setClick} =use(AuthContext) 

    
    
    return (
        <div className="card bg-base-100  shadow-sm"> 
       
        <figure>
          <img className='h-[250px] w-full'
           src={data.thumbnail}></img> 
        </figure>
        <div className="card-body">
          <h2 className="card-title   text-center">{data.name}</h2> 

          <div className=" grid grid-cols-1 justify-center  md:flex md:justify-between"> 
 <div>

  <p className="font-bold">
    <span className="font-normal">Location:</span> {data.location}
  </p>
  <p className="font-bold">
    <span className="font-normal">Event Date:</span> {data.date}
  </p>


 </div>

  <div>
  <p className="font-bold">
    <span className="font-normal">Category:</span> {data.category}
  </p>
  <p className="font-bold">
    <span className="font-normal ">Entry Fee:</span> {data.entry_fee} Taka
  </p>
  </div>


</div>


        
          <div className="card-actions justify-end">
            <Link onClick={()=>setClick(!click)} to={`/details/${data.id}`} className="btn w-full bg-[#8E24AA] hover:bg-[#731b8c] text-white py-2 rounded shadow-lg hover:shadow-purple-500/50 transition duration-300">View More</Link>
          </div>
        </div>
      </div>
    );
};

export default Card;