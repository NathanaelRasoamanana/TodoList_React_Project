import { createBrowserRouter } from "react-router-dom";
import NavLayout from "../components/NavLayout"
import PageListTasksMovies from "../pages/ListTasksMovies";
import PageEditTaskMovie from "../pages/FormTaskMovie";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <NavLayout/>,
        children:[
            {
                path:'list',
                element:<PageListTasksMovies/>
            },
            {
                path:"/form/:id",
                element:<PageEditTaskMovie/>
            }
        ]
    },
])