import React from 'react';
import Header from '../components/Header';
import '../styles/Education.css';
import Footer from '../components/Footer';
import TechLogo from '../components/TechLogo';

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
							<div className="EduBox">
								<h2>University of Arizona, Tucson,AZ</h2>
								<h3>B.S. Computer Science with
								minor in Business Administration</h3>
								<h7><i>International Wildcat Excellence Award</i></h7>
								<h6>Graduation Fall 2019</h6>
								<h4>Relevant Coursework</h4>
								<h5>Analysis of Discrete Structures, Database Design, Compilers and System Software,
								Automata, Grammars and Languages, Green Computing, Object Oriented Programming, Systems
								Programming and UNIX</h5>
							</div>
						</div>
					</div>
					<div>
						<h2>Skills</h2>
						<div className="Skills">
							<div>
								<h3>Languages</h3>
								<div className="Languages">
									<TechLogo title="Swift" imgURL="https://img.icons8.com/color/48/000000/swift.png" />
									<TechLogo title="HTML" imgURL="https://img.icons8.com/color/48/000000/html-5.png" />
									<TechLogo title="CSS" imgURL="https://img.icons8.com/color/48/000000/css3.png" />
									<TechLogo
										title="Javascript"
										imgURL="https://img.icons8.com/color/48/000000/javascript.png"
									/>
									<TechLogo
										title="GraphQL"
										imgURL="https://img.icons8.com/color/48/000000/graphql.png"
									/>
								</div>
							</div>
							<div>
								<h3>Frameworks &amp; Platforms</h3>
								<div className="Frameworks">
									<TechLogo
										title="SwiftUI"
										imgURL="https://img.icons8.com/color/48/000000/swiftui.png"
									/>
									<TechLogo
										title="React.js"
										imgURL="https://img.icons8.com/color/48/000000/react-native.png"
									/>
									<TechLogo
										title="Node.js"
										imgURL="https://img.icons8.com/color/48/000000/nodejs.png"
									/>
									<TechLogo
										title="Firebase"
										imgURL="https://img.icons8.com/color/48/000000/firebase.png"
									/>
									<TechLogo
										title="Heroku"
										imgURL="https://img.icons8.com/color/48/000000/heroku.png"
									/>
									<TechLogo
										title="Parse"
										imgURL="https://avatars3.githubusercontent.com/u/26932219?v=4"
									/>
								</div>
							</div>

							<div className="Tools">
								<h3>Tools</h3>
								<TechLogo title="Git" imgURL="https://img.icons8.com/color/48/000000/git.png" />
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
