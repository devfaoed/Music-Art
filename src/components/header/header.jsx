import "./header.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faTwitter, faFacebookSquare} from "@fortawesome/free-brands-svg-icons"
import {faWifi} from "@fortawesome/free-solid-svg-icons"

const Header = () => {
    return(
        <div className="header">
            <div className="headerdept">
                <div className="logo">
                    <div className="logoHeader" >
                        <h2>Music Art</h2>
                    </div>

                    <div className="logoIcon">
                        <div className="logoIcnn">
                            <span><FontAwesomeIcon icon={faTwitter}/> </span>
                            <span><FontAwesomeIcon icon={faFacebookSquare}/> </span>
                            <span><FontAwesomeIcon icon={faWifi}/> </span>
                        </div>
                    </div>
                </div>

                <div className="headerElement">
                    <h1 className="headerTitle"> Music Art</h1>
                    <p className="headerparagraph"> The Home of Music, Instruments and Music </p>
                </div>

                <div className="headerNavbar">
                    <ul>
                        <li>Home</li>
                        <li>Tag</li>
                        <li>Authur</li>
                        <li>Help</li>
                    </ul>

                    <div>
                        <button className="btn"> About </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header