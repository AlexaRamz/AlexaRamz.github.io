function Header() {
	return(
		<header id="nav-header" className="cover-header">
		<img src="src/assets/ThemeImage.png" alt=""/>
		<div className="header-content">
		  <h1>Hi, I'm Alexandra</h1>
		  <div className="social-buttons">
			<a href="https://github.com/AlexaRamz" target="_blank" className="social-button hover-brighten">
			  <img src="src/assets/Icons/GithubIcon.png" alt="A Github icon"/>
			</a>
			<a href="https://www.linkedin.com/in/alexa-ramz" target="_blank" className="social-button hover-brighten">
			  <img src="src/assets/Icons/LinkedInIcon.png" alt="A LinkedIn icon"/>
			</a>
			<a href="https://alexaramz.itch.io/" target="_blank" className="social-button hover-brighten">
			  <img src="src/assets/Icons/itchioIcon.png" alt="An email icon"/>
			</a>
			<a href="mailto:ramz.alexa@gmail.com" className="social-button hover-brighten">
			  <img src="src/assets/Icons/EmailIcon.png" alt="An email icon"/>
			</a>
		  </div>
		  Computer Science student at UCI, Game developer, Software engineer
		</div>
	  </header>
	)
}

export default Header