import React from 'react';
import {createBrowserRouter} from "react-router";
import AppLayout from "../AppLayout/AppLayout.jsx";
import Home from "../homePage/Home/Home.jsx";
import AboutMe from "../aboutMe/aboutMe.jsx";
import Images from "../imagePage/images.jsx";
import LinkPage from "../linkPage/LinkPage.jsx";

const Router = createBrowserRouter([{
    element: <AppLayout/>,
    children: [
        {path:'/' , element:<Home/>},
        {path:'/aboutMe' , element:<AboutMe/>},
        {path:'/images' , element:<Images width={"50%"} height={"40rm"}/>},
        {path:'/links' , element:<LinkPage/>}

    ]
}])

export default Router;