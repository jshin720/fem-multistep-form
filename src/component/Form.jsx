import React, { useState } from "react";
import SignPage from "./Signage.jsx";
import Login from "./login/Login.jsx";
import Plan from "./plan/plan.jsx"


function Form() {
  const [page, setPage] = useState(0);
  const formTitles = ["sign up", "personal info", "other"];

  const pageDisplay = () => {
    if (page === 0) {
      return <SignPage />;
    } else if (page === 1) {
        return <Login />;
    } else if (page === 2) {
        return <Plan />;
    } 
  }
  

  return (
    <div className="form">
      <div className="progress-bar">
        <div className="form-container">
          <div className="header">
            <h1>{formTitles[page]}</h1>
          </div>
          <div className="body">{pageDisplay}</div>
          <div className="footer">
            <button
              disabled={page == formTitles.length - 1}
              onClick={() => {
                setPage((currPage) => currPage + 1);
              }}
            >
              next
            </button>
            <button
              disabled={page == 0}
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
            >
              prev
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
