import React, { useState } from "react";
import Typewriter from "./Components/Typewriter";
import HeaderMenu from "./Components/HeaderMenu";
import "./index.css";
import Footer from "./Components/Footer";
import Portfolio from "./Components/Portfolio";

function Home() {
  const [showPortfolio, setShowPortfolio] = useState(false);

  const introText = `I'm a full-stack web developer with a passion for creating aesthetically pleasing, functional websites, online stores and applications. I look forward to connecting!`;

  const handlePortfolioClick = () => {
    setShowPortfolio(true);
  };

  const handleHomeClick = () => {
    setShowPortfolio(false);
  };

  return (
    <div className="main-wrapper">
      <div className="content-wrapper">
        <HeaderMenu
          onPortfolioClick={handlePortfolioClick}
          onHomeClick={handleHomeClick}
          showHome={showPortfolio}
        />
        <main>
          {!showPortfolio && (
            <div className={`fade-in`}>
              <Typewriter text={introText} />
            </div>
          )}
          {showPortfolio && (
            <div className={`fade-in`}>
              <Portfolio />
            </div>
          )}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
