import React from 'react';
import Link from 'gatsby-link';
import './Header.css';

class Header extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			hasScrolled: false
		};
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

	handleScroll = (event) => {
		const scrollTop = window.pageYOffset;

		if (scrollTop > 50) {
			this.setState({ hasScrolled: true });
		} else {
			this.setState({ hasScrolled: false });
		}
	};

	render() {
		return (
			<div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
				<div className="HeaderGroup">
					Add yourLogo
					<Link to="/">
						{' '}
						<img src="" />
					</Link>
					<Link to="/cheatsheets">Cheatsheets</Link>
					<Link to="/resources">Resources</Link>
					<Link to="/resume">Resume</Link>
					<Link to="/connect">
						{' '}
						<button>Connect</button>
					</Link>
				</div>
			</div>
		);
	}
}

export default Header;
