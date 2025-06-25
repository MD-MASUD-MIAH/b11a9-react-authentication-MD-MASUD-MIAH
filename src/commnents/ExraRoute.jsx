import React from 'react';
import { TitleUse } from './Title';

const ExraRoute = () => {

    TitleUse(" FAQ")
    return (
        <div className='w-11/12 mx-auto flex flex-col gap-5 items-center justify-center py-5 md:py-10'>
  
<div className=''>

<h1 className='text-center  text-xl md:text-4xl font-bold'>Frequently Asked Questions (FAQ)</h1> 


<p className='text-center text-xs md:text-[14px] py-4 mt-5 text-gray-400'>Find answers to the most common questions about our events, ticket reservations,  services, and more. If you need further help, <span className='hidden md:block'> <br /> feel free to contact our support team anytime.</span>
</p>
</div>

<div className='border border-[#8E24AA] p-5 md:p-10'>


<div className="collapse collapse-plus bg-base-100 border border-base-300">


<input type="radio" name="my-accordion-3" defaultChecked />
<div className="collapse-title font-semibold">How can I find events near me?</div>
<div className="collapse-content text-sm"> <span className='font-bold text-[16px] text-[#8E24AA]'>Answer : </span>You can use the search function on our website to filter events by location, date, and type. We also provide a map view for easier navigation, helping you find events close to your area.</div> 
</div>


<div className="collapse collapse-plus bg-base-100 border border-base-300">


<input type="radio" name="my-accordion-3" defaultChecked />
<div className="collapse-title font-semibold">Is there a limit to how many tickets I can buy for an event?</div>
<div className="collapse-content text-sm"> <span className='font-bold text-[16px] text-[#8E24AA]'>Answer : </span> There may be a limit depending on the event and its capacity. Some events may allow group reservations, while others might restrict the number of seats per user to ensure fairness for all attendees.</div> 
</div>


<div className="collapse collapse-plus bg-base-100 border border-base-300">


<input type="radio" name="my-accordion-3" defaultChecked />
<div className="collapse-title font-semibold"> Can I attend the event if I'm late?</div>
<div className="collapse-content text-sm"> <span className='font-bold text-[16px] text-[#8E24AA]'>Answer : </span>It depends on the event's policy. Some events may allow late arrivals, while others may have strict entry times. Please check the event page for specific entry rules.</div> 
</div>


<div className="collapse collapse-plus bg-base-100 border border-base-300">


<input type="radio" name="my-accordion-3" defaultChecked />
<div className="collapse-title font-semibold">What services do you provide at events?</div>
<div className="collapse-content text-sm"> <span className='font-bold text-[16px] text-[#8E24AA]'>Answer : </span> We offer a variety of services including seat reservations, event reminders, live updates, exclusive event content, VIP services, and sometimes event-related merchandise. Check individual event pages for specific services.</div> 
</div>

<div className="collapse collapse-plus bg-base-100 border border-base-300">


<input type="radio" name="my-accordion-3" defaultChecked />
<div className="collapse-title font-semibold">Do I need to print my ticket?</div>
<div className="collapse-content text-sm"> <span className='font-bold text-[16px] text-[#8E24AA]'>Answer : </span>Most events will accept digital tickets, which can be shown from your smartphone. However, please check the event details to confirm whether a printed ticket is required.</div> 
</div>


</div>

        </div>
    );
};

export default ExraRoute;