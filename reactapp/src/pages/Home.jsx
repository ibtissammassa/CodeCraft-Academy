/* eslint-disable react/prop-types */
import '../assets/css/Home.css'
import stars from '../assets/stars.svg';
import share from '../assets/fi_share.svg';
import time from '../assets/Time.svg'
import user from '../assets/User.svg'
import world from '../assets/World.svg'
import { Link } from 'react-router-dom';
function Home({ course }) {

    const courseInfos = [
        {
            "element": "Creator",
            "value": course && course.creator,
            "icon": user,
        },
        {
            "element": "Uploaded On",
            "value": "13/12/2023",
            "icon": share,
        },
        {
            "element": "Duration",
            "value": course && course.duration + " Weeks",
            "icon": time,
        },
        {
            "element": "Language",
            "value": "English",
            "icon": world,
        },
    ]
    return (
        <div className="container">
          <h1>{course ? (course.title) : "loading"} </h1>
          <img src={stars} />
          <p>{course ? (course.description) : "loading"}</p>
            {
                course && course.chapters && course.chapters.map((chapter, index) => (
                    <div key={index}>
                        <h2><span>Chapter {index + 1}: </span><Link to={`chapter/${index +1}`}>{chapter.title}</Link></h2>
                        <ul>
                            {
                                chapter.chapterPoints && chapter.chapterPoints.split('+').map((point, index) => (
                                    <li key={index}>{point}</li>
                                ))
                            }
                        </ul>
                    </div>
                ))
            }
            <div className="infosContainer">
                {courseInfos.map((item, index) => (
                    <div key={index}>
                        <img src={item.icon} />
                        <h3>{item.element}: <span>{item.value}</span></h3>
                    </div>
                ))}
            </div>
        </div>
  );
}

export default Home;