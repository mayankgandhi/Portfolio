import React from 'react';
import Header from '../../components/Header'


class Contact extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Header />

				<h1>Contact Section</h1>
				This is the Contact Section
			</div>
		);
	}
}

export default Contact;
