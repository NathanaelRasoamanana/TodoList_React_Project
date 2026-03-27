import { createBrowserRouter } from "react-router-dom";
import EditTask from "../pages/EditTask"
import ListTasks from "../pages/ListTasks"
import NavLayout from "../components/NavLayout"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <NavLayout/>,
        children:[
            {
                path:'form',
                element:<EditTask/>
            },
            {
                path:'list',
                element:<ListTasks/>
            }
        ]
    },
])