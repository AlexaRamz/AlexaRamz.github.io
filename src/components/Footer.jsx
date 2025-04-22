import linkedInLogo from '../assets/Icons/LinkedInIcon.png'
import emailIcon from '../assets/Icons/EmailIcon.png'

function Footer() {
	return(
		<footer id="contact-section">
			<h4 style={{textAlign: 'center'}}>Connect with me</h4>
			<div className="social-buttons">
				<a href="https://www.linkedin.com/in/alexa-ramz" target="_blank" className = "social-button hover-brighten">
				<img src={linkedInLogo} alt="LinkedIn icon"/>
				</a>
				<a href="mailto:ramz.alexa@gmail.com" className = "social-button hover-brighten">
				<img src={emailIcon} alt="An email icon"/>
				</a>
			</div>
		</footer>
	)
}

export default Footer