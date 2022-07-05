import { Routes, Route } from 'react-router-dom';
import './App.css';
import Add2 from './pages/Add2/Add2';
import AddMyItem from './pages/AddMyItem/AddMyItem';
import AddProduct from './pages/AddProduct/AddProduct';
import Blogs from './pages/Blogs/Blogs';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login';
import ManageProducts from './pages/ManageProducts/ManageProducts';
import MyitemStore from './pages/MyItemStore/MyitemStore';
import NotFound from './pages/NotFound/NotFound';
import Register from './pages/Register/Register';
import RequireAuth from './pages/RequireAuth/RequireAuth';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';
// import ShowItem from './pages/ShowItem/ShowItem';
import ShowMyItemStore from './pages/ShowMyItemStore/ShowMyItemStore';
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
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/manageitems" element={<MyitemStore></MyitemStore>}></Route>
        <Route path="/addproduct" element={<AddProduct></AddProduct>}></Route>
        <Route path="/manageproducts" element={<ManageProducts></ManageProducts>}></Route>
        <Route path="/add/:id" element={<AddMyItem></AddMyItem>}></Route>
        {/* <Route path="/showitem" element={<ShowItem></ShowItem>}></Route> */}
        <Route path="/myitems" element={<ShowMyItemStore></ShowMyItemStore>}></Route>

        <Route path="/product/:id" element={
          <RequireAuth>
            <SingleProduct></SingleProduct>
          </RequireAuth>}>
        </Route>

        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
