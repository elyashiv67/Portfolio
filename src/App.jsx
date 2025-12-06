import './App.css'
import AboutMe from './features/homePage/aboutMe/aboutMe'
import Images from "./features/imagePage/images.jsx";
import Links from "./features/linkPage/Links.jsx";

function App() {

  return (
    <>
        <AboutMe/>
        <Images width="50%" height="600px"/>
        <Links/>
    </>
  )
}

export default App
