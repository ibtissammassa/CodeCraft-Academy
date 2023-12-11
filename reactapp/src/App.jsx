import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import { GetCourses } from "./services/courses";
import { useStore } from "./store";
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
    const courses = useStore((store) => store.courses);
    const setCourses = useStore((store) => store.setCourses);
    const setIsLoading = useStore((store) => store.setIsLoading);

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
            <Route path="/" element={<RootLayout/>}>
                <Route index element={<Home/>} />
                <Route path="/chapter/:id" element={<Chapter/>} />
                <Route path="/quiz/:id" element={<Quiz />} />
                <Route path="/Certificate/:id" element={<Certificate />} />
            </Route>
        )
    );

    return (
        <RouterProvider router={router} />
    );
}

export default App;