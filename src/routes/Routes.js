import {  
    Route,
    Routes as AppRoutes,
  } from "react-router-dom";
import Home from "../components/home/Home";
import BlogApp from "../components/blog/BlogApp";
import UserApp from "../components/userApp/UserApp";

const Routes = ()=> {
<AppRoutes>
<Route path="/" element={<Home/>} />
<Route path="/blog/*" element={<BlogApp />} />
<Route path="/users/*" element={<UserApp />} />
</AppRoutes>
}
export default Routes;

