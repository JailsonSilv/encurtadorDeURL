import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "./pages/Home/home";
import Links from "./pages/Links/links";
import Error from "./pages/Error/error";


 export default function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/links" element={<Links/>}/>
                <Route path="*" element={<Error/>} />
            </Routes>
        </BrowserRouter>
    )
}