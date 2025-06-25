
import { FaMusic,FaLaughSquint,} from 'react-icons/fa';
import { GiMuscleUp, } from "react-icons/gi";
import { GiMagicHat } from "react-icons/gi";
import { BiSolidMoviePlay } from "react-icons/bi";
import { IoGameController } from "react-icons/io5"; 
import Marquee from "react-fast-marquee";

const CatogoryEvent = () => { 

   
    return (
		
    <div className='w-11/12  mx-auto pb-10'>
 
<div className=' flex flex-col justify-center py-10 items-center'>

<h1 className='text-center  text-4xl font-bold'>Entertainment We Organize  !</h1> 


<p className='text-center p-4 md:w-[50%] text-gray-400'>Thought for a couple of seconds



We bring joy, laughter, and excitement through a wide range of curated entertainment events — from live music and stand-up comedy to dance shows, movie nights,<p className='hidden md:block'> and game nights. Whether you're seeking a night full of energy or something more relaxed, our events are designed to create memorable experiences for everyone.</p>
</p>
</div>


<Marquee speed={80} pauseOnHover={true}  >

<div className='flex gap-10 text-white'>
            
<div className="flex ml-10 text-white h-[175px] w-[250px] md:h-[250px] md:w-[300px] p-4 space-x-4 rounded-lg md:space-x-6 bg-[#8E24AA] dark:text-gray-800">
			<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-600">
			<div className='flex justify-center items-center'>
                <FaMusic size={80}></FaMusic>
            </div>
			</div>
			<div className="flex  flex-col justify-center align-middle">
				<p className="text-3xl font-semibold leading-none"> 243+</p>
				<p className="capitalize">Live Music </p>
			</div>
		</div>


<div className="flex text-white h-[175px] w-[250px] md:h-[250px] md:w-[300px] p-4 space-x-4 rounded-lg md:space-x-6 bg-[#8E24AA] dark:text-gray-800">
			<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-600">
			<div className='flex justify-center items-center'>
                <GiMuscleUp size={80}></GiMuscleUp>
            </div>
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-3xl font-semibold leading-none"> 234+</p>
				<p className="capitalize">Dance Show</p>
			</div>
		</div>




        
<div className="flex text-white h-[175px] w-[250px] md:h-[250px] md:w-[300px] p-4 space-x-4 rounded-lg md:space-x-6 bg-[#8E24AA] dark:text-gray-800">
			<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-600">
			<div className='flex justify-center items-center'>
                <FaLaughSquint size={80}></FaLaughSquint>
            </div>
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-3xl font-semibold leading-none"> 123+</p>
				<p className="capitalize">Stand-Up Comedy</p>
			</div>
		</div>




<div className="flex text-white h-[175px] w-[250px] md:h-[250px] md:w-[300px] p-4 space-x-4 rounded-lg md:space-x-6 bg-[#8E24AA] dark:text-gray-800">
			<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-600">
			<div className='flex justify-center items-center'>
                <GiMagicHat size={80}></GiMagicHat>
            </div>
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-3xl font-semibold leading-none"> 593+</p>
				<p className="capitalize">Magic Show</p>
			</div>
		</div> 


<div className="flex text-white h-[175px] w-[250px] md:h-[250px] md:w-[300px] p-4 space-x-4 rounded-lg md:space-x-6 bg-[#8E24AA] dark:text-gray-800">
			<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-600">
			<div className='flex justify-center items-center'>
                <BiSolidMoviePlay size={80}></BiSolidMoviePlay>
            </div>
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-3xl font-semibold leading-none"> 233+</p>
				<p className="capitalize">Movie Night</p>
			</div>
		</div>


<div className="flex text-white h-[175px] w-[250px] md:h-[250px] md:w-[300px] p-4 space-x-4 rounded-lg md:space-x-6 bg-[#8E24AA] dark:text-gray-800">
			<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-600">
			<div className='flex justify-center items-center'>
                <IoGameController size={80}></IoGameController>
            </div>
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-3xl font-semibold leading-none"> 
                    330+</p>
				<p className="capitalize">Game Night</p>
			</div>
		</div>









        </div>
       </Marquee>
    </div>
    );
};

export default CatogoryEvent;