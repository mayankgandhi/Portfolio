import React from 'react';
import Header from '../../components/Header';
import ResumePage from '../../components/ResumePage'
import './Resume.css';

class Resume extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Header />
				<div className="ResumeContent">
					<h1>Resume Section</h1>
					<ResumePage />
				</div>
			</div>
		);
	}
}

export default Resume;
