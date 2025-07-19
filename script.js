const projects = [
    {
      title: "Portfolio Site",
      description: "Built using HTML, CSS, and JavaScript. Deployed via GitHub Pages.",
      link: "https://nashcharles.github.io/portfolio-site/"
    },
    {
      title: "Simple Calculator",
      description: "A JavaScript-based calculator demonstrating DOM manipulation and event handling.",
      link: "#" // replace with real link later
    },
    {
      title: "Password Strength Checker",
      description: "A tool that evaluates password strength using JavaScript.",
      link: "#" // replace with real link later
    }
  ];
  
  const projectList = document.getElementById("project-list");
  
  projects.forEach(project => {
    const card = document.createElement("div");
    card.classList.add("project-card");
  
    card.innerHTML = `
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <a href="${project.link}" target="_blank" rel="noopener noreferrer">View Project</a>
    `;
  
    projectList.appendChild(card);
  });