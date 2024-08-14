
// Router
import { Route, Routes } from "react-router-dom";

import { useLocation } from "react-router-dom";


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

function App() {

  const {pathname} = useLocation();  

  return (
   <>
       {pathname === "/shopping-cart-page" || pathname === "/share-page" || 
       pathname === "/write-review-page" ? null : <Header />}
      <main className="font-inter">
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/products/:id" element={<ProductDetailsPage/>} />
          <Route path="/product-review" element={<ProductReviewPage/>} />
          <Route path="/share-page" element={<SharePage/>} />
          <Route path="/review" element={<WriteReviewPage/>} />
          <Route path="/products" element={<ListingPage/>} />
          <Route path="/cart-page" element={<CartPage/>} />
        </Routes>
      </main>
      
   </>
   
  );
}

export default App;
