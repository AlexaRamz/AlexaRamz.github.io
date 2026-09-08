import NavBar from '../components/NavBar.jsx';
import ProjectHeader from '../components/ProjectHeader.jsx';
import Footer from '../components/Footer.jsx'
import { createTagsContainer } from '../components/ProjectTag.jsx';
import WildLasersBackground from '../assets/WildLasers/WildLasersBackground.png';
import WildLasersTilemap from '../assets/WildLasers/WildLasersTilemap.png';
import { wildLasersData } from '../data.js';

const linkButtonsData = [
	{ buttonText: "Play", externalLink: wildLasersData.playLink },
	{ buttonText: "Source code", externalLink: wildLasersData.codeLink }
];

export default function WildLasers()
{
	return (
		<>
			<NavBar />
			<ProjectHeader title="Wild Lasers" subTitle="Platformer-Shooter" linkButtons={linkButtonsData} />

			<main className="project-sections">
				<section>
					<div className="project-video">
						<iframe src={wildLasersData.videoEmbed} allow="autoplay"></iframe>
					</div>
					<div>
						<h2>Use shooting for both movement and combat!</h2>
						<p>
							Space cowboy Jupiter has crash landed on a dangerous planet and needs to escape. With the help of his trusty laser rifle, he must launch himself through the caverns and fight enemies along the way.
						</p>
					</div>
				</section>
				<section>
					<div>
						{createTagsContainer(wildLasersData.tags)}
						<p>
							<ul>
								<li><b>Roles: </b>Team Lead, Programmer (Art and VFX), Artist</li>
								<li><b>Software: </b>Unity, C#, Github, Aseprite</li>
								<li><b>Team size: </b>9</li>
								<li><b>Genres: </b>Platformer, shooter, sci-fi, wild west</li>
								<li><b>Platform: </b>PC</li>
								<li><b>Dates: </b>April - June 2022</li>
							</ul>
							<i>Wild Lasers</i> is a wild west and sci-fi themed plaformer-shooter game I led and developed as a part of UCI's Video Game Design Club using Unity. The game features a unique mechanic where the player must depend on shooting a gun for both movement and combat.
						</p>
					</div>
				</section>
				<hr />
				<section>
					<div>
						<h2>Programming Contributions</h2>
						<ul>
							<li>Collaborated with other programmers on game code using Github and Git version control.</li>
							<li>Implemented a parallax scrolling effect for the background to add a sense of depth to the world.</li>
							<li>Added particle effects for the player's laser and enemies' projectiles when hitting another entity or wall.</li>
							<li>Imported and set up the art I had created within Unity. This included setting up rule tiles for easier level creation.</li>
						</ul>
					</div>
					<img src={WildLasersBackground} alt="" />
				</section>
				<hr />
				<section>
					<div>
						<h2>Art Contributions</h2>
						<ul>
							<li>Conceptualized and created art for the character and enemies, with the goal of designing three alien species with unique characteristics.</li>
							<li>Created the sky background with multiple layers for a parallax scrolling effect.</li>
							<li>Created tilesets for the game's environment, including ground, walls, and spikes.</li>
						</ul>
					</div>
					<img src={WildLasersTilemap} alt="" />
				</section>
				<hr />
				<section>
					<div>
						<h2>Team lead Responsibilities</h2>
						<ul>
							<li>Managed a team of programmers, game designers, and writers, which included organizing meetings, assigning tasks, and overlooking progress.</li>
							<li>Delegated tasks using Trello and followed a Scrum-like framework with one-week sprints</li>
							<li>Proposed the main mechanic our game would revolve around, and worked with game designers and writers to generate additional ideas and come to a consensus about the game's direction.</li>
						</ul>
					</div>
				</section>
				<hr />
				<section>
					<div>
						<h2>Background</h2>
						This game was the first project I led as part of UCI's Video Game Design Club. Looking to create a game with an intriguing and original game mechanic, the idea I proposed to my team was a unique take on a platformer where instead of running and jumping, the player would depend solely on shooting for movement as well as for combat. Furthermore, as a dabbler in character design, I thought about creating a cast of space hero characters, an alien species from each planet in the solar system with unique designs and colors corresponding to their place of origin. Working as artist and programmer for art and visual effects, this project was a chance to channel some of these ideas into the game's visuals, feel, and environment.
					</div>
				</section>
				<hr />
				<section>
					<div>
						<h2>Leading a Team</h2>
						Feeling confident in my abilities as a game developer, I decided to try leading a beginner-friendly game project. My team and I started by brainstorming additional gameplay and story ideas. We had a lot of fun playing around with ideas, with one of my favorites being that the player would have three guns with distinct personalities that talk to you. However, a third into the project, we feared that we had spent too much time coming up with ideas and wouldn't be able to implement all of them. In time I understood that we needed to reduce the scope of our project. I also realized my mistake of expecting all brainstorming to be done during meetings rather than leveraging the independent work of my team's game designers and writers to reduce planning time. I immediately had programmers commence their work on the game's core mechanics. I discussed with game designers to shrink our plan to something more feasible, and I left the final details and level designs up to them. We were only able to complete one level, and weren't able to include all of our story ideas, but we were still pretty proud of how much we did complete.
					</div>
				</section>
			</main>
			<Footer />
		</>
	)
}