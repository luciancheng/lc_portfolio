import mcmaster from "./images/mcmaster.jpg";
import resume from "./files/LC_resume.pdf";

const About = () => {
    const technologies = [{src: 'https://img.shields.io/badge/PyTorch-%23EE4C2C.svg?style=for-the-badge&logo=PyTorch&logoColor=white', alt: 'pytorch', id: 1},
    {src: 'https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB', alt: 'react', id: 2},
    {src: 'https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white', alt: 'mongodb', id: 3},
    {src: 'https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white', alt: 'numpy', id: 4},
    {src: 'https://img.shields.io/badge/.NET-5C2D91?style=for-the-badge&logo=.net&logoColor=white', alt: '.net', id: 5},
    {src: 'https://img.shields.io/badge/-Arduino-00979D?style=for-the-badge&logo=Arduino&logoColor=white', alt: 'arduino', id: 6},
    {src: 'https://img.shields.io/badge/-RaspberryPi-C51A4A?style=for-the-badge&logo=Raspberry-Pi', alt: 'reaspberry pi', id: 7},
    {src: 'https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white', alt: 'figma', id: 8},
    {src: 'https://img.shields.io/badge/CMake-%23008FBA.svg?style=for-the-badge&logo=cmake&logoColor=white', alt: 'cmake', id: 9}];
    
    return ( 
        <div className="about" id="about">
            <h1>About</h1>
            <div className="seperator"></div>
            <div className="about-div">
                <div className="about-info">
                    <ul>
                        <li>Mechatronics and Biomedical Engineering Student at McMaster University 📚</li>
                        <li>Richmond Hill, Ontario, Canada 📍</li>
                        <li>Using my background in software, electrical, mechanical, and biomedical engineering to drive innovative solutions 💻</li>
                        <li>Experience working individually and in teams to complete small and large scale projects ⚙</li>
                    </ul>
                    <br></br>
                    <div className="about-framework-libs">
                        <h3>Frameworks/Libraries | </h3>
                        {technologies.map((tech) => (
                            <img src={tech.src} alt={tech.alt}></img>
                        ))}
                    </div>
                    <div className="about-buttons">
                        <a href={resume} target="_blank" rel="noreferrer">View Resume</a>
                    </div>
                </div>
                <div className="about-image" style={{backgroundImage: `url(${mcmaster})`}}></div>
            </div>
        </div>
     );
}
 
export default About;