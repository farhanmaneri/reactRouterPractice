import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './components/Home';
import About from './components/About';
import OrderSummary from './components/OrderSummary';
import NoMatch from './components/NoMatch';

function App() {
  return (
<<<<<<< HEAD
  
  <Routes /> 
  
      );
}
=======
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/order-summary' element={<OrderSummary />}></Route>
      <Route path='*' element={<NoMatch />}></Route>
    </Routes >
    // <MyRoutes/>
  )
};
>>>>>>> b016988f5dd476498ef88ca4c4226db34058e6e7

export default App;
