
let projectList = [
  {
    name: "Dawncore",
    image: "Dawncore/DawncoreThumbnail.jpg",
    altText: "",
    dates: "Oct 2024 - (Ongoing)",
    roles: "Programmer",
    description: "A UCI Capstone course project including collaborators from UCI's Video Game Development Club (VGDC). In this First-Person Shooter combining freedom of movement with the thrill of horde combat, your objective is to return the light (the Dawncore) to a kingdom enveloped by dark forces.",
    tags: ["Unreal Engine", "C++", "Team", "In development"],
    pageSource: "dawncore.html"
  },
  {
    name: "Build to Space",
    image: "BuildToSpace/BuildtoSpaceThumbnail.png",
    altText: "",
    dates: "Jan - June 2024",
    roles: "Project Lead & Programmer",
    description: "A sci-fi sandbox game I led and developed as part of UCI's Video Game Development Club. Build and pilot your very own spacecraft to escape post-apocalyptic Earth and begin your journey through space. Explore intricate procedurally generated caves to mine for materials, and defend against monsters using laser weapons.",
    tags: ["Unity", "C#", "Team"],
    pageSource: "build_to_space.html"
  },
  {
    name: "Coffee's Brew",
    image: "CoffeesBrew/CoffeesBrewThumbnail.png",
    altText: "A cat character holds an unbaked cupcake in a cafe kitchen, ready to place it in a nearby oven.",
    dates: "Oct 2021 - (Ongoing)",
    roles: "",
    description: "This ongoing personal project is a cooking and potion-brewing role-playing video game where you build and manage your own coffee shop while brewing magic potions to battle monsters.",
    tags: ["Unity", "C#", "In development"],
    pageSource: "coffees_brew.html"
  },
  {
    name: "Beep Boop's Puzzle Adventure",
    image: "BeepBoopPuzzle/BeepBoopPuzzleAnimatedThumbnail.gif",
    altText: "A robot stands on a button that is rotating a wire on the path between a battery and a lightbulb.",
    dates: "Oct - Dec 2022",
    roles: "Team Lead, Programmer",
    description: "An electricity-based top-down puzzle game I led and developed as part of UCI's Video Game Development Club. Control a maintenance robot to fix and return power to all of the lightbulbs!",
    tags: ["Unity", "C#", "Team"],
    pageSource: "beep_boop_puzzle.html"
  },
  {
    name: "Shrouded Moon",
    image: "ShroudedMoon/ShroudedMoonThumbnail.png",
    altText: "",
    dates: "Oct - Dec 2023",
    roles: "Programmer",
    description: "A Japanese folklore-inspired 2D action-platformer that I developed with other members of UCI's Video Game Design Club. This project allowed me to gain experience implementing simple AI and other features for game enemies.",
    tags: ["Unity", "C#", "Team"],
    pageSource: "shrouded_moon.html"
  },
  {
    name: "Wild Lasers",
    image: "WildLasers/WildLasersThumbnail.png",
    altText: "",
    dates: "April - June 2022",
    roles: "Team Lead, Programmer, Artist",
    description: "A wild west and sci-fi themed plaformer-shooter I led and developed as part of UCI's Video Game Design Club. Shoot your laser rifle to launch yourself through the air and defeat all enemies to get through the level!",
    tags: ["Unity", "C#", "Team"],
    pageSource: "wild_lasers.html"
  }
];

let tagColors = {
  "Unity": "#78b835",
  "C#": "#4E86DB",
  "Team": "#808080", 
  "Unreal Engine": "#b12bd6",
  "C++": "#4E86DB",
  "In development": "#ff6853" 
}

function createTag(tagName) {
  return `
    <div class="tag" style="background-color: ${tagColors[tagName]}">${tagName}</div>
  `;
}

function createTags(tagNames) {
  tags = ``;
  for (const tagName of tagNames) {
    tags += createTag(tagName);
  }
  return tags;
}

function createProjectCardStyle1(project) {
  return `
    <article class="project-card project-card-blue">
      <button class="img-button" onclick="window.location.href='${project.pageSource}'">
        <img src="${project.image}" alt="${project.altText}">
      </button>
      <div class="project-desc">
        <div>
          <h2>${project.name}</h2>
          <div class="tag-container">
            ${createTags(project.tags)}
          </div>
          <p>
            ${project.description}
          </p>
        </div>
        <div class="button-container">
          <button class="outline-button outline-button-blue hover-float" onclick="window.location.href='${project.pageSource}'">
            More Info →
          </button>
        </div>
      </div>
    </article>
  `;
}

function createProjectCardStyle2(project) {
  return `
    <article class="project-card project-card-gray">
      <div class="project-desc">
        <div>
          <h2>${project.name}</h2>
          <div class="tag-container">
            ${createTags(project.tags)}
          </div>
          <p>
            ${project.description}
          </p>
        </div>
        <div class="button-container">
          <button class = "outline-button outline-button-gray hover-float" onclick="window.location.href='${project.pageSource}'">
            More Info →
          </button>
        </div>
      </div>
      <button class="img-button" onclick="window.location.href='${project.pageSource}'">
        <img src="${project.image}" alt="${project.altText}">
      </button>
    </article>
  `;
}

const parentProjects = document.getElementById('project-list')
for (let i = 0; i < projectList.length; i++) {
  const tempContainer = document.createElement('div');
  
  if (i % 2 == 0) {
    tempContainer.innerHTML = createProjectCardStyle1(projectList[i]);
  }
  else {
    tempContainer.innerHTML = createProjectCardStyle2(projectList[i]);
  }

  parentProjects.appendChild(tempContainer);
}
