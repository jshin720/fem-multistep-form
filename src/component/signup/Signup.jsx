import React, { useState } from "react";


export default function Signup() {
    const [profileInfo, setProfileInfo] = useState({
      name: "",
      email: "",
      phoneNumber: ""
    })

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(e)
    }


  return (
    <>
      <div className="step-info"></div>
      <div className="personal-info-form">
        <h1>Personal Info</h1>
        <h4>Please provide your name, email address, and phone number.</h4>
        <form onSubmit={handleSubmit}>
          <label for="name"></label>
          <input type="text" name="name" id="name" />
          <label for="email"></label>
          <input type="email" name="email" id="email" />
          <label for="phone-number"></label>
          <input type="tel" name="phone-number" id="phone-number" />
          <input type="submit" value="" />
        </form>
      </div>
    </>
  );
}
