import React, { useState, useEffect } from "react";
import "./Typewriter.css";

const Typewriter = ({ text, baseDelay = 10 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const delay = baseDelay + Math.random() * 150;
      const timer = setTimeout(() => {
        setDisplayedText((d) => d + text.charAt(index));
        setIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [index, text, baseDelay]);

  return (
    <div>
      <h1>Hey, I'm Adam :)</h1>
      <div className="typewriter">
        {displayedText}
        <span className="caret">|</span>
      </div>
    </div>
  );
};

export default Typewriter;
