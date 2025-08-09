import { createTagsContainer } from './ProjectTag.jsx';
import { useNavigate } from 'react-router-dom';

export default function ProjectCard(props)
{
	const navigate = useNavigate();

	function navigateToProject(project)
	{
		if (project.externalLink != null)
		{
			window.open(project.externalLink, '_blank'); // Open the external link in a new tab
		}
		else
		{
			navigate(`/projects/${project.urlPath}`);
		}
	}

	function ProjectImage(props)
	{
		const project = props.project;
		return (
			<button className="img-button" onClick={() => navigateToProject(project)}>
				<img src={"src/assets/" + project.image} alt={project.altText} />
			</button>
		)
	}

	function ProjectDescription(props)
	{
		const project = props.project;

		let buttonClass = "outline-button hover-float";
		if (props.variant === 'blue')
		{
			buttonClass += " outline-button-blue";
		}
		else if (props.variant === 'gray')
		{
			buttonClass += " outline-button-gray";
		}

		return (
			<div className="project-desc">
				<div>
					<h2>{project.name}</h2>

					{createTagsContainer(project.tags)}

					<p>
						{project.description}
					</p>
				</div>
				<div className="button-container">
					<button className={buttonClass} onClick={() => navigateToProject(project)}>
						{project.externalLink != null ? project.externalLinkTitle : "More Info"} →
					</button>
				</div>
			</div>
		)
	}

	let cardClass = "project-card";
	let children = null;

	if (props.variant === 'blue')
	{
		cardClass += " project-card-blue";
		children = (
			<>
				<ProjectImage project={props.project} />
				<ProjectDescription variant={props.variant} project={props.project} />
			</>
		)
	}
	else if (props.variant === 'gray')
	{
		cardClass += " project-card-gray";
		children = (
			<>
				<ProjectDescription variant={props.variant} project={props.project} />
				<ProjectImage project={props.project} />
			</>
		)
	}
	return (
		<article className={cardClass}>{children}</article>
	)
}
