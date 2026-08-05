import NavBar from '../components/NavBar.jsx';
import ProjectHeader from '../components/ProjectHeader.jsx';
import Footer from '../components/Footer.jsx'
import { createTagsContainer } from '../components/ProjectTag.jsx';
import { scifiPuzzleData } from '../data.js';
import BeepBoopPuzzleAnimatedThumbnail from '../assets/BeepBoopPuzzle/BeepBoopPuzzleAnimatedThumbnail.gif';

const linkButtonsData = [
	{ buttonText: "Play", externalLink: scifiPuzzleData.playLink },
	{ buttonText: "Source code", externalLink: scifiPuzzleData.codeLink }
];

export default function SciFiPuzzle()
{
	return (
		<>
			<NavBar />
			<ProjectHeader title="Beep Boop's Puzzle Adventure" subTitle="Sci-fi puzzle" linkButtons={linkButtonsData} />

			<main className="project-sections">
				<section>
					<div className="video-container">
						<iframe src="https://drive.google.com/file/d/13oPJRnBXt9_9meDHL46yGKo7IdsWu0Ds/preview" allow="autoplay"></iframe>
					</div>
					<div>
						<h2>Electrifying puzzles!</h2>
						<p>
							Where did the lights go? Guide the maintenance robot to fix and redirect power to all of the lightbulbs. Be careful not to short circuit!
						</p>
					</div>
				</section>
				<section>
					<div>
						{createTagsContainer(scifiPuzzleData.tags)}
						<p>
							<ul>
								<li><b>Roles: </b>Team Lead, Programmer</li>
								<li><b>Software: </b>Unity, C#, Github</li>
								<li><b>Team size: </b>10</li>
								<li><b>Genres: </b>Puzzle, Sci-fi</li>
								<li><b>Platform: </b>PC</li>
								<li><b>Dates: </b>Oct - Dec 2022</li>
							</ul>
							Beep Boop's Puzzle Adventure is an electricity-based puzzle game I led and developed as a part of UCI's Video Game Development Club using Unity.
						</p>
					</div>
				</section>
				<hr/>
				<section>
					<div>
						<h2>Team lead Responsibilities</h2>
						<ul>
							<li>Managed a team of programmers, artists, and an audio designer, which included organizing meetings, assigning tasks, and overlooking progress.</li>
							<li>Delegated tasks using Trello and followed a Scrum-like framework with one-week sprints</li>
							<li>Proposed the main mechanic our game would revolve around, and worked with the team to generate additional ideas and come to a consensus about the game's direction.</li>
						</ul>
					</div>
				</section>
				<hr/>
				<section>
					<div>
						<h2>Programming Contributions</h2>
						<ul>
							<li>Worked with other programmers on game code using Github and Git version control.</li>
							<li>Implemented the primary mechanics for the puzzle, including a system to simulate running power through any configuration of wires on a grid, achieved using a recursive, depth-first traversal algorithm.</li>
							<li>Set up the environment for the puzzles, including collidable elements and proper sprite sorting to create the top down perspective.</li>
						</ul>
					</div>
				</section>
				<hr/>
				<section>
					<div>
						<h2>Power Grid System</h2>
						In each of the game's three puzzles, the player's goal is to turn on all of the light bulbs in the room by redirecting power appropriately. To achieve this, the player controls a maintenance robot and steps on buttons to rotate strips of wire on the floor. To add an additional challenge, the player may need to fix broken power sources and lightbulbs, as well as overcome obstacles such as closed doors and tesla coils.
					</div>
					<img src={BeepBoopPuzzleAnimatedThumbnail} alt="" />
				</section>
				<section>
					Implementing these puzzle mechanics required me to create a system that simulates running power through any possible configuration of wires on a grid, making sure to take into account for multiple power sources, forks, and intersections. The task seemed a bit complex at first, but I was able to break it down by modeling a given configuration as a graph, where vertices are wire tiles and edges between vertices show which wires connect to each other. This is stored as a 2D array of class instances, each describing the on/off state and presence of neighbors of its corresponding wire. Essentially, each time the player makes a change in the puzzle, every wire starting from a working power source is traversed in a recursive manner and its state is updated accordingly. Ultimately, this traversal resembles a Depth-first Search algorithm on the graph, which I think is pretty neat.
				</section>
				<hr/>
				<section>
					<div>
						<h2>Background</h2>
						&emsp;This game was the second project I led as part of UCI's Video Game Design Club. It is based on my own idea for a puzzle where the player's goal is to turn on all of the light bulbs in the room by rotating tiles of wire to redirect power appropriately. I used this project as an opportunity to further enhance my programming skills and to improve upon some of my shortcomings as a project manager during my prior experience leading a team.
					</div>
				</section>
			</main>
			<Footer />
		</>
	)
}
