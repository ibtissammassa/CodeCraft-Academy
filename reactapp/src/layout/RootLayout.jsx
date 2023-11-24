import { Outlet } from "react-router-dom";

//components
import NavBar from '../Components/NavBar'

function RootLayout() {
    return (
        <>
            <NavBar />
            <Outlet/>
        </>
    );
}

export default RootLayout;