import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import { useState, useEffect } from "react";
//layouts
import RootLayout from "./layout/RootLayout";

//pages
import Home from "./pages/Home";
import Chapter from "./pages/Chapter";
/*
import NotFound from "./pages/NotFound";*/

function App() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        // Fetch courses
        fetch('/Elearning/GetCourses')
            .then(response => response.json())
            .then(courseData => {
                // Map through courses and create an array of promises for fetching chapters
                const fetchChaptersPromises = courseData.map(course => {
                    return fetch(`/Elearning/GetChaptersForCourse/${course.courseId}`)
                        .then(response => response.json())
                        .then(chaptersData => {
                            // Add fetched chapters to the current course
                            course.chapters = chaptersData;
                            return course;
                        })
                        .catch(error => {
                            console.error(`Error fetching chapters for course ${course.courseId}:`, error);
                        });
                });

                // Resolve all promises for fetching chapters
                Promise.all(fetchChaptersPromises)
                    .then(updatedCourses => {
                        // Update courses state with chapters added to each course
                        setCourses(updatedCourses);
                    })
                    .catch(error => {
                        console.error('Error fetching chapters:', error);
                    });
            })
            .catch(error => {
                console.error('Error fetching courses:', error);
            });
    }, []);


    console.log(courses);

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<RootLayout courses={courses} />}>
                <Route index element={<Home course={courses.length > 0 ? courses[0] : null} />} />
                <Route path="/chapter/:id" element={<Chapter chapters={courses.length > 0 ? courses[0].chapters : null} /> } />
            </Route>
        )
    );

    return (
        <RouterProvider router={router} />
    );
}

export default App;