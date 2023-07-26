import React, { useState ,useEffect} from "react";
import { Link } from "react-router-dom";
import "./assets/Navbar.css";
import "./assets/footer.css";
import 'font-awesome/css/font-awesome.min.css';


function NavBar() {
  
  
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <div className="topnav">
    <a href="/about" className="act">
      FLIP
    </a>
    <a href="/home">Home </a>
    <Link to="/Library">Library</Link>
    <a href="/Wishlist">Wishlist</a>
    
  <a href="/landingpage">

  <div className="sign-out-icon">
    <span className="fa fa-sign-out"></span>
  </div>
  </a>
    
    
  </div>

  
    </>
  );
}

export default NavBar;