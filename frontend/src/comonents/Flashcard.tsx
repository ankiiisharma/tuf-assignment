import React from "react";
import { motion } from "framer-motion";

interface FlashcardProps {
  question: string;
  answer: string;
  flipped: boolean;
  onFlip: () => void;
}

const Flashcard: React.FC<FlashcardProps> = ({
  question,
  answer,
  flipped,
  onFlip,
}) => {
  return (
    <div
      className="relative w-[350px] h-[400px] perspective-1000"
      onClick={onFlip}
    >
      <motion.div
        className="absolute inset-0 w-full h-full bg-gray-800 text-white text-[20px] font-normal bg-blue-gradient border border-white flex items-center justify-center rounded-lg shadow-lg"
        initial={{ rotateY: 0 }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.4 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          className="absolute inset-0 w-full h-full flex items-center justify-center p-4"
          style={{ backfaceVisibility: "hidden" }}
        >
          {question}
        </div>
        <div
          className="absolute inset-0 w-full h-full flex items-center justify-center p-4"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {answer}
        </div>
      </motion.div>
    </div>
  );
};

export default Flashcard;
