import React from 'react';
import Link from 'gatsby-link';
import About from '../layouts/Sections/About';
import Projects from '../layouts/Sections/Projects';
import Resume from '../layouts/Sections/Resume';
import Contact from '../layouts/Sections/Contact';

const IndexPage = () => (
	<div>
		<div className="container">
			<section id="about">
				<About />
			</section>
			<section id="projects">
				<Projects />
			</section>
			<section id="resume">
				<Resume />
			</section>
			<section id="contact">
				<Contact />
			</section>
		</div>
	</div>
);

export default IndexPage;
