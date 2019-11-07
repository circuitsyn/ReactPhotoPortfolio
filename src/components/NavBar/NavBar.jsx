import React from 'react';
import navIcon from '../../assets/Icons/camera.png';

const NavBar = (props) => {

  return (
    <div>
      <div className="pos-f-t">
        <div className="collapse" id="navBarToggleTrig">
          <div className="bg-light p-4">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="/Blog">Blog</a>
              </li>
              <li className="nav-item">
              <li class="nav-item dropright">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Galleries
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="/Birds">Birds</a>
                  <a class="dropdown-item" href="/Landscapes">Landscapes</a>
                  <a class="dropdown-item" href="/Cetaceans">Cetaceans</a>
                  <a class="dropdown-item" href="/Insects">Insects</a>
                  <a class="dropdown-item" href="/Night-Sky">Night Sky</a>
                  <a class="dropdown-item" href="/Ungulates">Ungulates</a>
                  <a class="dropdown-item" href="Water-Features">Water Features</a>
                  <a class="dropdown-item" href="Winter">Winter</a>
                </div>
              </li>
                <a className="nav-link" href="/Contact">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Copyright">Copyright</a>
              </li>
            </ul>
          </div>
        </div>
        <nav className="navbar navbar-light bg-light pb-0 pt-1">
            <a href="/" className="navbar-brand titleFont"><span className="titleOr">Jarred Sutton</span> | Photography</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navBarToggleTrig" aria-controls="navBarToggleTrig" aria-expanded="false" aria-label="Toggle navigation">
            <img className="navIcon" src={navIcon} alt="camera" />
          </button>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;