import { useSelector } from 'react-redux'
import { Instagram, EmailOutlined } from '@mui/icons-material'
import ArALogo from '@/assets/images/ArALogo.svg'
import { StyledFooter } from './StyledFooter'

const Footer = () => {
    return (
        <StyledFooter>
            <img src={ArALogo.src} alt="Logo" className="logo" />
            <div className="social-icons">
                <a
                    className="icon"
                    target="_blank"
                    href="https://www.instagram.com"
                    rel="noopener noreferrer">
                    <Instagram />
                </a>
                <a
                    className="icon"
                    target="_blank"
                    href="mailto:test@example.com">
                    <EmailOutlined />
                </a>
            </div>
        </StyledFooter>
    )
}

export default Footer
