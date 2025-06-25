import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { Link, useLoaderData, useParams } from 'react-router';
import SingleCard from './SingleCard';
import Nav from './Nav';
import Footer from './Footer';

const DetailsCard = () => {

    const [singledata,SetSingleData] =useState([])
    const AllData = useLoaderData() 

    const {id} =useParams() 

   
    useEffect(()=>{


        const findOut = AllData.find(res=> res.id == id) 

        SetSingleData(findOut)
    },[id,AllData])

    
    return (
      <div>
          <div className='w-11/12 mx-auto'>

<Nav></Nav>
   <div className=''>

<h1 className='text-center pt-10 text-4xl font-bold'>Event Overview</h1> 


<p className='text-center py-4 text-gray-400'>Thought for a couple of seconds



Get all the essential details you need in one place. Discover when and where the event takes place, <br /> <span className='hidden md:block'>  who’s on the lineup, and what experiences await you—from live performances and interactive workshops to  food stalls and art installations. Whether <br /> you’re planning your day, looking for must-see highlights, or checking practical info like entryrequirements and timings, this overview has   <br /> you covered so you can make  the most of the event.</span>
</p>
</div>

   <div>
     
   <SingleCard singledata={singledata}></SingleCard>
   </div>

</div>


<Footer></Footer>
      </div>
    );
};

export default DetailsCard;