import React from 'react';
import navIcon from '../../assets/Icons/camera2.png';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';


class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state= { 
      
    }
  }

	// loading = () => {
	// 	if
	// }

  render(props) {

    return (

    <div>        
      <nav className="navbar navbar-light pb-0 pt-0 pb-1 pl-2">
        <Link to={"/"} className="navbar-brand navTitleFont mr-auto" onClick={this.props.titleCapture}>
          <span className="titleOr">Jarred Sutton</span> | <span className="titleArea"> {this.props.blog.navTitle} </span>
        </Link> 
        
        <button className="navbar-toggler mt-1" type="button" data-toggle="collapse" data-target="#navBarToggleTrig" aria-controls="navBarToggleTrig" aria-expanded="false" aria-label="Toggle navigation" data-display="static">
          <img className="navIcon" src={navIcon} alt="camera" />
        </button>
      </nav>

        {/* Directory Components */}
        <div className="collapse text-right" id="navBarToggleTrig">
          <div className="pb-4 pr-4 pt-0">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li data-toggle="collapse" data-target="#navBarToggleTrig" className="nav-item active">
                <Link to={"/"} onClick={this.props.linkCapture} className="nav-link txt-shadow">
                  Home
                </Link>
              </li>
              <li data-toggle="collapse" data-target="#navBarToggleTrig" className="nav-item">
                <Link to={"/Blog"} onClick={this.props.linkCapture} className="nav-link txt-shadow">
                  Blog
                </Link>
              </li>
              <li data-toggle="collapse" data-target="#navBarToggleTrig" className="nav-item">
                <Link to={"/About"} onClick={this.props.linkCapture} className="nav-link txt-shadow">
                  About
                </Link>
              </li>
              <li data-toggle="collapse" data-target="#navBarToggleTrig" className="nav-item">
                <Link to={"/Contact"} onClick={this.props.linkCapture} className="nav-link txt-shadow">
                  Contact
                </Link>
              </li>
              <li data-toggle="collapse" data-target="#navBarToggleTrig" className="nav-item drop">
                <Link to={"#"} className="nav-link txt-shadow dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Galleries
                </Link>
                <div className="dropdown-menu dropdown-menu-right dropdown-menu-xl-left" aria-labelledby="navbarDropdown">
                  <Link to={"/Birds"} onClick={this.props.linkCapture} className="dropdown-item txt-shadow">
                    Birds
                  </Link>                  
                  <Link to={"/PlantLife"} onClick={this.props.linkCapture} className="dropdown-item txt-shadow">
                    Plant Life
                  </Link>
                  <Link to={"/Insects"} onClick={this.props.linkCapture} className="dropdown-item txt-shadow">
                    Insects
                  </Link>
                  <Link to={"/Landscapes"} onClick={this.props.linkCapture} className="dropdown-item txt-shadow">
                    Landscapes
                  </Link>
                  <Link to={"/Panoramas"} onClick={this.props.linkCapture} className="dropdown-item txt-shadow">
                    Panoramas
                  </Link>
                  <Link to={"/Reptiles"} onClick={this.props.linkCapture} className="dropdown-item txt-shadow">
                    Reptiles
                  </Link>
                  <Link to={"/SeaLife"} onClick={this.props.linkCapture} className="dropdown-item txt-shadow">
                    SeaLife
                  </Link>
                  <Link to={"/Travel"} onClick={this.props.linkCapture} className="dropdown-item txt-shadow">
                    Travel
                  </Link>
                  <Link to={"/Mammals"} onClick={this.props.linkCapture} className="dropdown-item txt-shadow">
                    Mammals
                  </Link>
                  <Link to={"/Water-Features"} onClick={this.props.linkCapture} className="dropdown-item txt-shadow">
                    Water Features
                  </Link>
                </div>
              </li>              
            </ul>
          </div>
        </div>
      
      
    </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    blog: state.blog
  }
}
export default connect(mapStateToProps)(NavBar)