import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-left">
            <img className="footer-logo" src="../src/assets/websitelogo-white.png" alt="logo" />
            <p className="footer-description">
              High level experience in web design and development knowledge,
              producing quality work.
            </p>
           
          </div>
          <div className="footer-right">
            <div className="footer-section">
              <h3>Follow Us</h3>
              <ul className="social-icons">
                <li>
                  <img src="../src/assets/facebook.png" alt="Facebook" />
                </li>
                <li>
                  <img src="../src/assets/telegram.png" alt="Telegram" />
                </li>
                <li>
                  <img src="../src/assets/instagram.png" alt="Instagram" />
                </li>
                <li>
                  <img src="../src/assets/figma.png" alt="Figma" />
                </li>
                </ul>
                <h3>Call Us</h3>
                <p>+1 800 654-36-80</p>
             
            </div>
            <div className="footer-section">
              <h3>Customer Care</h3>
              <ul>
                <li>
                  <Link to="#">About Us</Link>
                </li>
                <li>
                  <Link to="#">Delivery & Returns</Link>
                </li>
                <li>
                  <Link to="#">Terms & Conditions</Link>
                </li>
                <li>
                  <Link to="#">Product Return</Link>
                </li>
                <li>
                  <Link to="#">Wholesale Policy</Link>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Quick Shop</h3>
              <ul>
                <li>
                  <Link to="#">Pagination</Link>
                </li>
                <li>
                  <Link to="#">Accessories</Link>
                </li>
                <li>
                  <Link to="#">Terms & Conditions</Link>
                </li>
                <li>
                  <Link to="#">Contact Us</Link>
                </li>
                <li>
                  <Link to="#">Terms of Use</Link>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Company</h3>
              <ul>
                <li>
                  <Link to="#">Help center</Link>
                </li>
                <li>
                  <Link to="#">Address Store</Link>
                </li>
                <li>
                  <Link to="#">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="#">Recievers</Link>
                </li>
                <li>
                  <Link to="#">Store Locations</Link>
                </li>
              </ul>
            </div>
          </div>
        
        </div>
       
      </footer>
      <div className="footer-copyright">
          <p >© 2024 All Rights Reserved</p>
          </div>
    </div>
  );
};

export default Footer;
