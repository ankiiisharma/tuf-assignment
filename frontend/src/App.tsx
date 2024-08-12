// import React from "react";
// import FlashcardList from "./comonents/FlashcardList";
// import Navbar from "./comonents/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddCards from "./pages/AddCards";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addcards" element={<AddCards />} />
      </Routes>
      <Toaster position="top-center" reverseOrder={true} />
    </>
  );
};

export default App;
