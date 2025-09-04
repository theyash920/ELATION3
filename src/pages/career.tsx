import React from "react";
import { useNavigate } from "react-router-dom";

const Careers = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Our Openings</h1>
      <button
        onClick={() => navigate("/")}
        className="mt-10 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-medium shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-black"
        aria-label="Back to Home"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M19.5 10.5a.75.75 0 01-.75.75h-9.69l3.22 3.22a.75.75 0 11-1.06 1.06l-4.5-4.5a.75.75 0 010-1.06l4.5-4.5a.75.75 0 111.06 1.06L9.06 9.75h9.69a.75.75 0 01.75.75z"
            clipRule="evenodd"
          />
        </svg>
        Back to Home
      </button>
    </div>
  );
};

export default Careers;