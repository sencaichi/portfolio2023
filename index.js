class Home extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="container">
        <div class="navbar">
        <button class="container-nav-item button" id="about-button">
        About Me +
      </button>
      <button class="container-nav-item button" id="projects-button">
       Project +
      </button>
        </div>
        <div id="about-top">
          <div id="name">
            Your Name
          </div>
          <div id="about-undertitle">
            Here's a little bit about me.
          </div>
          <div id="about-maintext">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </div>
    `;

    this.querySelector("#about-button").addEventListener('click', () => {
      projectContainer.classList.remove('visible');
      projectContainer.classList.add('hidden');
      homeContainer.classList.add('visible');
      homeContainer.classList.remove('hidden');
    });

    this.querySelector("#projects-button").addEventListener('click', () => {
      homeContainer.classList.remove('visible');
      homeContainer.classList.add('hidden');
      root.appendChild(projectContainer);
      projectContainer.classList.add('visible');
    });
  }
}

class Loading extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div id="loading-screen">
      <div id="custom-loading-animation"></div>
      </div>
    `
  }
}

class Projects extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="container">
        <div class="navbar">
        <button class="container-nav-item button" id="about-button">
        About Me +
      </button>
      <button class="container-nav-item button" id="projects-button">
       Project +
      </button>
        </div>
        <div id="about-top">
          <div id="name">
            Projects
          </div>
          <div id="about-undertitle">
            Here are some of the projects I've worked on.
          </div>
          <div id="about-maintext">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </div>
    `;

    this.querySelector("#about-button").addEventListener('click', () => {
      projectContainer.classList.remove('visible');
      projectContainer.classList.add('hidden');
      homeContainer.classList.add('visible');
      homeContainer.classList.remove('hidden');
    });

    this.querySelector("#projects-button").addEventListener('click', () => {
      homeContainer.classList.remove('visible');
      homeContainer.classList.add('hidden');
      projectContainer.classList.add('visible');
      projectContainer.classList.remove('hidden');
    });
  }
}

customElements.define("loading-screen", Loading);
customElements.define("home-component", Home);
customElements.define("project-component", Projects)

// i wanted to do it this way so that i'd only have one HTML element
// without using any frameworks
// could move this logic into their respective classes
var root = document.getElementById('root');
var loadingContainer = document.createElement("loading-screen", { is: "loading-screen" });
var homeContainer = document.createElement("home-component", { is: "home-component" });
var projectContainer = document.createElement("project-component", { is: "project-component" });
root.append(loadingContainer)

window.addEventListener('load', () => {
  setTimeout(() => {
    loadingContainer.classList.add('hidden');
    root.appendChild(homeContainer);
    homeContainer.classList.add('visible');
  }, 1000);
})
