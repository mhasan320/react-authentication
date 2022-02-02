import React, {useState} from 'react';
import Textbox from './Textbox';
import { useAuth } from "../context/AuthContext"
import { Link, useNavigate } from "react-router-dom"

export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    async function handleSubmit (e){
        e.preventDefault();
        
        try {
            setError("")
            setLoading(true)
            await login(email, password);
            navigate('/')
        } catch{
            setError("Failed to Login into the account")
        }

        setLoading(false)
    }

  return (
      <>
        <div className="h-full flex-col flex">
            <div className="px-8 py-10 w-1/3 m-auto shadow-lg rounded-lg border border-slate-100">
                <h3 className="text-center w-full text-2xl mb-6">Log In</h3>
                {error && <p className="bg-red-200 text-red-500 p-2 rounded-sm text-center mb-3">{error}</p>}

                <form onSubmit={handleSubmit}>
                    <Textbox
                    name="Email"
                    type="email"
                    placeholder="Enter your Email"
                    autoComplete="off"
                    value={email}
                    onChange={(e) => {setEmail(e.target.value)}}
                    required/>

                    <Textbox
                    name="Password"
                    type="password"
                    placeholder="Enter your password"
                    required
                    value={password}
                    onChange={(e) => {setPassword(e.target.value)}}
                    autoComplete="off"
                    />

                    <button disabled={loading} type="submit" className="mt-5 py-3 px-2 text-white border-blue-500 bg-blue-500 rounded-sm hover:bg-blue-700 hover:border-blue-700 animation w-full uppercase">Log In</button>
                    <span className="mt-3 underline text-blue-500 text-center block"><Link to="/ForgotPassword">Forgot Password?</Link></span>
                </form>
                <h4 className="text-center pt-3">Need to create a new Account? <Link to="/signup"><strong>Sign Up</strong></Link></h4>
            </div>
        </div>
      </>
  );
}
