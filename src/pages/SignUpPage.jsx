import React from 'react'

// Components
import Container from '../Components/Container'
import HeaderFilter from '../Components/HeaderFilter'
import FooterSection2 from '../Components/FooterSection2'
import Buttons from '../Components/Buttons'

// Images
import Google from "../images2/Google.png"
import { Link, useNavigate } from 'react-router-dom'

// Hooks
import { useRef } from 'react';

// UUID
import { v4 as uuidv4 } from 'uuid';


const SignUpPage = () => {

const navigate = useNavigate();

const userNameRef = useRef();
const emailRef = useRef();
const passwordRef = useRef();

const signUpHandler = async(event) => {
event.preventDefault();
    
 // Get input values
 const userName = userNameRef.current.value.trim();
 const password = passwordRef.current.value.trim();
 const email = emailRef.current.value.trim();


// Check empty values
if(!userName || !password || !email) {
    alert("Please fill all required fields")
    return;
}

// Check strong password

if(password.length < 8) {
    alert("Weak password")
    return;
}
    

// Create a new user
const newUser = {
    userName,
    password,
    email,
    id: uuidv4(),
}

// Check existing User
const existingUserResponse = await fetch(`http://localhost:3000/users`);
const existingUserData = await existingUserResponse.json();

const isUserNameTaken = existingUserData.some(user => user.userName === userName);
const isEmailTaken = existingUserData.some(user => user.email === email);

if (isUserNameTaken || isEmailTaken) {
    alert("Username or Email already exists");
    return;
}



await fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser)
})

   localStorage.setItem("userId", JSON.stringify(newUser.id))
   navigate("/");

}

  return (
<div>
<HeaderFilter/>
<Container>
    
<div className='flex flex-col items-center justify-center mt-[128px] mb-[148px]'>

<button className='py-[9px] px-[71px] border border-[#B6B7BC] rounded-[4px] flex items-center justify-center flex-row gap-2'>
    <img src={Google} alt="google" className='w-4 h-4' />
    <p className='text-[14px] font-medium text-[#5C5F6A]'>Continue with Google</p>
</button>


<div className='flex flex-row'>
<div className='border-[#E6E7E8] border mt-[40px] w-[136px] h-0 '></div>
<h1 className='text-[12px] text-[#5C5F6A] font-medium my-8 mx-4'>OR</h1>
<div className='border-[#E6E7E8] border mt-[40px] w-[136px] h-0 '></div>
</div>

{/* Form */}

<form onSubmit={signUpHandler} className='flex flex-col w-[320px]'>

<label htmlFor="username" className='text-[14px] font-medium text-[#474B57] text-start'>Username</label>
<input 
ref={userNameRef}
type="text" 
id='username' 
className='py-[10px] px-[15px] mb-[15px] w-full border border-[#E6E7E8] rounded-[6px]' />

<label htmlFor="email" className='text-[14px] font-medium text-[#474B57] text-start'>Email</label>
<input 
ref={emailRef}
type="email" 
id='email' 
className='py-[10px] px-[15px] mb-[15px] w-full border border-[#E6E7E8] rounded-[6px]' />


<label htmlFor="password" className='text-[14px] font-medium text-[#474B57] text-start'>Password</label>
<input 
ref={passwordRef}
type="password" 
id='password' 
className='py-[10px] px-[15px] mb-[15px] w-full border border-[#E6E7E8] rounded-[6px]' />


<Link className='text-[12px] text-[#474B57] font-medium text-start mb-6'>By creating an account you agree with our Terms of Service, Privacy Policy,
</Link>

<Buttons>Create Account</Buttons>


<Link to="/sign-in" className='text-[14px] font-normal text-[#5C5F6A] mt-6 text-center'>Already have an account? Log in</Link>

</form>


</div>

</Container>
<FooterSection2/>

</div>
  )


}
export default SignUpPage