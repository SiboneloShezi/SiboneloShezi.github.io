let elementsPresent = false; // Global variable to persist state

function showNavElements() {
  const navContainer = document.querySelector(".js-navElements");

  if (!elementsPresent) {
    elementsPresent = true; // Update state

    let navSection = `
    <div class="nav-about-section">
      <nav>
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
  } else {
    elementsPresent = false; // Reset state
    navContainer.innerHTML = ""; // Hide navigation
  }
}
