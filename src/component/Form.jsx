import React, { useState } from "react";

function Form() {
    const [page, setPage] = useState(0);
    const formTitles = ["signup", "personalinfo", "other"];


    
  return (
    <div className="form">
      <div className="progress-bar">
        <div className="form-container">
          <div className="header">
            <h1>{formTitles[page]}</h1>

          </div>
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
