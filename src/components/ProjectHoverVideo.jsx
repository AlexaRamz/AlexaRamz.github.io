import React, { useState } from 'react';
import ReactPlayer from 'react-player';

export default function ProjectHoverVideo({ project })
{
  const [isHovering, setIsHovering] = useState(false);

  function handleMouseEnter()
  {
    setIsHovering(true);
  }

  function handleMouseLeave()
  {
    setIsHovering(false);
  }

  return (
    <div
      className="project-hover-video"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {!isHovering ? (
        <img
          src={"src/assets/" + project.image}
          alt={project.altText}
        />
      ) : (
        <ReactPlayer
          url={project.videoSrc}
          src={project.videoSrc}
          playing={true}
          muted={true}
          loop={true}
          width="100%"
          height="100%"
        />
      )}
    </div>
  );
}