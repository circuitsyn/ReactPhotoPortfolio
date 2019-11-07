import React from 'react';
import navIcon from '../../assets/Icons/camera.png';

const NavBar = (props) => {

  return (
    <div>
      <div className="pos-f-t">
        <div className="collapse" id="navBarToggleTrig">
          <div className="bg-light p-4">
            <h5 className="text-white h4">Blog</h5>
            <span className="text-muted">Toggleable via the navbar brand.</span>
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