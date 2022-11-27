import { Route, Routes } from 'react-router-dom';
import './App.css';
import Breakfast from './Components/Pages/Home/Foods/Breakfast/Breakfast';
import Dinner from './Components/Pages/Home/Foods/Dinner/Dinner';
import Lunch from './Components/Pages/Home/Foods/Lunch/Lunch';
import Home from './Components/Pages/Home/Home/Home';
import Login from './Components/Pages/Login/Login/Login';
import Signup from './Components/Pages/Login/SignUp/Signup';
import ShoppingCart from './Components/Pages/ShoppingCart/ShoppingCart';
import Header from './Components/Shared/Header/Header';
import NotFound from './Components/Shared/NotFound/NotFound';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/cart" element={<ShoppingCart></ShoppingCart>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>


        <Route path="/breakfast" element={<Breakfast></Breakfast>}></Route>
        <Route path="/lunch" element={<Dinner></Dinner>}></Route>
        <Route path="/dinner" element={<Lunch></Lunch>}></Route>



        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </>
  );
}

export default App;
