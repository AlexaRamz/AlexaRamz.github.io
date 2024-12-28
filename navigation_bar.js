function createNav() {
  return `
    <div class="top-bar">
      <div class="logo-text">Alexandra Ramirez</div>
      <nav>
        <a href="index.html">Home</a>
        <a href="#projects-section">Projects</a>
        <a href="#contact-section">Contact Me</a>
      </nav>
    </div>
  `;
}

const navContainer = document.createElement('div');
navContainer.innerHTML = createNav();
const navHeader = document.getElementById('nav-header');
navHeader.insertBefore(navContainer, navHeader.firstChild);
