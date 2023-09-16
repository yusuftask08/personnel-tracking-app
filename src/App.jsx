import './App.sass'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import EmployeeDetail from "./pages/EmployeeDetail/EmployeeDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/employee-detail/:id" element={<EmployeeDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
