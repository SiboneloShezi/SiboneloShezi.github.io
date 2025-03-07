const paragraphElement = document.querySelector(".js-slogan-paragraphs");

const str = ["Elevating potential, one project at a time"];

let i = 0;
let j = 0;
let result = "";

if (paragraphElement) {
  setInterval(() => {
    result += str[i][j];
    paragraphElement.innerHTML = `
      <p>
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
