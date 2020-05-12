import React from 'react';
import Header from '../components/Header';
import '../styles/Resume.css';

class Resume extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div>
				<Header />
				<div className="ResumeContent">
					This is the Resume Page
				</div>
			</div>
		);
	}
}

export default Resume;
