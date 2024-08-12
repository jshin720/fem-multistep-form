import React from "react";

function plan(props) {
  const { formData, setFormData, page, setPage } = props;
  const [show, setShow] = React.useState(false);
  const [show2, setShow2] = React.useState(false);
  
 


  const toggleSwitch = () => {
    return (
      <div class="toggle-switch">
        <input
          type="checkbox"
          class="toggle-switch-checkbox"
          name="toggleSwitch"
          id="toggleSwitch"
        />
        <label class="toggle-switch-label" for="toggleSwitch">
          <span class="toggle-switch-inner"></span>
          <span class="toggle-switch-switch"></span>
          
        </label>
      </div>
    );
  };

  return (
    <div>
      <div>
        <h1>select your plan</h1>
        <h4>you have the option of monthly or yearly billing</h4>
      </div>
      <div>
        <button>arcade</button>
        <button>advanced</button>
        <button>pro</button>
      </div>
      <div>
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
          next steps
        </button>
      </div>
    </div>
  );
}

export default plan;
