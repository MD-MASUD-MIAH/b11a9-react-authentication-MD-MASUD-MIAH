import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Contexts/AuthContext';
import { toast } from 'react-toastify';
import { TitleUse } from './Title';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const NewAccount = () => {
const [showpassword,setShowpassword] =useState(false)
  TitleUse('Register')

  const {createAccount,googlesign,setUser, updateUser} =use(AuthContext)

   const navigate = useNavigate()


  const  handleCreate = (e)=>{

    e.preventDefault() 

    const Name = e.target.name.value 


    const photo = e.target.photo.value 
    const email = e.target.email.value 
    const password = e.target.password.value 

   console.log(photo,Name);
   

     if(password.length < 6 ){
    
          toast.error('Length must be at least 6 characte.');
    
    return
    
        }else if(!/[A-Z]/.test(password)){
    
          toast.error('Must have an Uppercase letter in the password');
    return
        }else if(!/[a-z]/.test(password)){
    
          toast.error('Must have a Lowercase letter in the password'); 

          return

        } 


        createAccount(email, password)
        .then((result) => {
          const user = result.user;
  
          updateUser({ displayName: Name, photoURL: photo }).then(() => {
            toast.success('Register Successful! 🎉');
            setTimeout(() => {
              navigate(location.state ? location.state : '/');
            }, 1000);
            setUser({ ...user, displayName: Name, photoURL: photo });
        }).catch(error => {
            console.log(error);
            setUser(user);  
        });
        
        })
        .catch((error) => {
          console.log(error.message);
        });
  } 


  const  handleGoogle = ()=>{



   
    googlesign().then(res=>{
      toast.success('Login Success! 🎉');  

      console.log(res); 
      setTimeout(() => {
        navigate(location.state ? location.state : '/');
      }, 1000); 
    }).catch(error=>{
      toast.error(" Register failed: " +error.message );
      console.log(error.message);
      
    })
    
  }


   
    return (
        <div> 



                   <div className='  py-10 flex flex-col items-center justify-center'>
       
       
       <div className="md:max-w-sm  md:mx-auto border rounded p-6 shadow ">
             <h2 className="text-xl font-semibold mb-6">   Register</h2>
             <form onSubmit={handleCreate} className="space-y-4">
       
               <div>
                 <label className="block text-sm mb-1">Name</label>
                 <input
       
                 name='name'
                   type="text"
                   className="w-full border-b placeholder:text-xs border-gray-300 focus:outline-none py-1"
                   placeholder="Enter your Name"
                 />
               </div>


               <div>
     
       </div>
               <div>
                 <label className="block text-sm mb-1">PhotoURL</label>
                 <input
       
                 name='photo'
                   type="text"
                   className="w-full border-b placeholder:text-xs border-gray-300 focus:outline-none py-1"
                   placeholder="Enter your PhotoURL"
                 />
               </div>



               <div>
                 <label className="block text-sm mb-1">Username or Email</label>
                 <input
       
                 name='email'
                   type="email"
                   className="w-full border-b placeholder:text-xs border-gray-300 focus:outline-none py-1"
                   placeholder="Enter your username or email"
                 />
               </div>





               <div className='relative'>
                 <label className="block text-sm mb-1">Password</label>
                 <input name='password'
                   type={showpassword?'text':'password'}
                   className="w-full border-b placeholder:text-xs border-gray-300 focus:outline-none py-1"
                   placeholder="Enter your password"
                 /> 
                 <a onClick={()=>setShowpassword(!showpassword)} className='absolute  right-1 bottom-1'>
                  {
                    showpassword ?<FaEyeSlash></FaEyeSlash> :  <FaEye></FaEye>
                  }
                  
                </a>
               </div>
       
               <div className="flex items-center justify-between text-sm">
              
               </div>
       

               <button
                 type="submit"
                 className="w-full bg-[#8E24AA] hover:bg-[#731b8c] text-white py-2 rounded shadow-lg hover:shadow-purple-500/50 transition duration-300 "
               >
              Register
               </button>
       
               <p className="text-center text-sm mt-4 mr-10">
                 Already { " "} have an account? Please{' '} 
                 <Link to='/loginpages/login' href="#" className="text-[#8E24AA] underline ">
                 Login {'  '}
                 </Link>
               </p>
             </form>
           </div>
       
       <div>
       
       
       <div className="flex w-[300px] items-center my-4">
         <div className="flex-grow h-px bg-gray-300"></div>
         <span className="mx-2 text-sm">Or</span>
         <div className="flex-grow  h-px bg-gray-300"></div>
       </div>
       
       
       <div className='flex flex-col gap-4  items-center justify-center'>
       
       
       <button onClick={handleGoogle} className="btn w-full bg-white text-black border-[#e5e5e5]">
         <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
         Login with Google
       </button>  
       
       
       
       </div>
       
       </div>
       
       
       </div>
       
       
               </div>


       
    );
};

export default NewAccount;