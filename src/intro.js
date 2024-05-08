import LinkedIN_black from './images/LinkedIN_black.png';
import Github_black from './images/Github_black.png'

const Intro = () => {
    const techStack = ['python', 'c', 'cpp', 'js', 'html', 'css'];
        return (  
        <div className="intro">
            <div className="intro-section">
                <div className="intro-section2">
                    <div className="intro-greeting">
                        Hi, I'm Lucian Cheng!
                    </div>
                    <div className="intro-background">
                        Transforming concepts into reality through software, machine learning, and engineering principles, shaping innovative solutions.
                    </div>
                    <div className="intro-links">
                        <a className="intro-link-images" href="https://github.com/luciancheng" target="_blank" rel="noreferrer">
                            <img src={Github_black} alt="github"/>
                        </a>
                        <a className="intro-link-images" href="https://www.linkedin.com/in/luciancheng/" target="_blank" rel="noreferrer">
                            <img src={LinkedIN_black} alt="linkedin"/>
                        </a>
                    </div>
                    <div className="intro-tech-stack">
                        <div>
                            <h3>Tech Stack | </h3>
                        </div>
                        {techStack.map((lang) => (
                            <div>
                                <i className={`ci ci-${lang} ci-3x`}></i>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="profile-picture"></div>
        </div>
    );
}
 
export default Intro;