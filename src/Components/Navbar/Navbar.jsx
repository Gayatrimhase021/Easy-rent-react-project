import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo-section">
        <img
          src="https://cdn-icons-png.flaticon.com/512/25/25694.png"
          alt="Easy Rent"
          className="logo"
        />

        <h2>Easy Rent</h2>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/properties">Properties</Link>
        <Link to="/about">About</Link>
      </div>

    </nav>
  );
}

export default Navbar;