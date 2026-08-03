import { useState } from 'react';
import { projects } from '../data.js';
import ProjectCard from './ProjectCard/ProjectCard.jsx'

export default function ProjectsSection()
{
	const [activeCategory, setActiveCategory] = useState('All');
	const uniqueCategories = ['All', 'Games', 'Web', 'Mobile'];

	function createProjectCards()
	{
		const filteredProjects = projects.filter(project => activeCategory === 'All' || project.categories.includes(activeCategory));

		return filteredProjects.map((project, index) => (
			<ProjectCard key={index} variant={index % 2 == 0 ? 'blue' : 'gray'} project={project} />
		))
	}

	return (
		<>
			<span id="projects-section"></span>
			<h2>Selected Projects</h2>
			<div className="category-button-container">
				{uniqueCategories.map((category, index) => (
					<button
						key={index}
						className={`round-button hover-float ${category === activeCategory ? "primary-button-color" : "category-button-inactive"}`}
						onClick={() => { setActiveCategory(category) }}
					>
						{category}
					</button>
				))}
			</div>

			<div className="project-list">
				{createProjectCards()}
			</div >
		</>
	)
}
