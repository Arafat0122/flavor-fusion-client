import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AllFood from "../pages/AllFood/AllFood";
import SingleFood from "../pages/SingleFood/SingleFood";
import FoodPurchase from "../pages/FoodPurchase/FoodPurchase";
import Gallery from "../pages/Gallery/Gallery";
import PrivateRoute from "./PrivateRoutes";
import AddFood from "../pages/MyProfile/AddFood/AddFood";
import MyAddedFood from "../pages/MyProfile/MyAddedFood/MyAddedFood";
import MyOrder from "../pages/MyProfile/MyOrder/MyOrder";
import UpdateFood from "../pages/MyProfile/MyAddedFood/UpdateFood";


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
          path: '/gallery',
          element: <Gallery></Gallery>,
          loader: () => fetch('https://flavor-fusion-psi.vercel.app/gallery')
        },
        {
          path: '/foods',
          element: <AllFood></AllFood>,
          loader: () => fetch('https://flavor-fusion-psi.vercel.app/foods')
        },
        {
          path: '/foods/:id',
          element: <SingleFood></SingleFood>,
          loader: ({params}) => fetch(`https://flavor-fusion-psi.vercel.app/foods/${params.id}`)
        },
        {
          path: '/foodsPurchase/:id',
          element: <PrivateRoute><FoodPurchase></FoodPurchase></PrivateRoute>,
          loader: ({params}) => fetch(`https://flavor-fusion-psi.vercel.app/foods/${params.id}`)
        },
        {
          path: '/add',
          element: <PrivateRoute><AddFood></AddFood></PrivateRoute>
        },
        {
          path: '/addedFood',
          element: <PrivateRoute><MyAddedFood></MyAddedFood></PrivateRoute>
        },
        {
          path: '/orderFood',
          element: <PrivateRoute><MyOrder></MyOrder></PrivateRoute>
        },
        {
          path: '/update/:id',
          element: <PrivateRoute><UpdateFood></UpdateFood></PrivateRoute>,
          loader: ({params}) => fetch(`https://flavor-fusion-psi.vercel.app/foods/${params.id}`)
        }
      ]
    },
  ]);

  export default router;