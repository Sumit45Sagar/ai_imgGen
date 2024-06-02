

import { useContext } from "react";
import PointsContext from "../../../context/pointsContext.js";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = (props) => {
    const contextValues = useContext(PointsContext);
    const page = props.page;

    const customColor = (currentPage) => {
        return { color: page === currentPage ? 'red' : 'white' };
    }

    return (
        <div className='header-parent-container'>
            <div className='left'>
                <Link to="/" style={customColor('home')}>Home</Link>
                <Link to='/image-generator' style={customColor('image-generator')}>Image Generator</Link>
                <Link to='/history' style={customColor('history')}>History</Link>
                <Link to='/contactus' style={customColor('contactus')}>Contact Us</Link>
                <Link to='/help' style={customColor('help')}>Help</Link>
                <Link to="/signup" style={customColor('signup')}>Signup</Link>
            </div>  
            <div className="right" style={{ padding: '4px', color: 'brown' }}>
                {contextValues.userPoints}
            </div> 
            {contextValues.isLoggedIn?
                <button onClick={contextValues.logout}>Logout</button>
                :<button onClick={contextValues.login}>Login</button>
            }
        </div>
    );
}

export default Navbar;
