import React from 'react';
import navIcon from '../../assets/Icons/camera.png';

const NavBar = (props) => {

  return (
    <div>        
      <nav className="navbar navbar-light bg-light pb-0 pt-1">
        <a href="/" className="navbar-brand titleFont"><span className="titleOr">Jarred Sutton</span> | Photography</a>
        
        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navBarToggleTrig" aria-controls="navBarToggleTrig" aria-expanded="false" aria-label="Toggle navigation" data-display="static">
          <img className="navIcon" src={navIcon} alt="camera" />
        </button>
      </nav>

        {/* Directory Components */}
        <div className="collapse text-right" id="navBarToggleTrig">
          <div className="bg-light pb-4 pr-4 pt-0">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Blog">Blog</a>
              </li>
              <li className="nav-item drop">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Galleries
                </a>
                <div className="dropdown-menu dropdown-menu-right dropdown-menu-xl-left" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="/Birds">Birds</a>
                  <a className="dropdown-item" href="/Cetaceans">Cetaceans</a>
                  <a className="dropdown-item" href="/Insects">Insects</a>
                  <a className="dropdown-item" href="/Landscapes">Landscapes</a>
                  <a className="dropdown-item" href="/Night-Sky">Night Sky</a>
                  <a className="dropdown-item" href="/Ungulates">Ungulates</a>
                  <a className="dropdown-item" href="Water-Features">Water Features</a>
                  <a className="dropdown-item" href="Winter">Winter</a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Contact">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Copyright">Copyright</a>
              </li>
            </ul>
          </div>
        </div>
      
      
    </div>
  );
}

export default NavBar;