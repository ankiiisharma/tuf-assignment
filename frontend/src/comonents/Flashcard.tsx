import React, { useState } from "react";
import { motion } from "framer-motion";

interface FlashcardProps {
  question: string;
  answer: string;
}

const Flashcard: React.FC<FlashcardProps> = ({ question, answer }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="relative w-[350px] h-[400px] perspective-1000"
      onClick={() => setFlipped(!flipped)}
    >
      <motion.div
        className="absolute inset-0 w-full h-full bg-gray-800 text-white text-2xl font-semibold bg-blue-gradient border border-white flex items-center justify-center rounded-lg shadow-lg"
        initial={{ rotateY: 0 }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.8 }}
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
