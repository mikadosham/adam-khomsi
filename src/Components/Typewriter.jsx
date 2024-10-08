import React, { useState, useEffect, useRef } from "react";
import "./Typewriter.css";

const Typewriter = ({ text, baseDelay = 10 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const textareaRef = useRef(null); // Reference to the textarea

  useEffect(() => {
    textareaRef.current.focus(); // Focus on the textarea to show the caret

    if (index < text.length) {
      const delay = Math.random() * 150;
      const timer = setTimeout(() => {
        setDisplayedText((d) => d + text.charAt(index));
        setIndex(index + 1);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [index, text, baseDelay]);

  const handleUserInput = (e) => {
    e.preventDefault(); // Prevent all user input, keeping the caret active
  };

  return (
    <div>
      <h1>Hey, I'm Adam :)</h1>
      <textarea
        ref={textareaRef}
        className="typewriter"
        value={displayedText}
        onChange={handleUserInput}
        onKeyDown={handleUserInput}
        onMouseDown={(e) => e.preventDefault()} // Prevents selection if needed
        style={{ cursor: "text" }}
      />
    </div>
  );
};

export default Typewriter;
