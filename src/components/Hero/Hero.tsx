import { BrowserRouter } from "react-router-dom"
import { Container } from "./styles"
import ScrollAnimation from "react-animate-on-scroll"
import civil from "../../assets/civil.png"
import { NavHashLink } from "react-router-hash-link"
import linkedin from '../../assets/linkedin.svg'
import instagram from '../../assets/instagram.svg'
import whatsapp from '../../assets/whatsapp.svg'
import Hello from '../../assets/Hello.gif'

export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <p>Hello <img src={Hello} alt="Hello" width="20px"/>, I'm</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <h1>Dipesh Shrestha</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <h3>Civil Engineer</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <p className="small-resume">1 Year Experience</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
          <BrowserRouter>
            <NavHashLink smooth to="#contact" className="button">Contact</NavHashLink>
          </BrowserRouter>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={1 * 1000}>
      <div className="social-media"><a
        href="https://www.linkedin.com/in/dipesh-shrestha-288aba266?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkedin} alt="Linkedin" />
      </a>
        <a
          href="https://www.instagram.com/dipeshhh_stha?igsh=MTNoODU1dmRkcjM0eQ==&utm_source=ig_contact_invite"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagram} alt="Instagram" />
        </a>
        <a
          href="https://wa.me/9823782824"
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsapp} alt="Whatsapp" />
        </a>
    </div>
        </ScrollAnimation>
      </div>
      <div className="hero-image" id="logo">
        <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
          <img src={civil} alt="civil" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}