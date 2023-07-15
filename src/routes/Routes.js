import {   Route,  Routes as AppRoutes,
  } from "react-router-dom";
import Home from "../components/home/Home";
import BlogApp from "../components/blog/BlogApp";
import UserApp from "../components/userApp/UserApp";


const Routes = ()=> {
 
 return(

   <AppRoutes>

<Route path="/" element={<Home/>} />
<Route path="/blog" element={<UserApp/>} />
<Route path="/users" element={<BlogApp/>} />
</AppRoutes>
  )

}
export default Routes;

