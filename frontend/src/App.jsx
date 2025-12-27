import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Landing from "./Landing"
import Login from "./Login"
import Signup from "./Signup"


function App() {
  return (
    <Router>
      <Toaster position="top-center" toastOptions={{className:"my-toast"}} />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  )
}

export default App
