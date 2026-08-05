import NavBar from '../components/NavBar.jsx';
import ProjectHeader from '../components/ProjectHeader.jsx';
import Footer from '../components/Footer.jsx'
import { shroudedMoonData } from '../data.js';
import WallEdgeDetection from '../assets/ShroudedMoon/WallEdgeDetection.gif';
import EnemyHit from '../assets/ShroudedMoon/EnemyHit.png';
import { createTagsContainer } from '../components/ProjectTag.jsx';

const linkButtonsData = [
	{ buttonText: "Play", externalLink: shroudedMoonData.playLink },
];

export default function ShroudedMoon()
{
	return (
		<>
			<NavBar />
			<ProjectHeader title="Shrouded Moon" subTitle="Action Platformer" linkButtons={linkButtonsData} />

			<main className="project-sections">
				<section>
					<div className="video-container">
						<iframe src={shroudedMoonData.videoEmbed} allow="autoplay"></iframe>
					</div>
					<div>
						<h2>Jump, dash, fight!</h2>
						<p>
							A traveler stumbles across a mysterious village that is trapped in a cycle due to the ‘Shrouded Moon’. Only by gaining all of the wind abilities and fighting Yokai are you able to break free.
						</p>
					</div>
				</section>
				<section>
					<div>
						{createTagsContainer(shroudedMoonData.tags)}
						<p>
							A student team project with UCI's Video Game Development Club (VGDC)
							<ul>
								<li><b>Role: </b>Programmer</li>
								<li><b>Software: </b>Unity, C#, Github</li>
								<li><b>Team size: </b>12</li>
								<li><b>Genres: </b>Platformer, Action</li>
								<li><b>Dates: </b>Oct - Dec 2023</li>
								<li><b>Platform: </b>PC</li>
							</ul>
						</p>
					</div>
				</section>
				<hr/>
				<section>
					<div>
						<h2>My Contributions</h2>
						<ul>
							<li>Worked with other programmers on game code using Github and Git version control.</li>
							<li>Set up the camera to follow the player within designated boundaries using Cinemachine module for Unity</li>
							<li>Created a versatile movement system for enemies with three possible behavior states and a ground or flying option</li>
							<li>Implemented a health system for enemies with visual effects to make hitting more responsive</li>
							<li>Assisted another programmer with using Github source control, helping to resolve a merge conflict they were having and providing tips to avoid future issues</li>
						</ul>
					</div>
				</section>
				<hr/>
				<section>
					<div>
						<h2>Enemy Systems</h2>
						The game has two enemies inspired by Yokai, supernatural entities in Japanese folklore. As programmer, I was responsible for setting up most features for the two enemies, including their movement AI, animation, collision, and health.
					</div>
				</section>
				<section>
					<div>
						<h5>Movement States</h5>
						One of my goals was to create a simple system to manage all the different movement types an enemy could have and allow them to switch between different movement states with ease. An enemy can be a ground or flying type and be in any of three states: wander, patrol, or chase.
					</div>
				</section>
				<section>
					<div>
						<h5>Edge and Wall Detection</h5>
						To make enemy behavior more realistic, I attempted to make enemies be able to avoid running off edges or smashing into walls. Ground enemies in the wandering state will reverse their direction right before reaching an edge or wall.
					</div>
					<img src={WallEdgeDetection} alt="" />
				</section>
				<section>
					<img src={EnemyHit} alt="" />
					<div>
						<h5>Enemy Health</h5>
						Finally, I created a health system for enemies that allows them to take a variable amount of damage from the player, and get destroyed when all health has run out. To make hitting an enemy more responsive and satisfying, I had the enemy flicker red when damaged, and I had the amount of damage inflicted be displayed as a particle dropping from the enemy.
					</div>
				</section>
			</main>
			<Footer />
		</>
	)

}