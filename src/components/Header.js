import "./Header.css";
import { Link } from "react-router-dom";
function Header(){
    return(
        <div>
            
            <div className="header">
                <Link to="/">HOME</Link>
                <span className="mt-3">
                    SELL & PURCHASE ONLINE ... In your City
                </span>
                <Link to="/login">LOGIN</Link>
            </div>
        </div>    
    )
}

export default Header;
