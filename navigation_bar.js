function createFooter() {
  return `
    <div class="top-bar">
      <div class="logo-text">AR</div>
      <nav>
        <a href="index.html">Home</a>
        <a href="#projects-section">Projects</a>
        <a href="#contact-section">Contact Me</a>
      </nav>
    </div>
  `;
}

const navContainer = document.createElement('div');
navContainer.innerHTML = createFooter();
document.body.prepend(navContainer); 
