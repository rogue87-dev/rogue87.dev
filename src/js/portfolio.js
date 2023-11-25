import dashboardHTML from "../content/dashboard.md";
import skillsHTML from "../content/skills.md";
import testimonialsHTML from "../content/testimonials.md";

//yeeeaaaaahhh im gonna change that later.
import FluentSCSS from "../content/projects/FluentSCSS.md";
const projectsHTML = [FluentSCSS];



const dashboard    = document.getElementById("dashboard");
const skills       = document.getElementById("skills");
const projects     = document.getElementById("projects");
const testimonials = document.getElementById("testimonials");
const content      = document.getElementById("content");

// default
content.innerHTML = dashboardHTML;

dashboard.addEventListener("click", () => {
  content.innerHTML = dashboardHTML;
});

skills.addEventListener("click", () => {
  content.innerHTML = skillsHTML;
});

projects.addEventListener("click", () => {
  const list = document.querySelector('.inner-list')
  if(projects.classList.contains("expanded")){
    projects.classList.remove("expanded")
    list.classList.remove("inner-list--expanded");
  }
  else{
    projects.classList.add("expanded")
    list.classList.add("inner-list--expanded");
  }
});

testimonials.addEventListener("click", () => {
  content.innerHTML = testimonialsHTML;
});
