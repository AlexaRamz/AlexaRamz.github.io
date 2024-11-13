function createFooter() {
  return `
    <footer id="contact-section">
      <h4 style="text-align: center;">Connect with me</h4>
      <div class="footer-buttons">
        <a href="https://www.linkedin.com/in/alexa-ramz" target="_blank" class = "contact-button hover-increase">
          <img src="Icons/LinkedInIcon.png" alt="A LinkedIn icon">
        </a>
        <a href="https://github.com/AlexaRamz" target="_blank" class = "contact-button hover-increase">
          <img src="Icons/GithubIcon.png" alt="A Github icon">
        </a>
        <a href="">
          <img src="Icons/EmailIcon.png" alt="An email icon" class = "contact-button hover-increase">
        </a>
      </div>
    </footer>
  `;
}

const tempContainer = document.createElement('div');
tempContainer.innerHTML = createFooter();
document.body.append(tempContainer); 
