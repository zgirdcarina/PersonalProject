import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link, NavLink} from "react-router-dom";
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {
    faLinkedin,
    faGithub,
    faFacebook,
} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className="nav-bar">
        <Link className="logo" to="/">
            <img src={LogoS} alt="Logo"/>
            <img className="sub-logo" src={LogoSubtitle} alt="Carina"/>

        </Link>
        <nav>
            <NavLink  exact="true" activateclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink activeClassName="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
            </NavLink>
            <NavLink  activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a href="https://www.linkedin.com/in/carina-zgird-356645232/" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a href="https://github.com/zgirdcarina" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                </a>

            </li>
            <li>
                <a
                    href="https://www.facebook.com/carina.maria.3"
                    rel="noreferrer"
                    target="_blank"
                >
                    <FontAwesomeIcon icon={faFacebook} color="#4d4d4e" />
                </a>
            </li>
            {/*<li>*/}
            {/*    <a href="skype:live:bobangajicsm" rel="noreferrer" target="_blank">*/}
            {/*        <FontAwesomeIcon icon={faSkype} color="#4d4d4e" />*/}
            {/*    </a>*/}
            {/*</li>*/}
        </ul>
    </div>
)

export default Sidebar