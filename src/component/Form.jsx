import React, { useState } from "react";

import AddOn from "./addon/addon";
import PersonalInfo from "./personalInfo/personalInfo.jsx";
import Confirmation from "./confirmation/confirmation.jsx";
import Plan from "./plan/plan.jsx";
import Summary from "./summary/summary.jsx";

function Form(props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    name: "",
    plan: "",
    addons: [],
    });
  
  const [confirmed, setConfirmed] = useState(false);

  const formTitles = ["info", "plan", "addon", "summary"];
    

  console.log(props);
  const { page, setPage } = props;
  const { name, email, phone, plan, addons } = formData;


 
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setConfirmed(true);
    };
    const handleBack = () => {
      setPage((page) => page - 1);
      };
      const handleNext = () => {
        setPage((page) => page + 1);
      };
    }


  const pageDisplay = () => {
    if (page === 0) {
      return (
        <PersonalInfo
          formData={formData}
          setFormData={setFormData}
          page={page}
          setPage={setPage}
        />
      );
    } else if (page === 1) {
      return (
        <Plan
          formData={formData}
          setFormData={setFormData}
          page={page}
          setPage={setPage}
        />
      );
    } else if (page === 2) {
      return (
        <AddOn
          formData={formData}
          setFormData={setFormData}
          page={page}
          setPage={setPage}
        />
      );
    } else {
      return (
        <Confirmation
          formData={formData}
          setConfirmed={setConfirmed}
          confirmed={confirmed}
        />
      );
    }
  };

  return (
    <div className="form">
      <div className="progress-bar">
        <div className="form-container">
          <div className="header">
            <h1>{formTitles[page]}</h1>
          </div>
          <div className="body">{pageDisplay()}</div>
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
