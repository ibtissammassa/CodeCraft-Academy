import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import { useState, useEffect } from "react";
//layouts
import RootLayout from "./layout/RootLayout";

//pages
import Home from "./pages/Home";
import Chapter from "./pages/Chapter";
import Quiz from "./pages/Quiz";
/*
import NotFound from "./pages/NotFound";*/

function App() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        // Fetch courses
        fetch('/Elearning/GetCourses')
            .then(response => response.json())
            .then(courseData => {
                // Map through courses and create an array of promises for fetching chapters and quizzes
                const fetchCourseDataPromises = courseData.map(course => {
                    const fetchChapters = fetch(`/Elearning/GetChaptersForCourse/${course.courseId}`)
                        .then(response => response.json());

                    const fetchQuiz = fetch(`/Elearning/GetQuizForCourse/${course.courseId}`)
                        .then(response => response.json());

                    // Resolve both chapter and quiz data for the course
                    return Promise.all([fetchChapters, fetchQuiz])
                        .then(([chaptersData, quizData]) => {
                            // Update the course object with chapters and quiz
                            course.chapters = chaptersData;
                            course.quizQuestions = quizData;
                            return course;
                        })
                        .catch(error => {
                            console.error(`Error fetching data for course ${course.courseId}:`, error);
                        });
                });

                // Resolve all promises for fetching data for each course
                Promise.all(fetchCourseDataPromises)
                    .then(updatedCourses => {
                        // Update courses state with chapters and quiz added to each course
                        setCourses(updatedCourses);
                    })
                    .catch(error => {
                        console.error('Error fetching course data:', error);
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
                <Route path="/chapter/:id" element={<Chapter chapters={courses.length > 0 ? courses[0].chapters : null} />} />
                <Route path="/quiz/:id" element={<Quiz Quiz={courses.length > 0 ? courses[0].quizQuestions : null} course={courses.length > 0 ? courses[0] : null} />} />
            </Route>
        )
    );

    return (
        <RouterProvider router={router} />
    );
}

export default App;