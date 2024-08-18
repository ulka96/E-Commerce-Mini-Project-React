
// Router
import { Route, Routes } from "react-router-dom";

import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";


// Components
import Header from './Components/Header';

// Pages

import HomePage from "./pages/HomePage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductReviewPage from "./pages/ProductReviewPage";


import SharePage from "./pages/SharePage";
import WriteReviewPage from "./pages/WriteReviewPage";

import ListingPage from "./pages/ListingPage";
import CartPage from "./pages/CartPage";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";

import { useEffect } from "react";
import { setCartItems } from "./slices/cart.slice";

function App() {

const {pathname} = useLocation();  

const dispatch = useDispatch();

const userId = JSON.parse(localStorage.getItem("userId"))

const getSpecificCart = async() => {
  const response = await fetch(`http://localhost:3000/cart?userId=${userId}`);
  const data = await response.json();
  dispatch(setCartItems(data))
}

useEffect(() => {
  getSpecificCart();
}, [userId]);


  return (
   <>
       {pathname === "/shopping-cart-page" || pathname === "/share-page" || 
       pathname === "/write-review-page" ? null : <Header />}
      <main className="font-inter">
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/products/:id" element={<ProductDetailsPage/>} />
          <Route path="/product-review" element={<ProductReviewPage/>} />
          <Route path="/share" element={<SharePage/>} />
          <Route path="/review" element={<WriteReviewPage/>} />
          <Route path="/products" element={<ListingPage/>} />
          <Route path="/cart-page" element={<CartPage/>} />
          <Route path="/sign-up" element={<SignUpPage/>} />
          <Route path="/sign-in" element={<SignInPage/>} />
        </Routes>
      </main>
      
   </>
   
  );
}

export default App;
