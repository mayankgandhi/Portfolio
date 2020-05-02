import React from 'react';
import Header from '../../components/Header';


class About extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Header />

				<h1>About Me</h1>
				Hi My Name is Mayank Gandhi
			</div>
		);
	}
}

export default About;
