import React from 'react';
import navIcon from '../../assets/Icons/camera.png';

const NavBar = (props) => {

  return (
    <div>
      <div className="pos-f-t">
        <div className="collapse" id="navBarToggleTrig">
          <div className="bg-light p-4">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
              <li class="nav-item active">
                <a class="nav-link" href="#">Blog</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contact</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Copyright</a>
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