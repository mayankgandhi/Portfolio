import React from 'react';
import Header from '../components/Header';
import '../styles/Education.css';
import EduBox from '../components/EduBox';
import Footer from '../components/Footer';

class Education extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Header />
				<div className="EduContent">
					<div>
						<h2>Education</h2>
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
					<div>
						<h2>Skills</h2>
						<div className="Skills">
							<div className="Languages">
								<h3>Languages</h3>
								Java
								Swift
								HTML
								CSS
							</div>
							<div className="Frameworks">
								<h3>Frameworks</h3>
								React.js
								Node
								Wordpress
							</div>
							<div className="Tools">
								<h3>Tools</h3>
								Github
								Postman
							</div>
						</div>

					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

export default Education;
