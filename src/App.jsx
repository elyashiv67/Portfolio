import './App.css'
import {RouterProvider} from "react-router";
import Router from "./features/Routers/Main_R.jsx";


function App() {


  return (
    <>
        <RouterProvider router={Router}/>
    </>
  )
}

export default App
