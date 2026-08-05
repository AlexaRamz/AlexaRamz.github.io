import NavBar from '../components/NavBar.jsx';
import ProjectHeader from '../components/ProjectHeader.jsx';
import Footer from '../components/Footer.jsx'
import { createTagsContainer } from '../components/ProjectTag.jsx';
import CoffeesBrewBuilding from '../assets/CoffeesBrew/CoffeesBrewBuilding.png';
import CoffeesBrewCooking from '../assets/CoffeesBrew/CoffeesBrewCooking.png';
import CoffeesBrewDialogue from '../assets/CoffeesBrew/CoffeesBrewDialogue.png';
import CoffeesBrewShop from '../assets/CoffeesBrew/CoffeesBrewShop.png';
import { coffeesBrewData } from '../data.js';

const linkButtonsData = [
	{ buttonText: "Play", externalLink: coffeesBrewData.playLink },
];

export default function CoffeesBrew()
{
	return (
		<>
			<NavBar />
			<ProjectHeader title={"Coffee's Brew"} subTitle="Potion-brewing RPG" linkButtons={linkButtonsData} />

			<main className="project-sections">
				<section>
					<div className="video-container">
						<iframe src="https://drive.google.com/file/d/1ZVRdQIiSMTh0i7npFhlve0aL61Q_YQVM/preview" allow="autoplay"></iframe>
					</div>
					<div>
						<h2>Make coffee... and potions?</h2>
						<p>
							As the owner of a charming cafe, your days are filled with more than just coffee. Uncover the secrets of potion-brewing as you prepare delicious treats for a colorful cast of customers and defend your village from menacing monsters. This ongoing passion project is an RPG blending shop management, cooking, magic, and combat.
						</p>
					</div>
				</section>
				<section>
					<div>
						{createTagsContainer(coffeesBrewData.tags)}
						<p>
							A personal passion project
							<ul>
								<li><b>Software: </b>Unity, C#, Github</li>
								<li><b>Genres: </b>Role-playing, Cooking, Interior design</li>
								<li><b>Dates: </b>Sept 2021 - Ongoing</li>
							</ul>
						</p>
					</div>
				</section>
				<hr/>
				<section>
					<div>
						<h2>What I've Accomplished</h2>
						<h5>Interior customization</h5>
						<ul>
							<li>
								Developed a scalable building system allowing players to choose from an expandable selection of furniture, appliances, and decor to customize a grid-based Interior
								<ul>
									<li>Utilized Unity's scriptable objects to store information about buildables</li>
								</ul>
							</li>
							<li>Ensured a fast editing experience for players with useful features such as performing a dragging action to place or select multiple buildables at a time</li>
						</ul>
					</div>
					<img src={CoffeesBrewBuilding} alt="" />
				</section>
				<section>
					<div>
						<img src={CoffeesBrewShop} alt="" />
						<img src={CoffeesBrewCooking} alt="" />
					</div>
					<div>
						<h5>Interaction</h5>
						<ul>
							<li>Created a flexible interaction system enabling players to interact with the world through either button presses or clicks on objects</li>
							<li>Leveraged C# interfaces to allow for the easy addition of new interactive objects with unique functionalities</li>
							<li>Currently, players can interact with crafting tables, ovens, doors, storage barrels, shop stands, and even place items on tables and countertops</li>
						</ul>
						<h5>Inventory management</h5>
						<ul>
							<li>Implemented a system for players to collect, store, and utilize a variety items including ingredients, foods, and drinks</li>
							<li>Players can rearrange their inventory for quick and easy access to essential items</li>
						</ul>
					</div>
				</section>
				<section>
					<div>
						<h5>NPC dialogue</h5>
						<ul>
							<li>Implemented a system allowing players to engage in immersive dialogue with non-player characters (NPCs)</li>
							<li>Players actively participate conversations by selecting from a variety of responses to steer the dialogue</li>
						</ul>
						<h5>Other</h5>
						<ul>
							<li>Conceptualized and refined the game's mechanics, visual style, user interfaces, and narrative</li>
							<li>Created pixel art assets for characters, animations, items, environments, and user interface graphics</li>
						</ul>
					</div>
					<img src={CoffeesBrewDialogue} alt="" />
				</section>
				<hr/>
				<section>
					<div>
						<h2>Background</h2>
						<p>
							&emsp;My love for creating characters began in my teenage years. I would draw adorable animal characters with outfits and personalities based on unique themes like desserts, beverages, and the seasons. When I stumbled upon the enchanting world of farming RPG <i>Stardew Valley</i>, I was inspired to create my own game where my characters and their stories could come to life.
						</p>
						<p>
							&emsp;I envisioned a cozy autumn village in a vibrant pixel art style. Here, the player takes on the role of Coffee, an adventurous cat and secret witch who inherits her parents' cafe. Similar to Stardew Valley, I hope to create gameplay that is both relaxing and challenging so as to appeal to many types of players. You'll engage in the comforting routine of farming ingredients and baking treats, while also embarking on thrilling adventures to hunt down rare potion ingredients and battle monsters — all while keeping your magical identity under wraps from the townsfolk.
						</p>
					</div>
				</section>
			</main>
			<Footer />
		</>
	)
}