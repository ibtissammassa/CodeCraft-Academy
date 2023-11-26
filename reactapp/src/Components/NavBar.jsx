import logo from '../assets/E-learning.svg'
import SearchBar from './UI/SearchBar';
import {Link } from "react-router-dom"; 

function Navbar() {
    const containerStyles = {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
    };

    const topBarStyles = {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        padding: '20px 35px'
    }

    const barStyles = {
        width: '100%',
        height:'30px',
        background: 'var(--primary-color, #157AFE)',
        boxShadow: '0px 2px 6px 0px rgba(0, 0, 0, 0.25)'
    }

    const logoContainerStyles = {
        display: 'flex',
        alignItems: 'center'
       
    }
    return (
        <div style={containerStyles}>
            <div style={topBarStyles}>
                <Link style={logoContainerStyles} to="/"><img src={logo} alt="Logo" /></Link>
                <SearchBar />
            </div>           
            <div style={barStyles}></div>
        </div>
    );
}

export default Navbar;