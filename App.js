import logo from './logo.svg';
import './App.css';
import Profile from "./Components/Profile";
import Notifs from "./Components/Notifs";
import Message from "./Components/Message";
import Home from "./Components/Home";
import Login from "./Components/Login";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router> 
    <div>
      <h1>Website!!</h1>


    </div>
    <Link to="/Notifs">Notifs</Link> <br />
    <Link to="/Message">Message</Link> <br />
    <Link to="/Profile">Profile</Link> <br />
    <Link to="/Home">Home</Link> <br />
    <Link to="/Login">Login</Link> <br />
    <Routes> 
      <Route path="/Profile" element={<Profile />} />
      <Route path="/Notifs" element={<Notifs />} />
      <Route path="/Message" element={<Message />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Login" element={<Login />} />
    </Routes>
    </Router>
  );
}

export default App;
