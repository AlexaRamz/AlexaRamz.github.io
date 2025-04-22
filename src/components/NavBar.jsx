import {projects} from '../data.js';

function NavBar() {
	return(
		<div className="top-bar">
			<div className="logo-text">Alexandra Ramirez</div>
			<nav>
				<a href="index.html">Home</a>
				<div className="dropdown">
					<a id="project-dropdown-btn" href="#projects-section">Projects</a>
					<div id="projects-dropdown-content" className="dropdown-content">
						{projects.map((project, index) => (
							<a key={index} href={"src/pages/" + project.pageSource}>{project.name}</a>
						))}
					</div>
				</div>
				<a href="#contact-section">Contact Me</a>
			</nav>
		</div>
	)
}

export default NavBar