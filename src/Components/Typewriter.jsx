import React, { useState, useEffect, useRef } from "react";
import "./Typewriter.css";

const Typewriter = ({ text, baseDelay = 10 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [animationPlayed, setAnimationPlayed] = useState(false);

  // useRef to store the timeout reference persistently
  const bounceTimeout = useRef(null);
  const previousHeight = useRef(0); // To store the previous height of the lower element
  const initialHeightDetected = useRef(false); // Flag to track first height detection

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

  useEffect(() => {
    const topElement = document.querySelector(".top-element");
    const lowerElement = document.querySelector(".lower-element");

    // Function to trigger bounce effect
    function triggerBounce() {
      if (topElement) {
        clearTimeout(bounceTimeout.current); // Clear the previous timeout to debounce

        bounceTimeout.current = setTimeout(() => {
          topElement.classList.add("bounce");
          setTimeout(() => {
            topElement.classList.remove("bounce");
          }, 300); // Faster bounce animation
        }, 0); // Faster debounce (adjust as necessary)
      }
    }

    // Observer for changes in lowerElement's height
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        if (entry.target === lowerElement) {
          const newHeight = entry.contentRect.height;

          // Skip the first height change and initialize the previous height
          if (!initialHeightDetected.current) {
            previousHeight.current = newHeight;
            initialHeightDetected.current = true; // Mark first detection done
            return;
          }

          // Calculate the height difference
          const heightDifference = newHeight - previousHeight.current;

          // Trigger bounce if the height difference exceeds 5% (new line wrap)
          if (heightDifference / previousHeight.current > 0.05) {
            triggerBounce();
          }

          // Update the previous height
          previousHeight.current = newHeight;
        }
      }
    });

    if (lowerElement) {
      previousHeight.current = lowerElement.offsetHeight; // Set initial height
      resizeObserver.observe(lowerElement);
    }

    return () => {
      if (lowerElement) {
        resizeObserver.unobserve(lowerElement);
      }
      clearTimeout(bounceTimeout.current); // Clean up the debounce timeout
    };
  }, []);

  // Ensure the image animation only runs once
  useEffect(() => {
    setAnimationPlayed(true); // Set to true after mounting
  }, []);

  return (
    <div>
      <img
        className={`profile-img top-element ${
          animationPlayed ? "" : "animate"
        }`} // Add "animate" only on first render
        src="profile.jpg"
        alt="profile"
      />
      <h1>Hey, I'm Adam :)</h1>

      <div className="typewriter lower-element">
        {displayedText}
        <span className="caret">|</span>
      </div>
    </div>
  );
};

export default Typewriter;
