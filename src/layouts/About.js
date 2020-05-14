import React from 'react';
import Header from '../components/Header';
import '../styles/About.css';
import Lottie from 'react-lottie';
import programmerAnimation from '../images/8306-programming-animation.json';
import Footer from '../components/Footer';
import githubimage from '../images/GitHub-Mark-120px-plus.png';
import linkedinimage from '../images/LI-In-Bug.png';
import twitterlogo from '../images/Twitter_Logo_Blue.png';

class About extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="AboutContainer">
				<script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js" />
				<div className="AboutContent">
					<div className="Hero">
						<h1>Hello World!</h1>
						My name is Mayank, I love building things! Things like this website, a mobile app or even some
						delicious food!
						<div className="LinkBox">
							<div className="GithubElement">
								<a href="https://github.com/mayankgandhi/" target="_blank">
									<img src={githubimage}/>
								</a>
							</div>
							<div className="LinkedinElement">
								<a href="https://linkedin.com/in/mayankgandhi98/" target="_blank">
									<img src={linkedinimage}/>
								</a>
							</div>
							<div className="EmailElement">
								<a
									href="mailto:mayankgandhi50@gmail.com?subject=Hey%20Dude.%20I%20was%20on%20your%20website..."
									target="_blank"
								>
									<img src="https://img.icons8.com/wired/64/000000/send-mass-email.png"/>
								</a>
							</div>
							<div className="TwitterElement">
								<a href="https://twitter.com/mayankxgandhi" target="_blank">
								<img src={twitterlogo}/>
								</a>
							</div>
						</div>
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
