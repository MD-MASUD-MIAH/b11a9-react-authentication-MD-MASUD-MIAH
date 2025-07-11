import React, { use, useRef,   } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Contexts/AuthContext';
import { toast } from 'react-toastify';
import { TitleUse } from './Title';

const Login = () => {

  TitleUse('Login')
  const {LoginUser,googlesign} = use(AuthContext)

  const location = useLocation()
const navigate =  useNavigate() 

 




const emailref = useRef()

const  handleforget = ()=>{

const email = emailref.current.value

if(!email){

  toast.info("please entry your Email");

}else{

  navigate(`/loginpages/forget?email=${email}`)
console.log(email);
}

}

  const  handleLongin = (e)=>{


    e.preventDefault() 

    
    const email = e.target.email.value 
    const password = e.target.password.value 

    
   
    if(password.length < 6 ){

      toast.error('Length must be at least 6 characte.');

return

    }else if(!/[A-Z]/.test(password)){

      toast.error('Must have an Uppercase letter in the password');
return
    }else if(!/[a-z]/.test(password)){

      toast.error('Must have a Lowercase letter in the password');
    }

    LoginUser(email, password)
    .then(res => {
      console.log(res);
      toast.success('Login Success! 🎉'); 
  
      setTimeout(() => {
        navigate(location.state ? location.state : '/');
      }, 1000); 
    })
    .catch(error => {
     
   
      toast.error('Login failed: ' + error.message);
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

      console.log(error.message);
      
      toast.error('Login failed: ' + error.message);
    })
    
  } 


  
    return (
        <div> 


       
            <div className=' w-11/12 mx-auto py-10 flex flex-col items-center justify-center'>


<div className="md:max-w-sm   mx-auto border rounded p-6 shadow ">
      <h2 className="text-xl font-semibold mb-6">Login</h2>
      <form onSubmit={handleLongin} className="space-y-4">
        <div>
          <label className="block text-sm mb-1">Username or Email</label>
          <input
            required
            ref={emailref}
          name='email'
            type="email"
            className="w-full border-b placeholder:text-xs border-gray-300 focus:outline-none py-1"
            placeholder="Enter your username or email"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Password</label>
          <input name='password'
            type="password"
            className="w-full border-b placeholder:text-xs border-gray-300 focus:outline-none py-1"
            placeholder="Enter your password"
            required
          />
        </div>

        <div className="flex items-center justify-between text-sm">
        
          <button onClick={handleforget}   href="#" className="text-[#8E24AA] hover:underline">
            Forgot Password ?
          </button>
        </div>


        <button
          type="submit"
          className="w-full bg-[#8E24AA] hover:bg-[#731b8c] text-white py-2 rounded shadow-lg hover:shadow-purple-500/50 transition duration-300 "
        >
          Login
        </button>

        <p className="text-center text-sm mt-4">
          Don’t have an account? Please{' '} 
          <Link to='/loginpages/new' href="#" className="text-[#8E24AA] underline">
          Register
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


<button onClick={handleGoogle} className="btn w-full bg-white   text-black border-[#e5e5e5]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button>  



</div>

</div>


</div>


        </div>
       
    )
};

export default Login;