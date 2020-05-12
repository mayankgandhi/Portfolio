import React from 'react';
import Header from '../components/Header';
import '../styles/About.css';

class About extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Header />
				<div className="AboutContent">
					<h1>Hi!</h1>
					<h3>I'm Mayank.</h3>
					Software Developer. Food Enthusiast.
				</div>
			</div>
		);
	}
}

export default About;
