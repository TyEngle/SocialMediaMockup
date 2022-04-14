import logo from './logo.svg';
import './App.css';
import Profile from "./Components/Profile";
import Notifs from "./Components/Notifs";
import Message from "./Components/Message";
import Home from "./Components/Home";
import Login from "./Components/Login";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaHome, FaBell, FaEnvelope, FaUser, FaCog, FaBookmark, FaEllipsisH } from 'react-icons/fa'

function App() {
  return (
    <Router> 
    <div>
      <h1>Website!!</h1>


    </div>
    <Link to="/Home">Home</Link> <FaHome /> <br />
    <Link to="/Notifs">Notification</Link> <FaBell /> <br />
    <Link to="/Message">Messages</Link>  <FaEnvelope />  <br />
    <Link to="/Profile">Profile</Link> <FaUser /> <br />
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
