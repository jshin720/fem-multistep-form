import React from 'react';

function personalInfo() {
  return (
    <div>
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