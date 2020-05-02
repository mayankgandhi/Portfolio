import React from 'react';
import Header from '../../components/Header'
import Footer from '../../components/Footer'

class Resume extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Header />
				<h1>Resume Section</h1>
				This is the resume section.
			</div>
		);
	}
}

export default Resume;
