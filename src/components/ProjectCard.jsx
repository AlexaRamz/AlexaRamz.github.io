import { createTagsContainer } from './ProjectTag.jsx';
import { useNavigate } from 'react-router-dom';
import ProjectHoverVideo from './ProjectHoverVideo.jsx'

export default function ProjectCard(props)
{
	const navigate = useNavigate();

	function navigateToProject(project)
	{
		if (project.externalLink)
		{
			window.open(project.externalLink, '_blank'); // Open the external link in a new tab
		}
		else if (project.urlPath)
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
					<h2 className="project-card-header">{project.name}</h2>

					<div className="project-meta">
						{createTagsContainer(project.tags)}
						<div>
							{project.dates}
						</div>
					</div>

					<p>
						{project.description}
					</p>
				</div>
				{(project.externalLink || project.urlPath) && (
					<div className="button-container">
						<button className={buttonClass} onClick={() => navigateToProject(project)}>
							{project.externalLinkTitle ?? "More Info"} →
						</button>
					</div>
				)}
			</div>
		)
	}

	let cardClass = "project-card";
	let children = null;

	const MediaComponent = props.project.videoSrc ? (
		<ProjectHoverVideo project={props.project} />
	) : (
		<ProjectImage project={props.project} />
	);

	const DescriptionComponent = (
		<ProjectDescription variant={props.variant} project={props.project} />
	);

	if (props.variant === 'blue')
	{
		cardClass += " project-card-blue";
		children = (
			<>
				{MediaComponent}
				{DescriptionComponent}
			</>
		)
	}
	else if (props.variant === 'gray')
	{
		cardClass += " project-card-gray";
		children = (
			<>
				{DescriptionComponent}
				{MediaComponent}
			</>
		)
	}
	return (
		<article className={cardClass}>{children}</article>
	)
}
