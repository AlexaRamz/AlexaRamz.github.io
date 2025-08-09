import { projects } from '../data.js';
import ProjectCard from './ProjectCard.jsx'

export default function ProjectList()
{
	return (
		<>
			<span id="projects-section"></span>
			<h2>Selected Projects</h2>
			<div className="project-list">
				{projects.map((project, index) => (
					<ProjectCard key={index} variant={index % 2 == 0 ? 'blue' : 'gray'} project={project} />
				))}
			</div>
		</>
	)
}
