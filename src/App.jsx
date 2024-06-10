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
      <Form
        formData={formData}
        setFormData={setFormData}
        page={page}
        setPage={setPage}
      />
    </>
  );
}

export default App;
