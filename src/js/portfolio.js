import { marked } from "marked";
import customHeadingId from "marked-custom-heading-id";
//ya know, I really love marked.

marked.use({
  gfm: true,
},customHeadingId());

// markdown content
import dashboardMD from "../content/dashboard.md";
import skillsMD from "../content/skills.md";
import testimonialsMD from "../content/testimonials.md";

//yeeeaaaaahhh im gonna change that later.
import FluentSCSS from "../content/projects/FluentSCSS.md";


const projectsMD = [FluentSCSS];

const dashboard    = document.getElementById("dashboard");
const skills       = document.getElementById("skills");
const projects     = document.getElementById("projects");
const testimonials = document.getElementById("testimonials");
const content      = document.getElementById("content");

// default
content.innerHTML = marked(FluentSCSS);

dashboard.addEventListener("click", () => {
  content.innerHTML = marked(dashboardMD);
});

skills.addEventListener("click", () => {
  content.innerHTML = marked(`${skillsMD} {#work-in-progress}`);
});

projects.addEventListener("click", () => {
  const projectsList = document.getElementById('projects-list');
  projectsList.classList.toggle("active");
});

testimonials.addEventListener("click", () => {
  content.innerHTML = marked(`${testimonialsMD} {#work-in-progress}`);
});

