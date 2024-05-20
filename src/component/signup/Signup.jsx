import React from 'react'

export default function Signup() {
  return (
    <>
      <div className="step-info"></div>
      <h1>Personal Info</h1>
      <h4>Please provide your name, email address, and phone number.</h4>
      <form action="">
        <label for="name"></label>
        <input type="text" name="name" id="name" />
        <label for="email"></label>
        <input type="email" name="email" id="email" />
        <label for="phone-number"></label>
        <input type="tel" name="phone-number" id="phone-number" />
        <input type="submit" value="" />
      </form>
    </>
  );
}
