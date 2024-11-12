
let projectList = [
  {
    name: "Build to Space",
    image: "BuildtoSpaceThumbnail.png",
    altText: "",
    dates: "Jan - June 2024",
    roles: "Project Lead & Programmer",
    description: "A sci-fi sandbox game I led and developed as part of UCI's Video Game Development Club. Build and pilot your very own spacecraft to escape post-apocalyptic Earth and begin your journey through space. Explore intricate procedurally generated caves to mine for materials, and defend against monsters using laser weapons."
  },
  {
    name: "Coffee's Brew",
    image: "CoffeesBrewThumbnail.png",
    altText: "A cat character holds an unbaked cupcake in a cafe kitchen, ready to place it in a nearby oven.",
    dates: "Oct 2021 - (Ongoing)",
    roles: "",
    description: "This ongoing personal project is a cooking and potion-brewing role-playing video game where you build and manage your own coffee shop while brewing magic potions to battle monsters."
  },
  {
    name: "Beep Boop's Puzzle Adventure",
    image: "BeepBoopPuzzleAnimatedThumbnail.gif",
    altText: "A robot stands on a button that is rotating a wire on the path between a battery and a lightbulb.",
    dates: "Oct - Dec 2022",
    roles: "Team Lead, Programmer",
    description: "An electricity-based top-down puzzle game I led and developed as part of UCI's Video Game Development Club. Control a maintenance robot to fix and return power to all of the lightbulbs!"
  }
];

function createProjectCardStyle1(project) {
  return `
    <article class="project-card project-card-blue">
      <img src="${project.image}" alt=${project.altText}>
      <div class="project-desc">
        <div>
          <h2>${project.name}</h2>
          <div class="tag-container">
            <div class="tag" style="background-color: #678E45">C#</div>
            <div class="tag" style="background-color: #4E86DB">Unity</div>
          </div>
          <p>
            ${project.description}
          </p>
        </div>
        <div class="button-container">
          <button class = "outline-button outline-button-blue hover-float" onclick="window.location.href='buildtospace.html'">
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
            <div class="tag" style="background-color: #678E45">C#</div>
            <div class="tag" style="background-color: #4E86DB">Unity</div>
          </div>
          <p>
            ${project.description}
          </p>
        </div>
        <div class="button-container">
          <button class = "outline-button outline-button-gray hover-float" onclick="window.location.href='buildtospace.html'">
            More Info →
          </button>
        </div>
      </div>
      <img src="${project.image}" alt=${project.altText}>
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