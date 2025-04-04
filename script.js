const paragraphElement = document.querySelector(".js-slogan-paragraphs ");
const aboutMeParagraph = document.querySelector(".js-about-me");
const projectParagraph = document.querySelector(".js-project");

projectPage();

function projectPage() {
  const str = [
    "This is my project Page. Click on play to view video or the video title to view the code for my work.",
  ];

  let i = 0;
  let j = 0;
  let result = "";

  let paragraphLetters;

  if (projectParagraph) {
    paragraphLetters = setInterval(() => {
      result += str[i][j];
      projectParagraph.innerHTML = `
      <p>
      <span
      style="
        font-family: &quot;Courier New&quot;, Courier, monospace;
        display: flex;
        flex-direction: column;
      "
    >
    <strong><h2>Featured Projects</h2></strong>

      ${result}
    </span>
  </p>
    `;

      j++;

      if (str[i].length === result.length) {
        clearInterval(paragraphLetters);
      }
    }, 75);
  }
}

function aboutMe() {
  const str = [
    "Hi! I’m Sibonelo Shezi, a passionate front-end developer with an interest in sport, coding and chess. I love to create and innovate through code. Ambitious graduate with a diploma in Operations Management, eager to contribute developed knowledge in operations role. Skilled in data capturing, quality control, efficiency and effectiveness, inventory management, quality, cheese making and operator.",
  ];

  let i = 0;
  let j = 0;
  let result = "";

  let paragraphLetters;

  if (aboutMeParagraph) {
    paragraphLetters = setInterval(() => {
      result += str[i][j];
      aboutMeParagraph.innerHTML = `
      <span
      style="
        font-family: &quot;Courier New&quot;, Courier, monospace;
        display: flex;
        flex-direction: column;
        align-items: center;
        color:white;
      "
    >
      <h2 style = "color : white"><strong>About Me</strong></h2>
      ${result}
    </span>
  </p>
    `;

      j++;

      if (str[i].length === result.length) {
        clearInterval(paragraphLetters);
      }
    }, 75);
  }
}

aboutMe();

function homeFeature() {
  const str = ["Elevating potential, one project at a time"];

  let i = 0;
  let j = 0;
  let result = "";

  if (paragraphElement) {
    setInterval(() => {
      result += str[i][j];
      paragraphElement.innerHTML = `
      <p>
      <h1>
        <span
        style="
            font-family:
            Courier New,
            Courier,
            monospace;
        "
        >Welcome to My Portfolio</span
        >
  </h1>
        <span style='font-family: "Courier New", Courier, monospace'>
          ${result}
        </span>
      </p>
    `;

      j++;

      if (str[i].length === result.length) {
        result = "";
        j = 0;
      }
    }, 205);
  }
}

homeFeature();

let elementsPresent = false; // Global variable to persist state

function showNavElements() {
  const navContainer = document.querySelector(".js-navElements");

  if (!elementsPresent) {
    elementsPresent = true; // Update state

    let navSection = `
    <div class="nav-about-section">
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about_me.html">About</a></li>
        <li><a href="skills.html">Skills</a></li>
        <li><a href="projects.html">Projects</a></li>
        <li><a href="education.html">Education</a></li>
        <li><a href="experience.html">Experience</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </nav>
  </div>
    `;

    navContainer.innerHTML = navSection;
    document.querySelector(".js-button").innerHTML =
      `<button style= "padding: 8px" > <strong style = "width: 7px">x</strong></button>`;
  } else {
    elementsPresent = false; // Reset state
    navContainer.innerHTML = ""; // Hide navigation
    document.querySelector(".js-button").innerHTML =
      ` <button  style="padding: 2px; cursor: pointer ; border: none"> 
      <img style="width: 40px; " src="ThreeLinesIcon.png"/>
      </button>`;
  }
}
