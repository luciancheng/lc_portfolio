const Contact = () => {
    return ( 
        <div className="contact" id="contact">
            <h1>Contact</h1>
            <div className="seperator"></div>
            <div className="contact-container">
                <div className="contact-desc">
                    <h3>Let's Connect!</h3>
                    Thank you for your interest in getting in touch with me! I welcome all feedback and any prosperous career opporunities. I have linked my socials and contact information to this section. I usually respond within 24 hours. Thank you again for your itnerest and I am looking forward to hearing from you!
                </div>
                <div className="contact-socials-container">
                    <a href="https://github.com/luciancheng" className="contact-social"  target="_blank" rel="noreferrer">
                        <i className="fa-2x fa-brands fa-github contact-social-img"></i>
                        <p className="contact-social-text">github.com/luciancheng</p>
                    </a>
                    <a href="https://www.linkedin.com/in/luciancheng/" className="contact-social"  target="_blank" rel="noreferrer">
                        <i className="fa-2x fa-brands fa-linkedin contact-social-img"></i>
                        <p className="contact-social-text">linkedin.com/in/luciancheng/</p>
                    </a>
                    <a href="/" className="contact-social"  target="_blank" rel="noreferrer">
                        <i className="fa-2x fa-solid fa-envelope contact-social-img"></i>
                        <p className="contact-social-text">luciancheng3@gmail.com</p>
                    </a>
                    <a href="/" className="contact-social"  target="_blank" rel="noreferrer">
                        <i className="fa-2x fa-solid fa-phone contact-social-img"></i>
                        <p className="contact-social-text">+1 &#40;647&#41;-919-8636</p>
                    </a>
                </div>
            </div>
        </div>
     );
}
 
export default Contact;