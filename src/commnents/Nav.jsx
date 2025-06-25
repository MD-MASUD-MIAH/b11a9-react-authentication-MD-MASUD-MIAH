import { use } from 'react';
import { Link,  NavLink, } from 'react-router';
import logo from '../assets/logo-3.svg' 
import userIcon from '../assets/user.png'
import { AuthContext } from '../Contexts/AuthContext';
import { toast } from 'react-toastify';


const Nav = () => {

  // const navigate = useNavigate() 
   const {user,logout,}  = use(AuthContext) 
  
   
   const handleLogout  = ()=>{
   
   
     logout().then(res=>{
   
      // navigate('/')
       console.log(res); 
        setTimeout(() => {
            toast.info("Logout Success !");
          }, 200); 
      
     }).catch(error=>{
   
       console.log(error.message);
       
     })
   }
    const links = <>
    
    
    <li><NavLink  to='/'> Home</NavLink></li>
     <li><NavLink to='/loginpages/faq'>FAQ</NavLink></li> 
    <li><NavLink to='/loginpages/profile'>My Profile</NavLink></li> 
    <li><NavLink to='/loginpages/event'>Event</NavLink></li>

    </>


    return (
        <div className={`navbar w-11/12 mx-auto  z-10 text-black`}>
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white  rounded-box z-1 mt-3 w-52 p-2 shadow">
             {links}
            </ul>
          </div>
          <div className=" flex font-bold items-center gap-3 md:text-xl"><img className="w-18 hidden md:block" src={logo} alt="" /> <p className='md:mt-4'>Event Explorer</p></div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {links}
          </ul>
        </div>
        <div className="navbar-end flex gap-2">
          
          
         {

           user &&   <div className="group relative flex items-center">
         
           <span className="absolute right-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 text-white text-sm px-3 py-1 rounded-md whitespace-nowrap z-10">
             {user?.displayName || "Please Enter Name"}
           </span>
         
          
          {
         
           user &&  <img
           className="rounded-full w-[50px] h-[50px] cursor-pointer"
           src={user ? user.photoURL : userIcon}
           alt="User"
         />
          }
         </div>
         }
          {
  
  user? <Link onClick={handleLogout } to='/loginpages/login' className={`btn bg-[#8E24AA] hover:bg-[#731b8c] text-white py-2 rounded shadow-lg hover:shadow-purple-500/50 transition duration-300`}>
  
  Logout 
  </Link> :  <Link to='/loginpages/login' className={`btn bg-[#8E24AA] hover:bg-[#731b8c] text-white py-2 rounded shadow-lg hover:shadow-purple-500/50 transition duration-300`}>
  
  Login
  </Link>
  }
          </div>
      </div> 
    );
};

export default Nav;