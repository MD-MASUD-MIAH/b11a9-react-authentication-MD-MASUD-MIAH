import React, { use, useEffect, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Contexts/AuthContext';
import { toast } from 'react-toastify';
const Forget = () => {



  const {forgetPass,} =use(AuthContext)
  const [mail, setEmail] = useState('');
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const emailFromUrl = params.get('email');
    setEmail(emailFromUrl);
    console.log("Email from URL:", emailFromUrl);
  }, []);

    const handlepass = (e)=>{



        e.preventDefault() 
   const email = e.target.email.value   
      console.log(email);

;

  console.log(email);
  
  forgetPass(email).then(()=>{
    toast.info("Password reset link sent to your email");
 
    setTimeout(() => {
      window.open("https://mail.google.com", "_blank");
    }, 800); 

})
  .catch(error=>{

  console.log(error.message);
  
})

    }
    return (
        <div>
            
            <div className=' w-11/12 mx-auto py-10 flex flex-col items-center justify-center'>


<div className="md:max-w-sm   mx-auto border rounded p-6 shadow ">
      <h2 className="text-xl font-semibold mb-6">Reset Password</h2>
      <form onSubmit={handlepass} className="space-y-4">
        <div>
          <label className="block text-sm mb-1">Username or Email</label>
          <input
       
            defaultValue={mail && mail}
          name='email'
            type="email"
            className="w-full border-b placeholder:text-xs border-gray-300 focus:outline-none py-1"
            placeholder="Enter your username or email"
          />
        </div>

       
      
        <button
  type="submit"
  
  className="w-full bg-[#8E24AA] hover:bg-[#731b8c] text-white py-2 rounded shadow-lg hover:shadow-purple-500/50 transition duration-300"
>
  Reset
</button>



        <p className="text-center text-sm mt-4">
          Don’t have an account? Please{' '} 
          <Link to='/loginpages/new' href="#" className="text-[#8E24AA] underline">
            Create an account
          </Link>
        </p>
      </form>
    </div>



</div>
</div>
   )
};

export default Forget;