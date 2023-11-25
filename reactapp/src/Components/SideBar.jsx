

function SideBar() {
    const containerStyles = {
        position: 'absolute',
        right: '0',
        borderLeft: '1px solid #E5E5E5',
        width: '25%',
        height: '100vh',
        zIndex: '1',
        padding: '20px',
    }

    const headingStyles = {
        fontSize: '20px',
        marginBottom: '17px',
    }

    const chaptersStyles = {
        background: 'rgba(21, 122, 254, 0.19)',
        boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.24)',
        borderRadius: '3px',
        padding: '10px 15px',
    }

    const subtitleStyles = {
        fontSize: '16px',
    }
    return (
        <div style={containerStyles}>
            <h2 style={headingStyles}>Mastering .NET Development</h2>
            <div style={chaptersStyles}>
                <h3 style={subtitleStyles}>chapters :</h3>
            </div>
        </div>
    );
}

export default SideBar;