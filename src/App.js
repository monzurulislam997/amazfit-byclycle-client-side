import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import Register from './pages/Register/Register';
import RequireAuth from './pages/RequireAuth/RequireAuth';
import Header from './pages/Shared/Header/Header';
import SingleProduct from './pages/SingleProduct/SingleProduct';


function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/product/:id" element={<SingleProduct></SingleProduct>}></Route>


        {/* <Route path="/product/:id" element={
          <RequireAuth>
            <SingleProduct></SingleProduct>
          </RequireAuth>}>
        </Route> */}

        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
