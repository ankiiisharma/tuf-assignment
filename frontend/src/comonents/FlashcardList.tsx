import React, { useState, useEffect } from "react";
import Flashcard from "./Flashcard";
import api from "../api/axios";
import loading from "../assets/loading.svg";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";

const FlashcardList: React.FC = () => {
  const [flashcards, setFlashcards] = useState<
    { question: string; answer: string }[]
  >([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadingState, setLoadingState] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
  };

  const handlePrevious = () => {
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
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-blackish-blue-gradient">
        <p className="text-white">{error}</p>
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
    <div className="flex flex-col items-center justify-center min-h-screen hover:cursor-pointer">
      <Flashcard
        question={currentFlashcard.question}
        answer={currentFlashcard.answer}
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
    </div>
  );
};

export default FlashcardList;
