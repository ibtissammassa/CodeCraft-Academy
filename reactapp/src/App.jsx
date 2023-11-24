import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";

//layouts
import RootLayout from "./layout/RootLayout";

//pages
/*import Home from "./pages/Home";
import NotFound from "./pages/NotFound";*/

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            {/*<Route index element={<Home />} />
            <Route path="/recipes" element={<Recipes />} />

            <Route path="*" element={<NotFound />} />*/}
        </Route>
    )
)

function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App;