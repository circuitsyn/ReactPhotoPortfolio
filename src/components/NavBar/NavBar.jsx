import React from 'react';
import navIcon from '../../assets/Icons/camera2.png';

const NavBar = (props) => {

  return (
    <div>        
      <nav className="navbar navbar-light pb-0 pt-1 pl-2">
        <a href="/" className="navbar-brand navTitleFont mr-auto"><span className="titleOr">Jarred Sutton</span> | Photography</a>
        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navBarToggleTrig" aria-controls="navBarToggleTrig" aria-expanded="false" aria-label="Toggle navigation" data-display="static">
          <img className="navIcon" src={navIcon} alt="camera" />
        </button>
      </nav>

        {/* Directory Components */}
        <div className="collapse text-right" id="navBarToggleTrig">
          <div className="pb-4 pr-4 pt-0">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link txt-shadow" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link txt-shadow" href="/Blog">Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link txt-shadow" href="/About">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link txt-shadow" href="/Contact">Contact</a>
              </li>
              <li className="nav-item drop">
                <a className="nav-link txt-shadow dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Galleries
                </a>
                <div className="dropdown-menu dropdown-menu-right dropdown-menu-xl-left" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item txt-shadow" href="/Birds">Birds</a>
                  <a className="dropdown-item txt-shadow" href="/Cetaceans">Cetaceans</a>
                  <a className="dropdown-item txt-shadow" href="/Flowers">Flowers</a>
                  <a className="dropdown-item txt-shadow" href="/Insects">Insects</a>
                  <a className="dropdown-item txt-shadow" href="/Landscapes">Landscapes</a>
                  <a className="dropdown-item txt-shadow" href="/Night-Sky">Night Sky</a>
                  <a className="dropdown-item txt-shadow" href="/Panoramas">Panoramas</a>
                  <a className="dropdown-item txt-shadow" href="/Reptiles">Reptiles</a>
                  <a className="dropdown-item txt-shadow" href="/SeaLife">SeaLife</a>
                  <a className="dropdown-item txt-shadow" href="/Travel">Travel</a>
                  <a className="dropdown-item txt-shadow" href="/Ungulates">Ungulates</a>
                  <a className="dropdown-item txt-shadow" href="/Water-Features">Water Features</a>
                  <a className="dropdown-item txt-shadow" href="/Winter">Winter</a>
                </div>
              </li>              
            </ul>
          </div>
        </div>
      
      
    </div>
  );
}

export default NavBar;