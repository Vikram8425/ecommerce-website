import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Components/About';
import Service from './Components/Service';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Profile from './Components/Profile';
import Dashboard from './Components/Dashboard';
import CustomNavbar from './Components/CustomNavbar';
import { BrowserRouter,Route,Routes  } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoutes from './Components/PrivateRoutes'
import Store from './Components/Store';
import Banner from './Components/Banner';
import Cart from './Components/Cart';
import { CartProvider } from './Components/Context';
const sayHello=()=>{
  alert("Hello,How are you");
  }

function App() {
  return (
    // <div  className='container'>
    //   <h1>This is root element</h1>   
    //   {
      
    //   /* <Home myFun={sayHello} title="Learn JavaScript"  description="We are learning JavaScrpit"  buttonName="like" />  
    //   <Home title="Lear React" description="We are learning Reacts" buttonName="click here"/>      
    //   <Home/>
    //   <About/>
    //   <Service/>
    //   <Login/>
    //   <Signup/>
    //   <Profile/>
    //   <Dashboard/> */
      
    //   }
    // </div>

     <CartProvider>
    <BrowserRouter>
    <ToastContainer/>
      
        <Routes>
            <Route path="/"  element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/services" element={<Service/>}></Route>
            <Route path="/banner" element={<Banner/>}></Route>
           <Route path="/about"   element={<About/>}/>
           <Route path="/login"   element={<Login/>}/>
           <Route path="store/:categoryId" element={<Store/>}/>   
           <Route path="/signup"   element={<Signup/>}/>

           <Route path="/user" element={<PrivateRoutes/>}>
           <Route path="dashboard" element={<Dashboard/>}/>
           <Route path="cart"  element={<Cart/>}/>

           </Route>
        </Routes>
    </BrowserRouter>
    </CartProvider>

  );
}
export default App;
