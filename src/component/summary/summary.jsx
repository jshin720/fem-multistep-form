import React, {useState} from 'react';

function summary(props) {
  
  const { confirmed, setConfirmed, formData} = props;
  const [summary, setSummary] = useState({
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    address: formData.address,
    city: formData.city,
    state: formData.state,
    zip: formData.zip,
    country: formData.country,
    confirmed: confirmed,
  })

  return (
    <div>
      <h1>Finishing up</h1>
      <p>Double-check everything looks ok before confirming</p>
      <span>
        <li>
          <ul>
        <li>First Name: {formData.firstName}</li>
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
