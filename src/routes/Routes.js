import { Route, Routes as AppRoutes } from "react-router-dom";
import Home from "../components/home/Home";
import About from '../components/about/About'
import OrderSummary from "../components/orderSumarry/OrderSummary";
import NoMatch from "../components/noPage/NoMatch";

const Routes = () => {
  return (
    <AppRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/order-summary" element={<OrderSummary />} />
      <Route path="*" element={<NoMatch />} />
    </AppRoutes>
  );
};
export default Routes;
