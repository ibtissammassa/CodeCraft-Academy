/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";

//components
import NavBar from '../Components/NavBar'
import SideBar from "../Components/SideBar";
import Footer from "../Components/Footer";

function RootLayout({courses}) {
    const mainStyles = {
        width: '100%',
        height:'100%',
        display:'flex',
    }

    const course = courses.length > 0 ? courses[0] : null;
    console.log(course);

    return (
        <>
            <NavBar />
            <div style={mainStyles}>
                <SideBar course={course} />
                <Outlet />
            </div>
            <Footer/>
        </>
    );
}

export default RootLayout;