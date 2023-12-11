/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";
import { useStore } from "../store";

//components
import NavBar from '../Components/NavBar'
import SideBar from "../Components/SideBar";
import Footer from "../Components/Footer";

import loading from '../assets/loading.svg';
function RootLayout() {
    const mainStyles = {
        width: '100%',
        height:'100%',
        display:'flex',
    }

    const course = useStore((store) => store.courses[0]);
    const isLoading = useStore((store) => store.isLoading);
    console.log(course);

    return (
        <>
            <NavBar />
            {
                !isLoading ? 
                    <div style={mainStyles}>
                        <Outlet/>
                        <SideBar course={course} />
                    </div>
                    :
                    <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh'}}>
                        <img src={loading} alt="loading" />
                    </div>
            }
            <Footer/>
        </>
    );
}

export default RootLayout;