import React, { use } from 'react';
import { Link } from 'react-router';
import { TitleUse } from './Title';
import { AuthContext } from '../Contexts/AuthContext';
import { toast } from 'react-toastify';

const MyProfile = () => {
    const {user,updateUser,setUser,} =use(AuthContext)

console.log(user.email);

    const handlUpdate = (e) => {
        e.preventDefault();
      
        const name = e.target.name.value;
        const photo = e.target.photo.value;
      
       
        const updateData = {};
        if (name) updateData.displayName = name;
        if (photo) updateData.photoURL = photo;
      
        
        if (Object.keys(updateData).length === 0) {
          toast.info("No changes to update.");
          return;
        }
      
       
        updateUser(updateData)
          .then(() => {
            toast.success("Profile updated successfully! 🎉");
      
          
            setUser((prev) => ({
              ...prev,
              ...(name && { displayName: name }),
            ...(photo && { photoURL: photo }),
            }));
      
            e.target.reset();
          
          })
          .catch((err) => {
            toast.error("Update failed: " + err.message);
            console.error(err.message);
          });
      };
      
      

    
    TitleUse('My Profiles')
    return (
        <div className='flex flex-col items-center justify-center py-10 w-11/12 mx-auto '>
            <div className=" w-11/12 mx-auto md:max-w-sm bg-white shadow-lg rounded-2xl p-6 text-center">
        <img
          className="w-24 h-24 rounded-full mx-auto mb-4"
          src={user.photoURL}
          alt="Profile"
        />
        <h2 className="text-xl font-semibold"> {user.displayName}</h2>
        <p className="text-gray-600">Email: {user.email}</p>
        
      
        <p className="text-gray-500 text-xs mt-2 break-words max-w-full overflow-hidden">
          Photo URL: {user.photoURL}
        </p>
      
       
      </div>


      <div className="flex w-[200px] md:w-[500px] items-center justify-center my-4">
  <div className="flex-grow h-px bg-gray-300"></div>
  <span className="mx-2 text-sm">Update Profile</span>
  <div className="flex-grow  h-px bg-gray-300"></div>
</div>

<div className="md:max-w-sm   mx-auto border rounded p-6 shadow ">
      <h2 className="text-xl font-semibold mb-6">Update Profile</h2>
      <form onSubmit={handlUpdate} className="space-y-4">
        <div>
          <label className="block text-sm mb-1">Name </label>
          <input

          name='name'
            type="text"
            className="w-full border-b placeholder:text-xs border-gray-300 focus:outline-none py-1"
            placeholder="Update your name"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">PhotoURL</label>
          <input

          name='photo'
            type="text"
            className="w-full border-b placeholder:text-xs border-gray-300 focus:outline-none py-1"
            placeholder="updates your photoURL"
          />
        </div>

       
      

        <button
          type="submit"
          className="w-full bg-[#8E24AA] hover:bg-[#731b8c] text-white py-2 rounded shadow-lg hover:shadow-purple-500/50 transition duration-300 "
        >
         Update
        </button>

      
      </form>
    </div>


        </div>
      
    );
};

export default MyProfile;