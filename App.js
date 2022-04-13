import './App.css';
import Home from './Home';
import Notifs from './Notifs';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

function App() {
  return (
    <Router>
    <div>
      <h1>Broooooo</h1>
      <hr />
    </div>
      <Link to='/'>Home</Link>
      <Link to='/Notifs'>Notifs</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Notifs" element={<Notifs />} />
      </Routes>
    </Router>
  );
}

export default App;
