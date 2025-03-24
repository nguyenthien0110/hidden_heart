"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import data from "../public/data/secretMessages.json";

export default function Home() {
  const [password, setPassword] = useState("");
  const [messageVisible, setMessageVisible] = useState(false);
  const [message, setMessage] = useState("");
  const [isOpened, setIsOpened] = useState(false);

  const checkPassword = () => {
    const matched = data.find((item) => item.secretPassword === password);
    if (matched) {
      setMessage(matched.secretMessage);
      setMessageVisible(true);
      setIsOpened(true);
    } else {
      alert("Nhập sai rùi bé ơi, nhập lại đi! 💖");
    }
  };

  const handleKeyPress = (e: { key: string }) => {
    if (e.key === "Enter") checkPassword();
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-pink-100">
      {!messageVisible && (
        <div className="bg-pink-200 p-6 rounded-lg shadow-md">
          <h2 className="mb-4 text-lg font-semibold text-pink-700 text-center">
            Enter the Secret Password
          </h2>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={handleKeyPress}
            className="w-full p-2 mb-4 border border-pink-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <div className="flex justify-end">
            <button
              onClick={checkPassword}
              className="bg-pink-500 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-pink-600 transition-colors"
            >
              <Star className="w-4 h-4" /> Submit
            </button>
          </div>
        </div>
      )}
      {messageVisible && (
        <div
          className="relative cursor-pointer"
          onClick={() => setIsOpened(!isOpened)}
        >
          <div
            className={`w-72 h-40 bg-pink-50 border border-pink-400 shadow-lg flex items-center justify-center rounded-lg transition-transform duration-500 ${
              isOpened ? "rotate-x-180" : ""
            }`}
          >
            <p className="text-pink-500 font-bold text-center p-4">{message}</p>
          </div>
        </div>
      )}
    </div>
  );
}
