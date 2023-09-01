import User from "./components/User";
import Share from "./components/Share";
import DrawersImg from "./assets/drawers.jpg";
import { useState } from "react";
import "./App.css";

function App() {
  const [share, setShare] = useState(false);
  const handleClick = () => {
    setShare((state) => !state);
  };

  return (
    <main>
      <div className="ImgContainer">
        <img src={DrawersImg} alt="drawers" />
      </div>
      <div className="TxtContainer">
        <h1 className="TxtContainer-Title">
          Shift the overall look and feel by adding these wonderful touches to
          furniture in your home
        </h1>
        <p className="TxtContainer-Para">
          Ever been in a room and felt like something was missing? Perhaps it
          felt slightly bare and uninviting. I&apos;ve got some simple tips to
          help you make any room feel complete.
        </p>
        <User handleClick={handleClick} share={share} />
        {share && <Share handleClick={handleClick} />}
      </div>
    </main>
  );
}

export default App;
