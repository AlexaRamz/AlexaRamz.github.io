import {projectList, tagColors} from './data.js';

function createTag(tagName) {
  return `
    <div class="tag" style="background-color: ${tagColors[tagName]}">${tagName}</div>
  `;
}

function createTags(tagNames) {
  let tags = ``;
  for (const tagName of tagNames) {
    tags += createTag(tagName);
  }
  return tags;
}

function createProjectCardStyle1(project) {
  return `
    <article class="project-card project-card-blue">
      <button class="img-button" onclick="window.location.href='${project.pageSource}'">
        <img src="${project.image}" alt="${project.altText}">
      </button>
      <div class="project-desc">
        <div>
          <h2>${project.name}</h2>
          <div class="tag-container">
            ${createTags(project.tags)}
          </div>
          <p>
            ${project.description}
          </p>
        </div>
        <div class="button-container">
          <button class="outline-button outline-button-blue hover-float" onclick="window.location.href='${project.pageSource}'">
            More Info →
          </button>
        </div>
      </div>
    </article>
  `;
}

function createProjectCardStyle2(project) {
  return `
    <article class="project-card project-card-gray">
      <div class="project-desc">
        <div>
          <h2>${project.name}</h2>
          <div class="tag-container">
            ${createTags(project.tags)}
          </div>
          <p>
            ${project.description}
          </p>
        </div>
        <div class="button-container">
          <button class = "outline-button outline-button-gray hover-float" onclick="window.location.href='${project.pageSource}'">
            More Info →
          </button>
        </div>
      </div>
      <button class="img-button" onclick="window.location.href='${project.pageSource}'">
        <img src="${project.image}" alt="${project.altText}">
      </button>
    </article>
  `;
}

const parentProjects = document.getElementById('project-list');

for (let i = 0; i < projectList.length; i++) {
  const tempContainer = document.createElement('div');
  
  if (i % 2 == 0) {
    tempContainer.innerHTML = createProjectCardStyle1(projectList[i]);
  }
  else {
    tempContainer.innerHTML = createProjectCardStyle2(projectList[i]);
  }

  parentProjects.appendChild(tempContainer);
}

