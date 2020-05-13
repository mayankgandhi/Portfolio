import React from 'react';
import Link from 'gatsby-link';
import About from '../layouts/About';
import Projects from '../layouts/Projects';
import Work from '../layouts/Work';
import Education from '../layouts/Education';

const IndexPage = () => (
	<div>
		<div className="container">
			<section id="about">
				<About />
			</section>
			<section id="projects">
				<Projects />
			</section>
			<section id="work">
				<Work />
			</section>
			<section id="education">
				<Education />
			</section>
		</div>
	</div>
);

export default IndexPage;
