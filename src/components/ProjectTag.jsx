import { tagColors } from '../data.js';

export default function ProjectTag({ tagName })
{
	return (
		<div className="tag" style={{ backgroundColor: tagColors[tagName] }}>
			{tagName}
		</div>
	)
}

export function createTags(tagNames)
{
	return tagNames.map((tagName) => (
		<ProjectTag key={tagName} tagName={tagName} />
	))
}


export function createTagsContainer(tagNames)
{
	return (
		<div className="tag-container">
			{createTags(tagNames)}
		</div>
	)
}