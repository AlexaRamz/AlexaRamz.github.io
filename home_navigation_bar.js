import {projectList} from './data.js';

function createNav() {
  return `
    <div class="top-bar">
      <div class="logo-text">Alexandra Ramirez</div>
      <nav>
        <a href="index.html">About Me</a>
        <a href="#skills-section">Skills</a>
        <div class="dropdown">
          <a id="project-dropdown-btn" href="#projects-section">Projects</a>
          <div id="projects-dropdown-content" class="dropdown-content">
          </div>
        </div>
        <a href="#contact-section">Contact Me</a>
      </nav>
    </div>
  `;
}

// Insert the navigation bar at the top of the page
const navContainer = document.createElement('div');
navContainer.innerHTML = createNav();
const navHeader = document.getElementById('nav-header');
navHeader.insertBefore(navContainer, navHeader.firstChild);

// Add links to the projects dropdown
const projectsDropdown = document.getElementById('projects-dropdown-content');

for (let i = 0; i < projectList.length; i++) {
  const tempContainer2 = document.createElement('div');
  tempContainer2.innerHTML = `<a href="${projectList[i].pageSource}">${projectList[i].name}</a>`
  projectsDropdown.appendChild(tempContainer2)
}
