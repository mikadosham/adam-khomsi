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
          <div className={showPortfolio ? "fade-out" : "fade-in"}>
            {!showPortfolio && <Typewriter text={introText} />}
          </div>
          <div className={showPortfolio ? "fade-in" : "fade-out"}>
            {showPortfolio && <Portfolio />}
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
