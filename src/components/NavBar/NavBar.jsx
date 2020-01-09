import React from 'react';
import navIcon from '../../assets/Icons/camera2.png';
import { Link } from "react-router-dom";

const NavBar = (props) => {

  return (
    <div>        
      <nav className="navbar navbar-light pb-0 pt-1 pl-2">
        <Link to={"/"} className="navbar-brand navTitleFont mr-auto">
          <span className="titleOr">Jarred Sutton</span> | Photography
        </Link> 
        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navBarToggleTrig" aria-controls="navBarToggleTrig" aria-expanded="false" aria-label="Toggle navigation" data-display="static">
          <img className="navIcon" src={navIcon} alt="camera" />
        </button>
      </nav>

        {/* Directory Components */}
        <div className="collapse text-right" id="navBarToggleTrig">
          <div className="pb-4 pr-4 pt-0">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li data-toggle="collapse" data-target="#navBarToggleTrig" className="nav-item active">
                <Link to={"/"} className="nav-link txt-shadow">
                  Home
                </Link>
              </li>
              <li data-toggle="collapse" data-target="#navBarToggleTrig" className="nav-item">
                <Link to={"/Blog"} className="nav-link txt-shadow">
                  Blog
                </Link>
              </li>
              <li data-toggle="collapse" data-target="#navBarToggleTrig" className="nav-item">
                <Link to={"/About"} className="nav-link txt-shadow">
                  About
                </Link>
              </li>
              <li data-toggle="collapse" data-target="#navBarToggleTrig" className="nav-item">
                <Link to={"/Contact"} className="nav-link txt-shadow">
                  Contact
                </Link>
              </li>
              <li data-toggle="collapse" data-target="#navBarToggleTrig" className="nav-item drop">
                <Link to={"#"} className="nav-link txt-shadow dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Galleries
                </Link>  
                {/* <a className="nav-link txt-shadow dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Galleries
                </a> */}
                <div className="dropdown-menu dropdown-menu-right dropdown-menu-xl-left" aria-labelledby="navbarDropdown">
                  <Link to={"/Birds"} className="dropdown-item txt-shadow">
                    Birds
                  </Link>                  
                  <Link to={"/Cetaceans"} className="dropdown-item txt-shadow">
                    Cetaceans
                  </Link>
                  <Link to={"/Flowers"} className="dropdown-item txt-shadow">
                    Flowers
                  </Link>
                  <Link to={"/Insects"} className="dropdown-item txt-shadow">
                    Insects
                  </Link>
                  <Link to={"/Landscapes"} className="dropdown-item txt-shadow">
                    Landscapes
                  </Link>
                  <Link to={"/Night-Sky"} className="dropdown-item txt-shadow">
                    Night Sky
                  </Link>
                  <Link to={"/Panoramas"} className="dropdown-item txt-shadow">
                    Panoramas
                  </Link>
                  <Link to={"/Reptiles"} className="dropdown-item txt-shadow">
                    Reptiles
                  </Link>
                  <Link to={"/SeaLife"} className="dropdown-item txt-shadow">
                    SeaLife
                  </Link>
                  <Link to={"/Travel"} className="dropdown-item txt-shadow">
                    Travel
                  </Link>
                  <Link to={"/Ungulates"} className="dropdown-item txt-shadow">
                    Ungulates
                  </Link>
                  <Link to={"/Water-Features"} className="dropdown-item txt-shadow">
                    Water Features
                  </Link>
                  <Link to={"/Winter"} className="dropdown-item txt-shadow">
                    Winter
                  </Link>
                </div>
              </li>              
            </ul>
          </div>
        </div>
      
      
    </div>
  );
}

export default NavBar;