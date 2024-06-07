import React from 'react';

function plan() {
  return (
    <div>
      <h1>plan</h1>
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

export default plan;
