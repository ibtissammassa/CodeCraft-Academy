

function Footer() {
    const barStyles = {
        width: '100%',
        height: '40px',
        background: 'var(--primary-color, #157AFE)',
        boxShadow: '0px 2px 6px 0px rgba(0, 0, 0, 0.25)',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
    }

    const headingStyles = {
        color: 'var(--primary-color)',
        fontSize: '17px',
        marginBottom: '14px',
    }

    const containerStyles = {
        position: 'absolute',
        top: '100%',
        borderTop: '1px solid #E5E5E5',
        zIndex: '10',
    }

    const mainStyles = {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        padding: '30px 45px'
    }

    const aboutStyles = {
        width: '50%',
    }

    const liStyles = {
        listStyle: 'none',
    }
    return (
        <div style={containerStyles}>
            <div style={mainStyles}>
                <div style={aboutStyles}>
                    <h3 style={headingStyles}>About Us</h3>
                    <p>Welcome to E-learning, your gateway to comprehensive tech education. We are passionate about fostering a community-driven learning environment where individuals from all backgrounds can expand their knowledge horizons. With an array of meticulously crafted courses and a commitment to providing cutting-edge content, we aim to equip you with the skills needed to thrive in today's digital landscape. Let's embark on this educational journey together and unlock your potential!</p>
                </div>
                <div>
                    <h3 style={headingStyles}>Quick Links</h3>
                    <ul>
                        <li style={liStyles}>Home</li>
                        <li style={liStyles}>Course</li>
                        <li style={liStyles}>Blog</li>
                        <li style={liStyles}>Contact</li>
                    </ul>
                </div>
                <div>
                    <h3 style={headingStyles}>Connect With Us</h3>
                    <ul>
                        <li style={liStyles}>info@yourcompany.example.com</li>
                        <li style={liStyles}>+1(450) 999-1111</li>
                    </ul>
                </div>
            </div>
            <div style={barStyles}>
                <p>&copy; 2023 E-Learning All rights reserved.</p>
            </div>
        </div>
    );
}

export default Footer;