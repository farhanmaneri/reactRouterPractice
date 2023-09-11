import { Route, Routes } from "react-router-dom";
import Home from "../components/home/Home";
import About from '../components/about/About'
import OrderSummary from "../components/orderSumarry/OrderSummary";
import NoMatch from "../components/noPage/NoMatch";
import UsersDetail from "../components/users/UsersDetail";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/order-summary" element={<OrderSummary />} />
      <Route path=":userId" element={<UsersDetail />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};
export default AppRoutes;
