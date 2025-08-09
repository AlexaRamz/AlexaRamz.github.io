import NavBar from '../components/NavBar.jsx';
import ProjectHeader from '../components/ProjectHeader.jsx';
import Footer from '../components/Footer.jsx'
import { createTagsContainer } from '../components/ProjectTag.jsx';
import { dawncoreData } from '../data.js';

const linkButtonsData = [
	{ buttonText: "Design Document", externalLink: dawncoreData.designDocLink }
];

export default function Dawncore()
{
	return (
		<>
			<NavBar />
			<ProjectHeader title="Dawncore" subTitle="First-person horde shooter" linkButtons={linkButtonsData} />

			<main className="project-sections">
				<section>

					<div className="video-container">
						<iframe src="https://drive.google.com/file/d/1ZJESBE4uBgySKr-nZ_ycMlJQb4vlcsth/preview" allow="autoplay"></iframe>
					</div>
					<div>
						<h2>Return the Dawncore, Save the world</h2>
						<p>
							In this First-Person Shooter combining freedom of movement with the thrill of horde combat, your objective is to return the light (the Dawncore) to a kingdom enveloped by dark forces.
						</p>
					</div>
				</section>
				<section>
					<div>
						{createTagsContainer(dawncoreData.tags)}
						<p>
							A UCI Capstone course project, whose team includes collaborators from UCI's Video Game Development Club (VGDC).
							<ul>
								<li><b>Roles: </b>Programmer</li>
								<li><b>Software: </b>Unreal Engine 5 (C++ and Blueprints), Perforce</li>
								<li><b>Team size: </b>15</li>
								<li><b>Genres: </b>FPS, Horde shooter</li>
								<li><b>Platform: </b>PC</li>
								<li><b>Dates: </b>Oct 2024 - (Ongoing)</li>
							</ul>
						</p>
					</div>
				</section>
				<section>
					<div>
						<h2>Programming Contributions</h2>
						<ul>
							<li>Developed enemy AI with a variety of movement behaviors (wander, chase, and jump) using Unreal Engine's pathfinding system and navigation mesh.</li>
							<li>Implemented combat mechanics for enemies such as attack and health.</li>
							<li>Utilized Unreal Engine's behavior trees for AI decision-making to control transitions between wandering, chasing, and attacking states.</li>
							<li>Prototyped game mechanics using Blueprints for quick development and iteration, and optimized performance-critical functionalities by migrating them to C++.</li>
						</ul>
					</div>
				</section>
				<section>
					<div>
						<h5>Enemy Jump</h5>
						<ul>
							<li>Implemented a mechanic that allows enemies to intelligently jump on top of any platform or over any gap that is in its way.</li>
							<li>Leveraged line traces to detect obstacles and gaps in front of the enemy.</li>
							<li>Leveraged box traces in a unique way to find reachable ledges to jump to.</li>
						</ul>
					</div>
				</section>
				<section>
					<div className="video-container">
						<iframe src="https://drive.google.com/file/d/1jSwV0EGmx0b0KOQbmEvzipjWW9VqEuvR/preview" allow="autoplay"></iframe>
					</div>
					<div className="video-container">
						<iframe src="https://drive.google.com/file/d/1ifeBtWFwfEG3fIRONpdpZgD9tQBD0gPE/preview" allow="autoplay"></iframe>
					</div>
				</section>
				<section>
					<div>
						<h5>Enemy Attack</h5>
						<ul>
							<li>Implemented a mechanic allowing enemies to attack when the player is in range.</li>
							<li>In the enemy’s AI behavior tree, used a Service to check whether the player is in range, and used parallel execution to allow for attacking while chasing the player.</li>
							<li>Utilized a sphere collider attached to the enemy’s hand to detect when it hits the player and damage them accordingly.</li>
						</ul>
					</div>
				</section>
				<section>
					<div>
						<h5>Enemy AI Patrol and Chase</h5>
						<ul>
							<li>Implemented a way for enemies to wander around to random points, and begin chasing the player when they come into view.</li>
							<li>Set up an AI behavior tree to allow the enemy to easily enter the appropriate state when certain conditions are met.</li>
							<li>Set up a navigation mesh tod allow enemies to move around the environment and find the best path to their target.</li>
						</ul>
					</div>
				</section>
			</main>
			<Footer />
		</>
	)
}
