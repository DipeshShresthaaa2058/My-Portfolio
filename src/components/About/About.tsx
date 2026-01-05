import { Container } from "./styles";
import DipeshShrestha from "../../assets/DipeshShrestha.webp";
import autocad from "../../assets/autocad.png"
import excel from "../../assets/excel.png"
import etabs from "../../assets/etabs.png";

// import nodeIcon from "../../assets/node-icon.svg";
import sketchup from "../../assets/sketchup.png";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            Hi, I’m Dipesh — a civil engineer specializing in building design and construction. I’m passionate about creating structures that are not only functional and durable but also thoughtfully planned to meet the needs of both people and the environment.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            I focus on creating solutions that are not just efficient and safe, but also sustainable. For me, engineering is about making a real, lasting impact on the communities we serve.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
            I also work with CMS platforms like WordPress and Shopify to streamline content management.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={400}>
           <div className="education">
            <h3>Education:</h3>
            <h4> Bachelor's Degree in Civil Engineering (BCE)</h4>
            <p>Institute Of Engineering (IOE), TU </p>

          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={550}>
          <div className="experience">
            <h3>Experience:</h3><h4>CAD Designer</h4>
            <p>VIntuna Engineering Consult Private Limited</p>
            <p>Kathmandu, Nepal</p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.10 * 1000}>
              <img src={autocad} alt="Autocad" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.11 * 1000}>
              <img src={excel} alt="Excel" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={etabs} alt="ETABS" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={sketchup} alt="Sketchup" />
            </ScrollAnimation>
          </div>

        </div>
      </div>
      <div className="about-image"  >
        <ScrollAnimation animateIn="fadeInRight" delay={0.21 * 1000}>
          <img src={DipeshShrestha} alt="Dipesh Shrestha" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
