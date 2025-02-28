function showNavElements() {
  navSection = `
    <div class="nav-about-section">
    <nav>
        <ul>
        <li>
            <a href="website.html"> Home</a>
        </li>
        <li>
            <a href="about_me.html">About</a>
        </li>

        <li>
            <a href="skills.html">Skills</a>
        </li>
        <li>
            <a href="projects.html">Projects</a>
        </li>
        <li>
            <a href="education.html">Education</a>
        </li>
        <li>
            <a href="experience.html">Experience</a>
        </li>
        <li>
            <a href="#contact">Contact</a>
        </li>
        </ul>
    </nav>
    </div>
    `;
  document.querySelector(".js-navElements").innerHTML = navSection;
}
