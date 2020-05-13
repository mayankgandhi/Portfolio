import React from 'react';
import Header from '../components/Header';
import '../styles/About.css';
import Lottie from 'react-lottie';
import programmerAnimation from '../images/8306-programming-animation.json';

class About extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="AboutContainer">
				<Header />
				<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js" />
				<div className="AboutContent">
					<div className="Hero">
						<h1>Hi!</h1>
						<h3>I'm Mayank.</h3>
						Software Developer. Food Enthusiast.
						This is here
					</div>

					<div className="homeAnimation">
						<Lottie
							options={{
								loop: true,
								autoplay: true,
								animationData: programmerAnimation,
								rendererSettings: {
									preserveAspectRatio: 'xMidYMid slice'
								}
							}}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default About;
