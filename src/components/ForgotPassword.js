import React, {useState} from 'react';
import Textbox from './Textbox';
import { useAuth } from "../context/AuthContext"
import { Link } from "react-router-dom"

export default function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState(""); 
    const [message, setMessage] = useState(""); 
    const [loading, setLoading] = useState(false);
    const { forgotPassword } = useAuth();

    async function handleSubmit (e){
        e.preventDefault();
        
        try {
            setMessage("")
            setError("")
            setLoading(true)
           await forgotPassword(email);
           setMessage("Check your inbox for change password Link.")
        } catch{
            setError("Wrong email. Please provid a valid email")
        }

        setLoading(false)
    }

  return (
      <>
        <div className="h-full flex-col flex">
            <div className="px-8 py-10 w-1/3 m-auto shadow-lg rounded-lg border border-slate-100">
                <h3 className="text-center w-full text-2xl mb-6">Log In</h3>
                {error && <p className="bg-red-200 text-red-500 p-2 rounded-sm text-center mb-3">{error}</p>}
                {message && <p className="bg-red-200 text-red-500 p-2 rounded-sm text-center mb-3">{message}</p>}

                <form onSubmit={handleSubmit}>
                    <Textbox
                    name="Email"
                    type="email"
                    placeholder="Enter your Email"
                    autoComplete="off"
                    value={email}
                    onChange={(e) => {setEmail(e.target.value)}}
                    required/>

                    <button disabled={loading} type="submit" className="mt-5 py-3 px-2 text-white border-blue-500 bg-blue-500 rounded-sm hover:bg-blue-700 hover:border-blue-700 animation w-full uppercase">Forgot Password</button>
                    <span className="mt-3 underline text-blue-500 text-center block"><Link to="/Login">Login</Link></span>
                </form>
                <h4 className="text-center pt-3">Need to create a new Account? <Link to="/signup"><strong>Sign Up</strong></Link></h4>
            </div>
        </div>
      </>
  );
}
