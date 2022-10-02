import { Routes,Route } from "react-router-dom";
import SingleBook from "../Components/SingleBook";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";



function Router(){
    return (
        
        <Routes>
            <Route path="/" element={ <Home/> }></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/signIn" element={<SignIn/>}></Route>
            <Route path="/signUp" element={<SignUp/>}></Route>
            <Route path="/book/:book_id" element={<SingleBook/>}></Route>
        </Routes>
        
    )
}

export default Router 