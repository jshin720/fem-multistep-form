import React, { useState } from "react";

function Form() {
    const [page, setPage] = useState(0);
    
    
  return (
    <div className="form">
      <div className="progress-bar">
        <div className="form-container">
          <div className="header"></div>
          <div className="body"></div>
          <div className="footer">
            <button></button>
            <button></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
