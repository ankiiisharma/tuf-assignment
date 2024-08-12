import React from "react";
import Navbar from "../comonents/Navbar";
import FlashcardList from "../comonents/FlashcardList";

const Home = () => {
  return (
    <>
      <div className="flex w-full min-h-screen items-center justify-center flex-col">
        <Navbar />
        <FlashcardList />
      </div>
    </>
  );
};

export default Home;
