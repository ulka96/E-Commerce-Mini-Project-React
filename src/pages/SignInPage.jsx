import React from 'react'

// Components
import Container from '../Components/Container'
import HeaderFilter from '../Components/HeaderFilter'
import FooterSection2 from '../Components/FooterSection2'
import Buttons from '../Components/Buttons'

// Images
import Google from "../images2/Google.png"

// react
import { Link , useNavigate} from 'react-router-dom'

// Hooks
import { useRef } from 'react';


const SignInPage = () => {

const emailRef = useRef();
const passwordRef = useRef();  
    
const navigate = useNavigate();

const signInHandler = async(event) => {
event.preventDefault();
    
// Get input values
const email = emailRef.current.value.trim();
const password = passwordRef.current.value.trim();

if(!email || !password) {
    alert("Please fill all required fields")
    return;
}

const response = await fetch(`http://localhost:3000/users?email=${email}`)
const data = await response.json();


// Check existing user
if(!data.length) {
    alert("Email or password is incorrect")
    return;
}

const user = data[0];

// Check correct password
if(user.password !== password) {
    alert("Email or password is incorrect")
    return;
}

localStorage.setItem("userId", JSON.stringify(user.id))
navigate("/")
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

<form onSubmit={signInHandler} className='flex flex-col w-[320px]'>

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

<Link className='text-[12px] text-[#474B57] font-medium text-end mb-6'>Forgot Password?
</Link>

<Buttons>Login</Buttons>

<Link to="/sign-up" className='text-[14px] font-normal text-[#5C5F6A] mt-6 text-center'>Don't have an account? Sign up</Link>

</form>


</div>

</Container>
<FooterSection2/>



    </div>
  )
}

export default SignInPage