import React, {useState} from 'react';

function summary(props) {
  
  const { confirmed, setConfirmed, formData} = props

  return (
    <div>
      <h1>Finishing up</h1>
      <p>Double-check everything looks ok before confirming</p>
      <span>
        <li>
          <ul>

          </ul>
          <ul>

          </ul>
          <ul>

          </ul>
          <ul>
            Total
          </ul>
        </li>
      </span>

      <button onClick={setConfirmed(true)}></button>
    </div>
  );
}

export default summary;
