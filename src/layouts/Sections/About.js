import React from 'react';
import Header from '../../components/Header';
import './About.css'

class About extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Header />
				<div className="AboutContent">
				<h1>About Me</h1>
				Hi My Name is Mayank Gandhi
				</div>
				
			</div>
		);
	}
}

export default About;
