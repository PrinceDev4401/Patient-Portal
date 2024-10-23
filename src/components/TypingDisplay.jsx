// src/components/TypingDisplay.js

import React, { useEffect, useState } from "react";

const TypingDisplay = ({ text, typingSpeed, clearDelay }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true); // Toggle between typing and clearing
  const [index, setIndex] = useState(0); // Track character index

  useEffect(() => {
    let interval;

    if (isTyping) {
      // Typing phase
      interval = setInterval(() => {
        if (index < text.length) {
          setDisplayedText((prev) => prev + text.charAt(index));
          setIndex((prevIndex) => prevIndex + 1);
        } else {
          // Once typing is done, pause and switch to clearing
          clearInterval(interval);
          setTimeout(() => setIsTyping(false), clearDelay);
        }
      }, typingSpeed);
    } else {
      // Clearing phase
      interval = setInterval(() => {
        if (index > 0) {
          setDisplayedText((prev) => prev.slice(0, -1));
          setIndex((prevIndex) => prevIndex - 1);
        } else {
          // Once clearing is done, reset to typing
          clearInterval(interval);
          setIsTyping(true);
        }
      }, typingSpeed);
    }

    // Cleanup interval on component unmount or when switching phases
    return () => clearInterval(interval);
  }, [index, isTyping, text, typingSpeed, clearDelay]);

  return <h1>{displayedText}</h1>;
};

export default TypingDisplay;
