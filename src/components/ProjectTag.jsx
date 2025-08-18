import { tagColors } from '../data.js';

export default function ProjectTag({ tagName })
{
	return (
		<div className="tag" style={{ backgroundColor: tagColors[tagName] || "#4f4f4fff" }}>
			{tagName}
		</div>
	)
}

export function createTagsContainer(tagNames)
{
	return (
		<div className="tag-container">
			{tagNames.map((tagName) => (
				<ProjectTag key={tagName} tagName={tagName} />
			))}
		</div>
	)
}