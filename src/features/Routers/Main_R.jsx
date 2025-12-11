import React from 'react';
import {createBrowserRouter} from "react-router";
import AppLayout from "../AppLayout/AppLayout.jsx";
import Home from "../homePage/Home/Home.jsx";
import AboutMe from "../aboutMe/aboutMe.jsx";
import Images from "../imagePage/images.jsx";
import P_Links from "../linkPage/P_Links.jsx";

const Router = createBrowserRouter([{
    element: <AppLayout/>,
    children: [
        {path:'/' , element:<Home/>},
        {path:'/aboutMe' , element:<AboutMe/>},
        {path:'/images' , element:<Images width={"200px"} height={"300px"}/>},
        {path:'/links' , element:<P_Links/>}

    ]
}])

export default Router;