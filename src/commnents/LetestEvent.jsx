import React from 'react';
import party1 from '../assets/146091_00_2x (1).webp' 
import party2 from '../assets/istockphoto-479977238-612x612.jpg'
const LetestEvent = () => {
    return (
        <div className=' py-10  w-11/12 mx-auto'>
             <div className=''>

<h1 className='text-center pt-10 text-4xl font-bold'>Latest Events !</h1> 


<p className='text-center py-4 text-gray-400'>Thought for a couple of seconds



Check out our most recent events and stay updated!
</p>
</div>



<div className="py-10">

 
  <div className="flex flex-col lg:flex-row items-center gap-10 justify-between w-11/12 mx-auto my-20">
    <div className="lg:w-1/2 w-full flex justify-center">
      <img className="w-[500px] h-[500px] object-cover" src={party1} alt="Under the Stars" />
    </div>

    <div className="text-left lg:w-1/2 w-full">
      <h1 className="font-bold text-6xl">Under the Stars</h1>
      <p className="py-10 text-xl">
        Join us for a magical night beneath the open sky at Under the Stars — a rooftop party experience filled with live DJ sets, ambient lighting, signature cocktails, and unforgettable vibes. Whether you're dancing with friends or relaxing under twinkling lights, this is the perfect escape from the ordinary. Dress to impress and get ready for a night of music, laughter, and memories under the stars.
      </p>
    </div>
  </div>

  
  <div className="flex flex-col lg:flex-row items-center gap-10 justify-between w-11/12 mx-auto my-20">
    <div className="lg:w-1/2 w-full text-left md:text-right">
      <h1 className="font-bold text-6xl">Neon Eclipse</h1>
      <p className="py-10 text-xl">
        Step into a world of color and contrast at Neon Eclipse — a high-energy night where glowing lights meet deep shadows. This electrifying party fuses futuristic vibes with immersive visuals, UV paint, laser shows, and non-stop beats from top DJs. Dress in your brightest neon and prepare for an unforgettable night where the darkness glows and the music never stops.
      </p>
    </div>

    <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
      <img className="w-[500px] h-[500px] object-cover" src={party2} alt="Neon Eclipse Event" />
    </div>
  </div>

</div>



        </div>
    );
};

export default LetestEvent;