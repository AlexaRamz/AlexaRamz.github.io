import { createTagsContainer } from '../ProjectTag.jsx';
import { useNavigate } from 'react-router-dom';
import ProjectHoverVideo from '../ProjectHoverVideo/ProjectHoverVideo.jsx';
import styles from './ProjectCard.module.css';

export default function ProjectCard(props)
{
    const navigate = useNavigate();

    function navigateToProject(project)
    {
        if (project.externalLink)
        {
            window.open(project.externalLink, '_blank');
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
            <button className={styles.imgButton} onClick={() => navigateToProject(project)}>
                <img src={"src/assets/" + project.image} alt={project.altText} />
            </button>
        )
    }

    function ProjectDescription(props)
    {
        const project = props.project;

        return (
            <div className={styles.projectDesc}>
                <div>
                    <h2 className={styles.projectCardHeader}>{project.name}</h2>

                    <div className={styles.projectMeta}>
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
                    <div className={styles.buttonContainer}>
                        <button className={`${styles.outlineButton} ${styles.hoverFloat}`} onClick={() => navigateToProject(project)}>
                            {project.externalLinkTitle ?? "More Info"} →
                        </button>
                    </div>
                )}
            </div>
        )
    }

    let cardClass = styles.projectCard;
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
        cardClass += ` ${styles.projectCardBlue}`;
        children = (
            <>
                {MediaComponent}
                {DescriptionComponent}
            </>
        )
    }
    else if (props.variant === 'gray')
    {
        cardClass += ` ${styles.projectCardGray}`;
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