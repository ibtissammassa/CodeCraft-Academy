/* eslint-disable react/prop-types */
import { Link,useLocation } from "react-router-dom";
import "../assets/css/SideBar.css";
import { useStore } from "../store";
import loading from '../assets/loading.svg';

function SideBar() {
    const course = useStore((store) => store.courses[0]);
    const isLoading = useStore((store) => store.isLoading);
    const location = useLocation();
    const pathParts = location.pathname.split("/"); // Split the path by "/"
    let quiz;
    if (pathParts[1] == "Quiz" || pathParts[1] == "Certificate") {
        quiz = true;
    }
    const chapterPart = pathParts[2]; // Get the part after the second "/"
    const chapterIndex = parseInt(chapterPart, 10); // Parse the chapter number as an integer

    if (!course || isLoading) {
        return (
            <div className="sidebar-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <img src={loading} alt="loading" />
            </div>
        )
    }
    return (
        <div className="sidebar-container">
            <h2 className="heading">{course ? course.title : 'loading ...'}</h2>
            <div className="chapters">
                <h3 className="subtitle">Chapters:</h3>
                <div>
                    {course && course.chapters && course.chapters.map((chapter, index) => (
                        <Link className={(index === chapterIndex - 1 && !quiz ? "active" : "") + ((index < chapterIndex - 1 || quiz) ? "done" : "")} to={`chapter/${index + 1}`} key={index}>
                            {
                                index < chapterIndex - 1 || quiz ?
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 20 20" fill="none">
                                        <path d="M7.44447 14C7.66669 14.3333 8.00002 14.4445 8.33336 14.4445C8.66669 14.4445 9.00002 14.3333 9.22224 14L14.2222 7.33334C14.5556 6.8889 14.4445 6.11112 14 5.77778C13.5556 5.44445 12.7778 5.55556 12.4445 6.00001L8.33336 11.4445L7.55558 10.4444C7.22224 10 6.44447 9.88889 6.00002 10.2222C5.55558 10.5556 5.44447 11.3333 5.7778 11.7778L7.44447 14Z" fill="#157AFE" />
                                        <path d="M10 20C15.5556 20 20 15.5556 20 10C20 4.44444 15.5556 0 10 0C4.44444 0 0 4.44444 0 10C0 15.5556 4.44444 20 10 20ZM10 2.22222C14.3333 2.22222 17.7778 5.66667 17.7778 10C17.7778 14.3333 14.3333 17.7778 10 17.7778C5.66667 17.7778 2.22222 14.3333 2.22222 10C2.22222 5.66667 5.66667 2.22222 10 2.22222Z" fill="#157AFE" />
                                    </svg> : 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 20 20" fill="none">
                                        <path d="M10 20C15.5556 20 20 15.5556 20 10C20 4.44444 15.5556 0 10 0C4.44444 0 0 4.44444 0 10C0 15.5556 4.44444 20 10 20ZM10 2.22222C14.3333 2.22222 17.7778 5.66667 17.7778 10C17.7778 14.3333 14.3333 17.7778 10 17.7778C5.66667 17.7778 2.22222 14.3333 2.22222 10C2.22222 5.66667 5.66667 2.22222 10 2.22222Z" fill="#1C1D1F" />
                                    </svg>
                            }
                            <p>{chapter.title}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SideBar;
