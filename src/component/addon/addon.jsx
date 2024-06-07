import React from 'react';

function addOn() {
  return (
    <div>
      <h1>addon</h1>
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

export default addOn;
