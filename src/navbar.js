import LCLogo from './images/LCLogo.png';

const NavBar = () => {
    return ( 
        <nav className="navbar" id="home">
        <img src={LCLogo} alt="Lucian Cheng Logo"></img>
        <div className="links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
        </div>
        </nav>
     );
}
 
export default NavBar;