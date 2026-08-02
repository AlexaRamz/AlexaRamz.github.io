import ThemeImage from '../assets/ThemeImage.png';

export default function ProjectHeader({ title, subTitle, linkButtons })
{
	return (
		<div id="nav-header">
			<header>
				<img src={ThemeImage} alt="Theme" />
				<div className="header-content">
					<h1>{title}</h1>
					<h3>{subTitle}</h3>
					{linkButtons && (
						<div className="button-row">
							{linkButtons.map(({ buttonText, externalLink }, index) => (
								<button
									key={index}
									className="round-button primary-button-color hover-float"
									onClick={() => window.open(externalLink, '_blank')}
								>
									{buttonText}
								</button>
							))}
						</div>
					)}
				</div>
			</header>
		</div>
	);
}