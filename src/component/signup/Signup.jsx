import React from 'react'

export default function Signup() {
  return (
    <>
    <div className="step-info"></div>
    <h1>Personal Info</h1>
    <h4>Please provide your name, email address, and phone number.</h4>
    <form action="">
        <input type="text" name="name" id="name" /> 
        <input type="email" name="email" id="email" />
        <input type="tel" name="phone-number" id="phone-number" />
        <input type="submit" value="" />
    </form>
    </>
  )
}
