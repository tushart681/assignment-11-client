import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Blog from "../pages/blogs/Blog";
import Home from "../pages/home/Home";
import AddService from "../pages/home/services/addToCard/AddService";
import AllServiceCard from "../pages/home/services/AllServiceCard";
import Review from "../pages/home/services/Review";
import MyReviews from "../pages/home/services/reviews/MyReviews";
import Reviews from "../pages/home/services/reviews/Reviews";
import Login from "../pages/login/Login";
import SignIn from "../pages/signIn/SignIn";

const router = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/allService',
                element: <AllServiceCard></AllServiceCard>
            },
            {
                path:'/login',
                element: <Login /> 
            },
            {
                path:'/signin',
                element: <SignIn /> 
            },
            {
                path:'/review/:id',
                element: <Review />,
                loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path:'/reviews',
                element:<Reviews></Reviews>
            },
            {
                path:'/myreview',
                element:<MyReviews></MyReviews>
            },
            {
                path:'/addservice',
                element:<AddService></AddService>
            },
            {
                path:'/blog',
                element:<Blog />
            }
        ]
    }
])
export default router