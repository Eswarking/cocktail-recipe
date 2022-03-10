import { Link } from "react-router-dom";
import "./Navbar.css";


function Navbar() {
  return (
    <section className="navbar">
      <div className="nav-center">
        <h1>Cocktail Playbook</h1>
        <ul className="navbar-links">
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about">
              About
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Navbar;
