import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  // console.log("button closed");

  const toggleMenu = () => {
    console.log("Toggle Menu Clicked");
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className={`navbar ${menuOpen ? "active" : ""}`}>
        <div className="logo">
          <Link to="#">
            <img src="../src/assets/SiteLogo.png" alt="Site Logo" />
          </Link>
        </div>
        <div className="menu-group">
          <div className="menu-outer">
            <ul className="menu">
              <li>
                <Link to="#">Home</Link>
              </li>
              <li>
                <Link to="#">Shop</Link>
              </li>
              <li>
                <Link to="#">About</Link>
              </li>
              <li>
                <Link to="#">Contact</Link>
              </li>
            </ul>

            <ul className={`menu-icons ${menuOpen ? "disabled" : ""}`}>
              <li>
                <Link to="#">
                  <img src="../src/assets/search-icon.svg" alt="Search Icon" />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <img src="../src/assets/cart-icon.svg" alt="Cart Icon" />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <img src="../src/assets/user-icon.svg" alt="User Icon" />
                </Link>
              </li>
            </ul>
          </div>
          <div className="hamburger" onClick={toggleMenu}>
            <img
              src={`../src/assets/${
                menuOpen ? "close-icon.png" : "hamburger-icon.png"
              }`}
              alt="Menu"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
