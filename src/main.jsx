import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter as Router, Route, Routes} from "react-router";
import './index.css'
import Home from './features/homePage/Home/Home.jsx';
import AboutMe from "./features/homePage/aboutMe/aboutMe.jsx";
import Images from "./features/imagePage/images.jsx";
import Links from "./features/linkPage/Links.jsx";

const root = document.getElementById("root");
createRoot(root).render(
  <StrictMode>
      <Router>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/aboutMe" element={<AboutMe/>}/>
              <Route path="/images" element={<Images width="50%" height="600px"/>}/>
              <Route path="/links" element={<Links/>}/>
          </Routes>
      </Router>
  </StrictMode>,
)
