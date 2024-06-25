import { useState } from "react";
import Form from "./component/Form.jsx";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { AuthContextProvider } from "./context/AuthContext.jsx";
// import { ProtectedRoute } from "./component/ProtectedRoute.jsx";
import "./App.css";

function App() {
  const [page, setPage] = useState(0);

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
          <p>step 1:</p>
          <p>Your Information</p>
        </span>

        <span>
          <p>step 2:</p>
          <p>Select Plan</p>
        </span>

        <span>
          <p>step 3:</p>
          <p>Add-ons</p>
        </span>

        <span>
          <p>step 4:</p>
          <p>Summary</p>
        </span>
      </div>
      <Form page={page} setPage={setPage} />
    </>
  );
}

export default App;
