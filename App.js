import Profile from "./Components/Profile";
import Notifs from "./Components/Notifs";
import Message from "./Components/Message";
import Home from "./Components/Home";
import Login from "./Components/Login";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  FaHome,
  FaBell,
  FaEnvelope,
  FaUser,
  FaCog,
  FaBookmark,
  FaEllipsisH,
} from "react-icons/fa";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";

// Run 'npm i react-pro-sidebar' in the terminal in order for this ProSidebar stuff to work.
function App() {
  return (
    <Router>
      <div>
        <ProSidebar>
          <Menu iconShape="square">
            <MenuItem icon={<FaHome />}>
              Home
              <Link to="/Home" />
            </MenuItem>
            <MenuItem icon={<FaEnvelope />}>
              Messages
              <Link to="/Message" />
            </MenuItem>
            <MenuItem icon={<FaBell />}>
              Notifications
              <Link to="/Notifs" />
            </MenuItem>
            <MenuItem icon={<FaUser />}>
              Profile
              <Link to="/Profile" />
            </MenuItem>
            <MenuItem icon={<FaCog />}>
              Settings
            </MenuItem>
            <MenuItem icon={<FaBookmark />}>
              Bookmarks
            </MenuItem>
            <MenuItem icon={<FaEllipsisH />}>
              More
            </MenuItem>
          </Menu>
        </ProSidebar>
        ;
      </div>
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
