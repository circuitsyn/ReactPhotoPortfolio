import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import Loading from '../Loader/Loader';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state= { 
      
    }
  }

	loading = () => {
	// conditional to test and see if data is available to fill posts
    if (this.props.blog.posts.length === 0) {
      return(<Loading />)
    }
    else {
			return(
			<div className="font-small mt-3">
				<Container>
        	<hr />
      	</Container>
      
				<Container fluid className="text-center text-md-left">
					<Row>
						<Col md="6">
						<Link to={"/"} className="navbar-brand navTitleFont pb-0" onClick={this.props.brandFooterCapture}>
							<span className="titleOr">Jarred Sutton</span><span className="titleBl"> | {this.props.blog.navTitle}</span>
						</Link>   

						<p className="small text-muted">
							&copy; {new Date().getFullYear()} All Rights Reserved
						</p>

						</Col>
						<Col className="text-right" md="6">
							<h3 className="title titleFont">Navigation</h3>
							<ul>
								<li className="list-unstyled">
									<Link to={"/"} className={` ${window.location.pathname === '/' ? 'active footerLink pr-0 nav-link txt-shadow' : 'inactive footerLink pr-0 nav-link txt-shadow'} `}>
										Home
									</Link>   
								</li>
								<li className="list-unstyled">
									<Link to={"/Blog"} className={` ${window.location.pathname === '/Blog' ? 'active footerLink pr-0 nav-link txt-shadow' : 'inactive footerLink pr-0 nav-link txt-shadow'} `}>
										Blog
									</Link> 
								</li>
								<li className="list-unstyled">
									<Link to={"/About"} className={` ${window.location.pathname === '/About' ? 'active footerLink pr-0 nav-link txt-shadow' : 'inactive footerLink pr-0 nav-link txt-shadow'} `}>
										About
									</Link> 
								</li>
								<li className="list-unstyled">
									<Link to={"/Copyright"} className={` ${window.location.pathname === '/Copyright' ? 'active footerLink pr-0 nav-link txt-shadow' : 'inactive footerLink pr-0 nav-link txt-shadow'} `}>
										Copyright
									</Link>
								</li>
								<li className="list-unstyled">
									<Link to={"/Contact"} className={` ${window.location.pathname === '/Contact' ? 'active footerLink pr-0 nav-link txt-shadow' : 'inactive footerLink pr-0 nav-link txt-shadow'} `}>
										Contact
									</Link>
								</li>
							</ul>
						</Col>
					</Row>
				</Container>
			</div>
			)
		}
	}

  render(props) {
		return (

    <div>
      {this.loading()}
		</div>
  	);
	}
}

function mapStateToProps(state, ownProps) {
  return {
    blog: state.blog
  }
}
export default connect(mapStateToProps)(Footer)