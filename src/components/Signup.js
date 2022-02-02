import React, {useState} from 'react';
import Textbox from './Textbox';
import { useAuth } from "../context/AuthContext"
import { Link, useNavigate } from "react-router-dom"

export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const { signup } = useAuth();
    const navigate = useNavigate();

    async function handleSubmit (e){
        e.preventDefault();
        
        if(password !== confirmPassword){
            return setError("Password does not Match");
        }
        
        try {
            setError("")
            setLoading(true)
            await signup(email, password);
            navigate('/')
        } catch{
            setError("Failed to create an account")
        }

        setLoading(false)
    }

  return (
      <>
        <div className="h-full flex-col flex">
            <div className="px-8 py-10 w-1/3 m-auto shadow-lg rounded-lg border border-slate-100">
                <h3 className="text-center w-full text-2xl mb-6">Sign Up</h3>
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

                    <Textbox
                    name="Password Confirmation"
                    type="password"
                    placeholder="Re-type your password"
                    value={confirmPassword}
                    onChange={(e) => {setConfirmPassword(e.target.value)}}
                    autoComplete="off"
                    required/>
                    <button disabled={loading} type="submit" className="mt-5 py-3 px-2 text-white border-blue-500 bg-blue-500 rounded-sm hover:bg-blue-700 hover:border-blue-700 animation w-full uppercase">Sign Up</button>
                </form>
                <h4 className="text-center pt-3">Already Have an Account? <Link to="/login"><strong>Log In</strong></Link></h4>
            </div>
        </div>
      </>
  );
}
