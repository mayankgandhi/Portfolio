import React from 'react';
import Header from '../components/Header';
import '../styles/Contact.css';


class Contact extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Header />
				<div className="ContactContent">
					<h1>Contact Section</h1>
					This is the Contact Section
				</div>
			</div>
		);
	}
}

export default Contact;
