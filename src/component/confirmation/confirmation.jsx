import React from 'react';

function confirmation(props) {
  
  const { formData, setFormData, page, setPage } = props;

  const handleChange = () => {
    
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
      <button
        onClick={() => {
          setPage((currPage) => currPage - 1);
        }}
      >
        go back
      </button>
      <button
        onClick={() => {
          setPage((currPage) => currPage + 1);
        }}
      >
        next step
      </button>
    </div>
  );
}

export default confirmation;
