import { useState } from 'react'
import Signup from "./component/signup/Signup"
import './App.css'

function App() {
  const [page, setPage] = useState(0)

  return (
    <>
      <Signup/>
    </>
  )
}

export default App
