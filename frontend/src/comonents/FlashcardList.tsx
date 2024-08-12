import React, { useState, useEffect } from "react";
import Flashcard from "./Flashcard";
import api from "../api/axios";
import loading from "../assets/loading.svg";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import { RiErrorWarningFill } from "react-icons/ri";
// import { Link } from "react-router-dom";
// import toast from "react-hot-toast";

const FlashcardList: React.FC = () => {
  const [flashcards, setFlashcards] = useState<
    { question: string; answer: string }[]
  >([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadingState, setLoadingState] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [flipped, setflipped] = useState<boolean>(false);

  useEffect(() => {
    const fetchFlashcards = async () => {
      try {
        const response = await api.get("/flashcards");
        setFlashcards(response.data);
        setLoadingState(false);
      } catch (error) {
        console.error("Error fetching flashcards:", error);
        setError("Failed to load flashcards. Please try again later.");
        setLoadingState(false);
      }
    };

    fetchFlashcards();
  }, []);

  const handleNext = () => {
    setflipped(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
  };

  const handlePrevious = () => {
    setflipped(false);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + flashcards.length) % flashcards.length
    );
  };

  if (loadingState) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-blackish-blue-gradient">
        <div>
          <img src={loading} alt="Loading..." width={90} />
        </div>

        <div className="absolute right-5 bottom-5 w-[30%] h-[50%] white__gradient" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-blackish-blue-gradient">
        <p className="text-slate-300 flex items-center text-xl tracking-tighter font-bold">
          <RiErrorWarningFill className="mr-2 size-6 text-red-600" /> Something
          went Wrong!
        </p>
      </div>
    );
  }

  if (flashcards.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-blackish-blue-gradient">
        <p className="text-white">No flashcards available.</p>
      </div>
    );
  }

  const currentFlashcard = flashcards[currentIndex];

  return (
    <div className="flex flex-col items-center justify-center hover:cursor-pointer">
      <Flashcard
        question={currentFlashcard.question}
        answer={currentFlashcard.answer}
        flipped={flipped}
        onFlip={() => setflipped(!flipped)}
      />
      <div className="mt-4 flex space-x-4 w-auto">
        <button
          className="flex items-center border border-slate-400 text-white bg-pink px-4 py-2 rounded-lg"
          onClick={handlePrevious}
          aria-label="Previous Flashcard"
        >
          <GrLinkPrevious className="mr-2 hover:mr-3 hover:ease-out hover:font-semibold duration-150" />
          Previous
        </button>
        <button
          className="flex items-center border border-slate-400   text-white bg-pink px-4 py-2 rounded-lg"
          onClick={handleNext}
          aria-label="Next Flashcard"
        >
          Next
          <GrLinkNext className="ml-2 hover:ml-3 hover:ease-out hover:font-semibold duration-150" />
        </button>
      </div>
      <div className="absolute top-0 w-[40%] h-[35%] pink__gradient xs:w-[60%] xs:h-[55%] z-[-1]" />
      {/* <div className="absolute bottom-40 w-[80%] h-[80%] rounded-full white__gradient" /> */}
      <div className="absolute right-20 bottom-20 w-[90%] h-[50%] blue__gradient z-[-1]" />
    </div>
  );
};

export default FlashcardList;
