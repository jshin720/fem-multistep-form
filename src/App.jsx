import { useState } from 'react'
import Signup from "./component/signup/Signup.jsx"
import Login from "./component/login/Login.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { ProtectedRoute } from "./component/ProtectedRoute.jsx";
import './App.css'

function App() {
  const [page, setPage] = useState(0)

  return (
    <>
      <Signup/>
      <Login/>
      
    </>
  )
}

export default App
