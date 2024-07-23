import React from 'react';

function confirmation(props) {
  
  const { formData, setFormData, page, setPage } = props;

  const handleChange = () => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
      });
  }


  return (
    <div>
      <h1>confirmation</h1>
      <form>
        <label>Username:</label>
        <input type="text" name="name" value={handleChange()} />
        <label>Email:</label>
        <input type="email" name="email" value={handleChange()} />
        <label>Phone Number</label>
        <input type="phone" name="phone" value={handleChange()} />
        <label>Password:</label>
      </form>
      
    </div>
  );
}

export default confirmation;
