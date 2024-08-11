import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";

function App() {
  

  return (
    <div>
     <Router>
     <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<home/>} />
      
     </Routes>
     </Router>
    </div>
  )
}

export default App
