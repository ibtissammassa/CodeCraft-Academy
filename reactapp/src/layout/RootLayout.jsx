import { Outlet } from "react-router-dom";

//components
import NavBar from '../Components/NavBar'
import SideBar from "../Components/SideBar";

function RootLayout() {
    mainStyles = {
        width: '100%',
        display:'flex',
    }
    return (
        <>
            <NavBar />
            <div>
                <SideBar/>
                <Outlet />
            </div>
            <Footer/>
        </>
    );
}

export default RootLayout;