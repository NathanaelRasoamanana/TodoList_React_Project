import { createBrowserRouter } from "react-router-dom";
import PageListTasksMovies from "../pages/ListTasksMovies";
import PageEditTaskMovie from "../pages/FormTaskMovie";

export const router = createBrowserRouter([
    {
        path: "/",
        // element:<Home/>,
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