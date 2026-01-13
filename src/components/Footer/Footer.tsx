import { Container } from './styles'
import linkedin from '../../assets/linkedin.svg'
import whatsapp from '../../assets/whatsapp.svg'
import instagramIcon from '../../assets/instagram.svg'

export function Footer() {
  return (
    <Container className="footer">
      <div className="logo">
        <span>Dipesh</span>
        <span>Shrestha</span>
      </div>
      
      
      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/dipesh-shrestha-288aba266?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a
          href="https://wa.me/9823782824"
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsapp} alt="Whatsapp" />
        </a>
  
        <a
          href="https://www.instagram.com/dipeshhh_stha?igsh=MTNoODU1dmRkcjM0eQ==&utm_source=ig_contact_invite"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>
      </div>
    </Container>
  )
}
