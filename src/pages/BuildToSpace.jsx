import NavBar from '../components/NavBar.jsx';
import ProjectHeader from '../components/ProjectHeader.jsx';
import Footer from '../components/Footer.jsx'
import { createTagsContainer } from '../components/ProjectTag.jsx';
import BuildToSpaceShipBuilding from '../assets/BuildToSpace/BuildToSpaceShipBuilding.png';
import BuildToSpaceMining from '../assets/BuildToSpace/BuildToSpaceMining.png';
import BuildToSpaceCharacterCustom from '../assets/BuildToSpace/BuildToSpaceCharacterCustom.png';
import { buildToSpaceData } from '../data.js';

const linkButtonsData = [
	{ buttonText: "Play", externalLink: buildToSpaceData.playLink },
	{ buttonText: "Source code", externalLink: buildToSpaceData.codeLink }
];

export default function BuildToSpace()
{
	return (
		<>
			<NavBar />
			<ProjectHeader title="Build to Space" subTitle="Sci-fi sandbox game" linkButtons={linkButtonsData} />

			<main className="project-sections">
				<section>
					<div className="project-video">
						<iframe src={buildToSpaceData.videoEmbed} allow="autoplay"></iframe>
					</div>
					<div>
						<h2>Mine, Build, and Fly!</h2>
						<p>
							In a post-apocalyptic world, you've been given a mission to travel to space and search the galaxy for a new home for Earth's survivors. Construct and pilot your very own spacecraft to escape the planet and begin your journey through space!
						</p>
					</div>
				</section>
				<section>
					<div>
						{createTagsContainer(buildToSpaceData.tags)}
						<p>
							A student team project with UCI's Video Game Development Club (VGDC).
							<ul>
								<li><b>Roles: </b>Team Lead, Programmer, Gameplay Designer</li>
								<li><b>Software: </b>Unity, C#, Github</li>
								<li><b>Team size: </b>7-15</li>
								<li><b>Genres: </b>Sandbox, Simulation, Sci-fi</li>
								<li><b>Platform: </b>PC</li>
								<li><b>Dates: </b>Jan - June 2024</li>
							</ul>
						</p>
					</div>
				</section>
				<hr />
				<section>
					<div>
						<h2>Programming Contributions</h2>
						<ul>
							<li>Collaborated with other programmers using Git version control (GitHub)</li>
							<li>Designed and implemented core gameplay mechanics: </li>
						</ul>
						<h5>Spacecraft building and piloting</h5>
						<ul>
							<li>Developed systems for players to construct and control spaceships. </li>
							<li>Developed an adaptable grid building class enabling players to build freely on terrain or on any spaceship, regardless of its orientation.</li>
						</ul>
					</div>
					<img src={BuildToSpaceShipBuilding} alt="" />
				</section>
				<section>
					<img src={BuildToSpaceMining} alt="" />
					<div>
						<h5>Inventory management</h5>
						<ul>
							<li>Implemented a system for players to collect, store, and utilize various materials and tools.</li>
							<li>Optimized code for future expansion: Utilized class inheritance to design tools with a hierarchical structure to efficiently manage pickaxes and gun variations, and facilitate future additions.</li>
						</ul>
					</div>
				</section>
				<section>
					<div>
						<h5>Character customization</h5>
						<ul>
							<li>Enabled players to personalize their characters' appearance.</li>
							<li>Players can select from a variety of hair styles and hats and change the color of each accessory.</li>
						</ul>
						<h5>Character movement</h5>
						<ul>
							<li>Implemented movement mechanics for the player character, including run, jump, and jetpack functionalities.</li>
							<li>Utilized Unity's blend trees to create seamless animation transitions.</li>
						</ul>
					</div>
					<img src={BuildToSpaceCharacterCustom} alt="" />
				</section>
				<hr />
				<section>
					<div>
						<h2>Team lead Responsibilities</h2>
						<ul>
							<li>Spearheaded cross-functional team collaboration (programming, art, game design, UI/UX, writing, audio) to ensure a unified game experience</li>
							<li>Facilitated effective communication through hybrid meetings and online tools like Discord</li>
							<li>Channeled Agile methodology using week-long sprints and regular team meetings</li>
							<li>Utilized a Kanban board in Trello to manage project tasks and efficiently track progress</li>
						</ul>
					</div>
				</section>
				<hr />
				<section>
					<div>
						<h2>Other Contributions</h2>
						<ul>
							<li>Devised the initial creative vision for the game and collaborated with designers to develop game mechanics and UI concepts</li>
							<li>Facilitated effective communication through hybrid meetings and online tools like Discord</li>
							<li>When needed, contributed to the creation of pixel art assets, including characters, animations, enemies, terrain, and UI elements</li>
						</ul>
					</div>
				</section>
				<hr />
				<section>
					<div>
						<h2>Background</h2>
						<p>
							&emsp;<i>Build to Space</i> began as a personal exploration of the building genre. Inspired to combine the building mechanics of Kerbal Space Program, Bad Piggies, and Roblox's Build a Boat For Treasure, I envisioned a game where players could construct and customize everything from spaceships to defensive structures, vehicles, and factories.
						</p>
						<p>
							&emsp;Taking the lead within UCI's Video Game Development Club for two quarters, I transformed my initial prototype into a collaborative project. We worked together to develop the core building and piloting systems, allowing players to unleash their creativity as they conquer the challenges of reaching space.
						</p>
						<p>
							&emsp;As the project remains ongoing, I will continue to work on the game individually. My focus will be on expanding building features and refining existing gameplay to balance difficulty and enhance the immersive experience.
						</p>
					</div>
				</section>
			</main>
			<Footer />
		</>
	)
}