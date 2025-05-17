import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Submit from "../components/Submit";

export default function Signup() {
    const navigate=useNavigate()
    function goto(){
        navigate('/login')
    }
  return <div className="h-screen flex justify-center items-center bg-gray-200">
    <div className="rounded-xl bg-white px-15 py-10">
         <h1 className="font-bold text-4xl text-center text-indigo-600 pb-5">Taskify Application</h1>
<h1 className="font-bold text-4xl text-center pb-5">Signup</h1>
<form action="" className="flex flex-col gap-2">
<label htmlFor="username" className="text-xl pt-3">Username</label>
<Input type="text" placeholder="Enter your name" name="username" id="username"/>
<label htmlFor="email" className="text-xl pt-3">Email</label>
<Input type="text" placeholder="Enter your email" name="email" id="email"/>
<label htmlFor="password" className="text-xl pt-3">Password</label>
<Input type="password" placeholder="Enter your password" name="password" id="password"/>
<Submit value="Submit"/>
</form>
<div className="text-center mt-5 text-xl">
    <p>Already have an account?
        <a href="/Login" onClick={goto} className="text-[#266dfa]">Login</a>
    </p>
</div>
    </div>
  </div>
  
}
