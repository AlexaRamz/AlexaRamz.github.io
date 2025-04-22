import {projects, tagColors} from '../data.js';

function createTag(tagName) {
  return(
	<div className="tag" style={{ backgroundColor: tagColors[tagName] }}>{tagName}</div>
  )
}

function createTags(tagNames) {
  let tags = ``;
  for (const tagName of tagNames) {
	tags += createTag(tagName);
  }
  return tags;
}

function ProjectList() {
	return(
		<div id="project-list" className="project-list">
			{projects.map((project, index) => (
				<ProjectCard key={index} variant={index % 2 == 0 ? 'blue' : 'gray'} project={project} />
			))}
		</div>
	)
}

function ProjectCard(props) { // TODO: Learn parameters
	let cardClass = "project-card";
	let children = null;

	if (props.variant === 'blue') {
		cardClass += " project-card-blue";
		children = (
			<>
				<ProjectImage project={props.project}/>
				<ProjectDescription variant={props.variant} project={props.project}/>
			</>
		)
	}
	else if (props.variant === 'gray') {
		cardClass += " project-card-gray";
		children = (
			<>
				<ProjectDescription variant={props.variant} project={props.project}/>
				<ProjectImage project={props.project}/>
			</>
		)
	}
	return(
		<article className={cardClass}>{children}</article> // TODO: Learn classnames
	)
}

function ProjectImage(props) {
	const project = props.project;
	return(
		<button className="img-button" onClick={() => { window.location.href = project.pageSource; }}>
			<img src={"src/assets/" + project.image} alt={project.altText}/>
		</button>
	)
}

function ProjectDescription(props) {
	const project = props.project;
	// TODO: Learn classnames
	let buttonClass = "outline-button hover-float";
	if (props.variant === 'blue') {
		buttonClass += " outline-button-blue";
	}
	else if (props.variant === 'gray') {
		buttonClass += " outline-button-gray";
	}

	return (
		<div className="project-desc">
			<div>
				<h2>{project.name}</h2>
				<div className="tag-container">
					{createTags(project.tags)}
				</div>
				<p>
					{project.description}
				</p>
			</div>
			<div className="button-container">
				<button className={buttonClass} onClick={() => { window.location.href = project.pageSource; }}>
					More Info →
				</button>
			</div>
		</div>
	)
}

export default ProjectList