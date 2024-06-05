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
        <input type="text" name="username" />
        <label>Password:</label>
        <input type="password" name="password" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default personalInfo;