import React from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate()
  return (
    <>
    <div>
      Home page 
    
    </div>
    
  
        <button onClick={()=> navigate('order-summary')}>Place Order</button>
       <button onClick={()=>navigate('about')}>About Page</button>
    
    </>
  )
}

export default Home;
