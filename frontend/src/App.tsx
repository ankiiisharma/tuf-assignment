import React from "react";
import FlashcardList from "./comonents/FlashcardList";
import Navbar from "./comonents/Navbar";

const App = () => {
  return (
    <>
      <Navbar className="flex w-full items-center" />
      <div className="flex w-full min-h-screen items-center justify-center flex-col">
        <FlashcardList />
      </div>
    </>
  );
};

export default App;
