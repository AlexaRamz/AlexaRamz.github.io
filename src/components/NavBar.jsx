import { Link, useLocation } from 'react-router-dom';
import { projects } from '../data.js';

function NavBar()
{
	const { pathname } = useLocation();

	const handleProjectsClick = () =>
	{
		if (pathname === '/')
		{
			const element = document.getElementById('projects-section');
			if (element)
			{
				element.scrollIntoView({ behavior: 'smooth' });
			}
		}
	}

	return (
		<div className="top-bar">
			<div className="logo-text">Alexandra Ramirez</div>
			<nav>
				<Link to="/">Home</Link>
				<div className="dropdown">
					<Link id="project-dropdown-btn" to="/" onClick={handleProjectsClick}>Projects</Link>
					<div id="projects-dropdown-content" className="dropdown-content">
						{projects.map((project, index) =>
						{
							if (project.urlPath != null)
							{
								return (
									<Link key={index} to={`/projects/${project.urlPath}`}>
										{project.name}
									</Link>
								);
							}
							return null;
						})}
					</div>
				</div>
				<a href="#contact-section">Contact Me</a>
			</nav >
		</div >
	)
}

export default NavBar