import { Outlet } from "react-router-dom";

//components
import NavBar from '../Components/NavBar'
import SideBar from "../Components/SideBar";
import Footer from "../Components/Footer";

function RootLayout() {
    const mainStyles = {
        width: '100%',
        height:'100vh',
        display:'flex',
    }
    return (
        <>
            <NavBar />
            <div style={mainStyles}>
                <SideBar/>
                <Outlet />
            </div>
            <Footer/>
        </>
    );
}

export default RootLayout;