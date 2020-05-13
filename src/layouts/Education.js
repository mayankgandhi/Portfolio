import React from 'react';
import Header from '../components/Header';
import '../styles/Education.css';


class Education extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Header />
				<div className="EduContent">
					<h1>Education Section</h1>
				</div>
			</div>
		);
	}
}

export default Education;
