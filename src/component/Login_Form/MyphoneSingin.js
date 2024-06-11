// import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Button } from 'react-bootstrap';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { auth } from './Setup';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import VerifyNo from './VerifyNo';

function MyphoneSing() {
const navigate = useNavigate()
const [phone,setPhone]=useState('')
const [user,setUser] =useState(null)
const [otp,setOtp] =useState("")

const sendOtp= async()=>{
  
  try{
    const recaptcha=new RecaptchaVerifier(auth,'recaptcha',{})
    const confirmation = await signInWithPhoneNumber(auth,phone,recaptcha)
    setUser(confirmation)
    console.log(confirmation)
    navigate('/verifyno')
  }catch(err){
    console.error(err)
  }
}

const VerifyOtp = async()=>{
  try{
   const data = await user.confirm(otp)
   console.log(data)
  }catch(err)
  {
    console.error(err)

  }
}

const handler=(e)=>{
  setOtp(e.target.value)
}

  return (
    <>
        <div className="container  mb-4">
        <div className="row mt-5 mb-4 border border-dark rounded">
          <div className="col-5  loginclass img-fluid img-thumbnail"
            style={{
              backgroundColor: "#07492bf5",
              height:"50%"
            }}
          >
            <div className="row m-5  text-start text-light">
              <h1>LogIn</h1>
            </div>
            <div className="row m-5 mb-0 text-start text-light">
              <h3>Get access to your Orders, Wishlist and Recommendations</h3>
            </div>
            <img src={require("../../image/authentication.png")} style={{height:"30%", width:"100%"}} className="" />
          </div>
          <div className="col-7 bg-secondary-subtle pt-4">
            <div className="form-data mt-5">
              <form>
                <div className="mb-3">
                <label
                    htmlFor="exampleInputEmail1"
                    className="form-label text-black"
                  >
                    <h5>Mobile number</h5>
                  </label>
                <PhoneInput 
        country={"india"}
        value={phone}
        onChange={(phone)=>setPhone('+' +phone)}
        />
        <Button     className="btn " style={{ backgroundColor: "  #07492bf5" }} variant='contained' onClick={sendOtp}>        <h5 className="text-light">Request OTP</h5></Button>
        <div style={{marginTop:"20px"}} id='recaptcha'></div>
        <br/>

{/* 
        <textarea onChange={handler} variant='outlined' placeholder='enter otp'/>
        <br/>
        <Button onClick={VerifyOtp} style={{backgroundColor:"green",color:"white"}} variant='contained'>Verify otp</Button>
         */}
     
                </div>

                <div className="row">
                 
                  <div className="col  d-flex text-center text-primary align-items-end" style={{height:"400px"}}><Link to="/signup" className="nav-link">New to Bharat Millets? Create New Account</Link></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
  
      

    </>
    
  )
}

export default MyphoneSing;