import React, {useState} from 'react';

function summary(props) {
  const [confirmed, setConfirmed] = useState(false) 

  const handleConfirmed = () => {
    
  }

  return (
    <div>
      <h1>Finshing up</h1>
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
