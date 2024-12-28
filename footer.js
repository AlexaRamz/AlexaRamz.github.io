function createFooter() {
  return `
    <footer id="contact-section">
      <h4 style="text-align: center;">Connect with me</h4>
      <div class="social-buttons">
        <a href="https://www.linkedin.com/in/alexa-ramz" target="_blank" class = "social-button hover-brighten">
          <img src="Icons/LinkedInIcon.png" alt="A LinkedIn icon">
        </a>
        <a href="mailto:ramz.alexa@gmail.com" class = "social-button hover-brighten">
          <img src="Icons/EmailIcon.png" alt="An email icon">
        </a>
      </div>
    </footer>
  `;
}

const footerContainer = document.createElement('div');
footerContainer.innerHTML = createFooter();
document.body.append(footerContainer); 
