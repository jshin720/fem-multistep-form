import React, {useState} from 'react';

function addOn(props) {
  const { formData, setFormData, page, setPage } = props;
 
  
  
  return (
    <div>
      <h1>Pick addon</h1>
      <h5>add-ons help enhance your gaming experience</h5>
      <div>
        <input type="checkbox" name="" id="" />
        <span>
          <h5>online services</h5>
          <p>access to multiplayer games</p>
        </span>
      </div>
      <div>
        <p>$1/mo</p>
      </div>
      <div>
        <input type="checkbox" name="" id="" />
        <span>
          <h5>larger storage</h5>
          <p>extra 1tb of cloud storage</p>
        </span>
      </div>
      <div>
        <p>$1/mo</p>
      </div>
      <div>
        <input type="checkbox" name="" id="" />
        <span>
          <h5>customizable profile</h5>
          <p>custom themes on your profile</p>
        </span>
      </div>
      <div>
        <p>$1/mo</p>
      </div>
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

export default addOn;
