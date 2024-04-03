import { COM_LOGO } from "../utils/constants";

const Header = () => {
    return(
        <div className="header">
            <div className="logo-container">
                <div className="logo">
                    <img src={COM_LOGO} />
                </div>
            </div>
            <div className="nav-items">
                <ul>
                    <li><a href="#">Search</a></li>
                    <li><a href="#">Offers</a></li>
                    <li><a href="#">Cart</a></li>
                    <li><a href="#">Sign In</a></li>
                    <li><a href="#">Cart</a></li>
                    
                </ul>
            </div>
        </div>
    );
};

export default Header;