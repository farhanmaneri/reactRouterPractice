import React from "react";
import { useNavigate } from "react-router-dom";
const Home =()=>{
    const navigate = useNavigate();
    return(
        <>
        <div>
            Home
        </div>
        <div>
           <button onClick={()=> navigate('order-summary')}>
           Place Order
           </button>
        </div>
        </>
    )
};
 export default Home;