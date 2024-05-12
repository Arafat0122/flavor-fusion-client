import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AllFood from "../pages/AllFood/AllFood";
import SingleFood from "../pages/SingleFood/SingleFood";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<Error></Error>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
          path: '/foods',
          element: <AllFood></AllFood>,
          loader: () => fetch('http://localhost:5000/foods')
        },
        {
          path: '/foods/:id',
          element: <SingleFood></SingleFood>,
          loader: ({params}) => fetch(`http://localhost:5000/foods/${params.id}`)
        },
      ]
    },
  ]);

  export default router;