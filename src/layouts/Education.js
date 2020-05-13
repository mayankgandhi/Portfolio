import React from 'react';
import Header from '../components/Header';
import '../styles/Education.css';
import EduBox from '../components/EduBox';

class Education extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Header />
				<div className="EduContent">
				<div className="Title">Education</div>
					<div className="Education">
						<EduBox
							school="University of Arizona"
							degree="B.S. Computer Science"
							period="Aug '17 - Dec '19"
							desciption="Minor in Business Administration"
						/>

						<EduBox
							school="Manipal University"
							degree="B.S. Computer Science"
							period="Aug '15 - May '17"
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default Education;
