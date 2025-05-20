import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Submit from "../components/Submit";
import { useRef, useState } from "react";
import axios from "axios";
import { PiSelectionSlashLight } from "react-icons/pi";

export default function Signup() {
  const [loading,setLoading]=useState(false)

  const navigate = useNavigate();
  const usernameRef=useRef<HTMLInputElement>(null)
  const passwordRef=useRef<HTMLInputElement>(null)
  const emailRef=useRef<HTMLInputElement>(null)

 async function clicking(e: React.MouseEvent<HTMLButtonElement> | React.FormEvent){
  setLoading(true)
  e.preventDefault()
    const username=usernameRef.current?.value
    const password=passwordRef.current?.value
    const email=emailRef.current?.value

 try {
    await axios.post("http://localhost:3000/signup",{
      username,email,password
    })
   
     navigate("/login")
    alert("You have successfully signed up")
 
 } catch (error) {
  alert("error while signing in...please try again!")
 }
 setLoading(false)
  }

  function goto() {
    navigate("/login");
  }
  return (
    <div className="h-screen flex justify-center items-center bg-gray-200">
      <div className="rounded-xl bg-white px-15 py-10">
        <h1 className="font-bold text-4xl text-center text-indigo-600 pb-5">
          Taskify Application
        </h1>
        <h1 className="font-bold text-4xl text-center pb-5">Signup</h1>
        <form action="" className="flex flex-col gap-2">
          <label htmlFor="username" className="text-xl pt-3">
            Username
          </label>
          <Input
          reference={usernameRef}
            type="text"
            placeholder="Enter your name"
            name="username"
            id="username"
          />
          <label htmlFor="email" className="text-xl pt-3">
            Email
          </label>
          <Input
          reference={emailRef}
            type="text"
            placeholder="Enter your email"
            name="email"
            id="email"
          />
          <label htmlFor="password" className="text-xl pt-3">
            Password
          </label>
          <Input
          reference={passwordRef}
            type="password"
            placeholder="Enter your password"
            name="password"
            id="password"
          />
          <Submit onClick={clicking} value={loading?"Loading...":"Submit"} />
          {/* <input type="submit" onClick={clicking} value="Submit" className="bg-[#266dfa] text-white font-bold py-4 mt-2 rounded-xl hover:opacity-80 cursor-pointer duration-300 text-xl" /> */}
        </form>
        <div className="text-center mt-5 text-xl">
          <p>
            Already have an account?
            <a href="/Login" onClick={goto} className="text-[#266dfa]">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
