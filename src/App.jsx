import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const API = "https://api.adviceslip.com/advice";
  const [pharse, setPharse] = useState(null);

  const newPharse = () => {
    let random = Math.floor(Math.random() * 224) + 1;
    fetch(API + `/${random}`)
      .then((data) => data.json())
      .then((data) => setPharse(data.slip))
      .catch((err) => console.log(err));
  };

  const handelClick = () => {
    console.log(pharse);
    newPharse();
    console.log("entre");
  };

  useEffect(() => {
    newPharse();
  }, []);

  return (
    <>
      <article className=" bg-DarkGrayishBlue  w-[342px] rounded-lg px-[30px] pt-10 pb-16 mx-auto my-20 text-center relative md:w-[540px] drop-shadow-[18px_6px_16px_hsl(150,100%,66%,0.25)]">
        <span className="text-NeonGreen uppercase mb-6 tracking-[4px text-xs">
          Advice #{pharse?.id}
        </span>
        <p className="text-LightCyan text-[22px] font-extrabold mb-6">{`"${pharse?.advice}"`}</p>

        <picture>
          <source
            media="(max-width:640px)"
            srcSet="./images/pattern-divider-mobile.svg"
          />
          <source
            media="(min-width:641px)"
            srcSet="./images/pattern-divider-desktop.svg"
          />
          <img className="mx-auto" src="" alt="" />
        </picture>

        <button
          className="bg-NeonGreen w-[66px] h-[66px] rounded-full grid place-content-center absolute bottom-[-33px] left-[140px] hover:drop-shadow-[0_0_16px_hsl(150,100%,66%)] md:left-[237px]"
          onClick={handelClick}
        >
          <img src="./images/icon-dice.svg" alt="image icon random" />
        </button>
      </article>

      <footer className="text-center text-LightCyan ">
        Challenge by
        <a
          className="text-NeonGreen"
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          className="text-NeonGreen"
          href="https://www.linkedin.com/in/parrabnixon/"
        >
          Nixon Parra
        </a>
        .
      </footer>
    </>
  );
}

export default App;
