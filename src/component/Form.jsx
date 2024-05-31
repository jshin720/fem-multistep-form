import React, { useState } from "react";

import AddOn from "./addon/addon";
import PersonalInfo from "./personalInfo/personalInfo.jsx";
import Confirmation from "./confirmation/confirmation.jsx";
import Plan from "./plan/plan.jsx"

function Form(props) {
  const [page, setPage] = useState(0);
  const formTitles = ["personal info", "plan", "addon", "confirmation"];

  console.log(props)
  const {formData, setFormData} = props;

  const pageDisplay = () => {
    if (page === 0) {
      return <PersonalInfo />;
    } else if (page === 1) {
        return <Plan />;
    } else if (page === 2) {
        return <AddOn />;
    } else {
      return <Confirmation/>
    }
  }
  
  

  return (
    <div className="form">
      <div className="progress-bar">
        <div className="form-container">
          <div className="header">
            <h1>{formTitles[page]}</h1>
          </div>
          <div className="body">{ pageDisplay() }</div>
          <div className="footer">
            <button
              disabled={page == 0}
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
            >
              prev
            </button>
            <button
              disabled={page == formTitles.length - 1}
              onClick={() => {
                setPage((currPage) => currPage + 1);
              }}
            >
              next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
