import { createBrowserRouter } from "react-router-dom";
import PageListTasksMovies from "../pages/ListTasksMovies";
import PageEditTaskMovie from "../pages/FormTaskMovie";

//mon gestionnaire de routes
export const router = createBrowserRouter([
    {
        path:'/',
        element:<PageListTasksMovies/>
    },
    {
        path:"/form/:id",
        element:<PageEditTaskMovie/>
    }
])