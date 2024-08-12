import { FormEvent, useState } from "react";
import api from "../api/axios";
import { IoAddCircle } from "react-icons/io5";
import { IoMdArrowBack } from "react-icons/io";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const AddCards = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!question || !answer) {
      toast.error("question and answer are required!");
      return;
    }

    try {
      const response = await api.post("/flashcards", { question, answer });
      toast.success("Card added successfully!");
      console.log("Card added:", response.data);
    } catch (error) {
      console.error("Error adding card:", error);
      alert("Failed to add card. Please try again later.");
    }

    setAnswer("");
    setQuestion("");
    console.log("question:", question);
    console.log("answer:", answer);
  };

  return (
    <div className="w-full flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-2xl font-bold tracking-tighter">
        {" "}
        add your card details below!{" "}
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full max-w-lg px-4 mt-5"
      >
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Add question!"
          className="bg-main-gradient rounded-lg border border-slate-400 py-3 px-4 mb-4 placeholder-center"
        />
        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Add answer!"
          className="bg-main-gradient rounded-lg border border-slate-400 py-3 px-4 h-[250px] placeholder-center"
        />
        <button
          className="bg-pink py-5 px-3 rounded-lg border border-slate-500 ease-in-out mt-3 justify-center items-center flex hover:bg-blue-gradient duration-200 hover:translate-y-[-3px]"
          type="submit"
        >
          <IoAddCircle className="flex items-center mr-1" />
          add card!
        </button>
      </form>
      <Link to="/">
        <button
          className="bg-main-gradient py-2 px-3 rounded-lg border border-slate-500 ease-in-out mt-3 justify-center items-center flex hover:bg-blue-gradient duration-200 hover:translate-y-[-3px]"
          type="submit"
        >
          <IoMdArrowBack className="flex mr-1 hover:mr-3 w-5 items-center ease-in-out duration-300" />
          click here to go back to Flashcards again!
        </button>
      </Link>
    </div>
  );
};

export default AddCards;
