import { useState } from "react";
import Form from "./component/Form.jsx";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { AuthContextProvider } from "./context/AuthContext.jsx";
// import { ProtectedRoute } from "./component/ProtectedRoute.jsx";
import "./App.css";

function App() {
  const [page, setPage] = useState(0);  
  const [lightDark, setLightDark] = useState(true);

  const highlightToggle = () => {
    setLightDark(!lightDark);
    };
    
  }
  return (
    <>
      <div className="progress-bar">
        <div
          className="progress"
          style={{
            width:
              page === 0
                ? "25%"
                : page === 1
                ? "50%"
                : page === 2
                ? "75%"
                : "100%",
          }}
        ></div>
      </div>
      <div className="progress-list">
        <span>
          <h6 className="light dark" onChange={highlightToggle()}>1</h6>
          <p>step 1:</p>
          <p>Your Information</p>
        </span>

        <span>
          <h6 className="light dark" onChange={highlightToggle()}>2</h6>
          <p>step 2:</p>
          <p>Select Plan</p>
        </span>

        <span>
          <h6 className="light dark"onChange={highlightToggle()}>3</h6>
          <p>step 3:</p>
          <p>Add-ons</p>
        </span>

        <span>
          <h6 className="light dark" onChange={highlightToggle()}>4</h6>
          <p>step 4:</p>
          <p>Summary</p>
        </span>
      </div>
      <Form page={page} setPage={setPage} />
    </>
  );
}

export default App;
