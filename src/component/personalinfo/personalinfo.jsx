import React, { useState } from 'react';

function personalInfo(props) {
    
    const { formData, setFormData } = props;
    
    const handleChange = (e) => {
      console.log(e)
    }
    
  return (
    <div>
      <h1>personal info</h1>
      <form>
        <label>Username:</label>
        <input type="text" name="name" value={handleChange()} />
        <label>Email:</label>
        <input type="email" name="email" value={handleChange()} />
        <label>Phone Number</label>
        <input type="phone" name="phone" value={handleChange()} />
      </form>
    </div>
  );
}

export default personalInfo;