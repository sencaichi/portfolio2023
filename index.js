class Home extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="container">
        <div class="navbar">
          <div class="container-nav-item button">
            About Me +
          </div>
          <div class="container-nav-item button">
            Projects +
          </div>
        </div>
        <div class="container-top" id="about-top">
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

customElements.define("loading-screen", Loading);
customElements.define("home-component", Home);

// i wanted to do it this way so that i'd only have one HTML element
// without using any frameworks
// could move this logic into their respective classes
var root = document.getElementById('root');
var loadingContainer = document.createElement("loading-screen", { is: "loading-screen" });
var container = document.createElement("home-component", { is: "home-component" });
root.append(loadingContainer)

window.addEventListener('load', () => {
  setTimeout(() => {
    loadingContainer.classList.add('hidden');
    root.appendChild(container);
    container.classList.add('visible');
  }, 1000);
})

const addContentOnClicks = () => {
  const content_buttons = document.getElementsByClassName('container-menu-item');
  Array.from(content_buttons).forEach((element, idx) => {
    element.addEventListener('click', (e) => {
      e.preventDefault();
      updateContentState(element,idx);
    })
  })

  const about_button = document.getElementById('about-button');
  console.log(about_button);
  if (about_button !== null) {
    about_button.addEventListener('click', () => {
      e.preventDefault();
      updateAboutMenuState();
    })
  }
}

const updateAboutMenuState = () => {
  const about = document.getElement
}
