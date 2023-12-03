import "./App.css";
import LogIn from "./components/LogIn/LogIn";
import NavBar from "./components/NavBar/NavBar";
import Register from "./components/Register/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import TaskManager from "./pages/TaskManagement/TaskManager";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logIn" element={<LogIn />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/taskmanager" element={<TaskManager />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
