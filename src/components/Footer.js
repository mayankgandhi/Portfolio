import React from 'react';
import Link from 'gatsby-link';
import './Footer.css';

class Footer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="Footer">
				<div className="FooterGroup">
					<Link to="/cheatsheets">Email</Link>
					<Link to="/resources">Linkedin</Link>
					<Link to="/resume">Github</Link>
					<Link to="/resume">Twitter</Link>
					<Link to="/connect">
						<button>Resume</button>
					</Link>
				</div>
			</div>
		);
	}
}

export default Footer;
