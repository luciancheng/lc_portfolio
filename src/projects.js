import ProjectTemplate from "./projectTemplate";
import pacemaker from "./images/pacemaker.jpg";
import cart from "./images/cartcenter.png";
import embeddedsystem from "./images/embeddedsystem.png";
import nadinamachina from "./images/nadinamachina.jpg";
import webdev from "./images/webdev.jpg";
import dimplecircuit from "./images/dimplecircuit.png";

const Projects = () => {
    const projects = [
    {title: "Portfolio Website", desc: "Built a React JS portoflio website to display my experiences and projects in a visually appealing manner", skills: ["html", "css", "js", "react"], links: "https://", img: webdev},
    {title: "Smart Baby Monitor Device", desc: "Developed a prototype and verification plan for a smart baby monitor device to process frequencies of cries to detect the issue. Built with a filter circuit, Python and a MongoDB AWS database.", skills: ["python", "mongodb", "aws"], links: "https://", img: dimplecircuit}, 
    {title: "Embedded Systems Design", desc: "Developed many embedded systems circuits using a microcontroller and actuators built with circuit components and logic", skills: ["cpp"], links: "https://github.com/luciancheng/Cpp-Projects/tree/main/Embedded-Systems", img: embeddedsystem},
    {title: "Pacemaker Project", desc: "Created a pacemaker medical device with a Python Tkinter GUI and physical device. The GUI displayed graph data  and allowed for modificaiton of control variables and parameters.", skills: ["python"], links: "https://github.com/luciancheng/PacemakerProject", img: pacemaker},
    {title: "Genetic Programming Cart", desc: "Implementation of cross generational program self mutations to achieve the best equation for solving the cart centering problem using binary trees.", skills: ["cpp"], links: "https://github.com/luciancheng/Cpp-Projects/tree/main/genetic_programming", img: cart},
    {title: "Arm Exerciser Device", desc: "Developed a device for my patient with multiple sclerosis to help her regain functionality in her arm by implementing an app that communicates with sensors and actuators.", skills: ["python"], links: "https://github.com/luciancheng/Python-Projects/tree/main/Design%20Projects/Design%20Project%204%3A%20Nadina%20Machina", img: nadinamachina}
]
    return ( 
        <div className="projects" id="projects">
            <h1>Projects</h1>
            <div className="seperator"></div>
            <div className="project-container">
                {projects.map((proj) => (
                    <ProjectTemplate project={proj}/>
                ))}
            </div>
        </div>
     );
}
 
export default Projects;