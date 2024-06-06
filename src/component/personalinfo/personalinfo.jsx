import React, { useState } from 'react';

function personalInfo(props) {
    const [currentData, setCurrentData] = useState({})
    const { formData, setFormData } = props;
    const handleSubmit = (e) => {
      
    }; 
  return (
    <div>
      <h1>personal info</h1>
      <form>
        <label>Username:</label>
        <input type="text" name="name" value={}/>
        <label>Email:</label>
        <input type="email" name="email" value={}/>
        <label>Phone Number</label>
        <input type="phone" name="phone" value={}/>
      </form>
    </div>
  );
}

export default personalInfo;