import logo from '../assets/E-learning.svg';
import SearchBar from './UI/SearchBar';
import { Link } from 'react-router-dom';
import '../assets/css/Navbar.css'; // Import the CSS file

function Navbar() {
    return (
        <div className="navbar-container">
            <div className="top-bar">
                <Link to="/" className="logo-container">
                    <img src={logo} alt="Logo" />
                </Link>
                <SearchBar />
            </div>
            <div className="bar">
                <p>Home</p>
                <p>My Courses</p>
                <p>Contact Us</p>
            </div>
        </div>
    );
}

export default Navbar;