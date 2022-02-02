import React, {useState } from 'react';
import { useAuth } from "../context/AuthContext";
import { Link } from 'react-router-dom'

export default function Dashboard() {
    const [error, setError] = useState("");
    const {currentUser, logout} = useAuth();

    async function handleLogout () {
        setError('')
        try{

            await logout();
        }catch{ 
            setError("Faild to logout");
        }
    }
  return(
    <div>
      <div className="flex justify-between bg-blue-500 text-white py-2 px-8">
            <h4>Hello World</h4>
            <p onClick={handleLogout}>Log Out</p>
      </div>
      <div className="w-full sm:w-1/2 sm:px-0 px-4 m-auto mt-4">
          {error && <p className="bg-red-200 text-red-500 p-2 rounded-sm text-center mb-3">{error}</p>}
          <h3 className=" text-2xl mb-3">Profile</h3>
          <hr/>
          <div className="flex justify-between my-3">
            <p className=""><span>Email : </span> {currentUser.email}</p>
            <button className="py-1 px-2 text-white border-blue-500 bg-blue-500 rounded-md hover:bg-blue-700 hover:border-blue-700 animation"><Link to="/updateProfile">Update Profile</Link></button>
          </div>
      </div>
    </div>
  );
}
