import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import { useState, useEffect } from "react";
import { GetCourses } from "./services/courses";
//layouts
import RootLayout from "./layout/RootLayout";

//pages
import Home from "./pages/Home";
import Chapter from "./pages/Chapter";
import Quiz from "./pages/Quiz";
import Certificate from "./pages/Certificate";
/*
import NotFound from "./pages/NotFound";*/

function App() {
    const [courses, setCourses] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const updatedCourses = await GetCourses();
                setCourses(updatedCourses);
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
                // Handle error fetching courses
                console.error('Error fetching courses:', error);
            }
        };

        fetchCourses();
    }, []);

    console.log(courses);

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<RootLayout courses={courses} />}>
                <Route index element={<Home course={courses.length > 0 ? courses[0] : null} />} />
                <Route path="/chapter/:id" element={<Chapter chapters={courses.length > 0 ? courses[0].chapters : null} />} />
                <Route path="/quiz/:id" element={<Quiz Quiz={courses.length > 0 ? courses[0].quizQuestions : null} course={courses.length > 0 ? courses[0] : null} />} />
                <Route path="/Certificate/:id" element={<Certificate />} />
            </Route>
        )
    );

    return (
        <RouterProvider router={router} />
    );
}

export default App;