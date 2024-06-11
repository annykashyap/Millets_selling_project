import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import "./App.css"
import Home from "./Home";
import SideTab from "./component/SideTab/SideTab";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Flour from "./component/Navbar/Flour";
import Rice from "./component/Navbar/Rice";
import Oil from "./component/Navbar/Oil";
import Ghee from "./component/Navbar/Ghee";
import Loginpage from "./component/Login_Form/Loginpage";
import MyCart from "./component/Mycard/MyCart";
import Signup from "./component/Signup/Signup";
import Mycards from "./component/Card_carousel/Mycards";
import Myjson from "./component/Card/Myjson";
import Card_detail from "./component/Card_Details/Card_detail";
import Paymentpage from "./component/Payment/Paymentpage";
import Rice_carousel_json from "./component/Card_carousel/Rice_carousel_json";
import Flour_carousel_json from "./component/Card_carousel/Flour_carousel_json";
import Ghee_carousel_json from "./component/Card_carousel/Ghee_carousel_json";
import VerifyNo from "./component/Login_Form/VerifyNo";
import MyphoneSing from "./component/Login_Form/MyphoneSingin";
import { useState } from "react";
import ProductsA from "./component/Card_carousel/ProductsA";
import Ghee_carousel from "./component/Card_carousel/Ghee_carousel";
import Flour_carouselS from "./component/Card_carousel/Flour_carouselS";
import Rice_carouselS from "./component/Card_carousel/Rice_carouselS";


function App() {
  // const [cartItems, setCartItems] = useState([]);

  // const addToCart = (product) => {
  //   setCartItems([...cartItems, product]);
  // };

  return (
    <>
      <BrowserRouter>
        {/* <Home/> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flour" element={<Flour />} />
          <Route path="/rice" element={<Rice />} />
          <Route path="/oil" element={<Oil />} />
          <Route path="/ghee" element={<Ghee />} />
          <Route path="/sidetab" element={<SideTab />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/cart" element={<MyCart    />} />
          <Route path="/carddetails" element={<Card_detail  />} /> 

          <Route path="/signup" element={<Signup />} />
          <Route path="/mycards" element={<Mycards />} />
          <Route path="/rice_carousel" element={<Rice_carouselS/>}/>
          <Route path="/flour_carousel" element={<Flour_carouselS/>}/>
          <Route path="/ghee_carousel" element={<Ghee_carousel/>}/>
          <Route path="/myjson" element={<Myjson />} />
          <Route path="/payment" element={<Paymentpage/>} />
          <Route path="/verifyno" element={<VerifyNo/>} />
          <Route path="/myphonesing" element={<MyphoneSing/>} />
          <Route path="/myproducts" element={<ProductsA/>}/>
        </Routes>
        
      </BrowserRouter>
    </>
  );
}
export default App;
