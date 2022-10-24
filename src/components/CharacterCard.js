import React, { useEffect, useState } from "react";

function CharacterCard({ name, image, clickCounter }) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    increaseCounter();
  }, []);

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <button
      className="m-2 hover:scale-90 transition-all h-fit w-fit"
      onClick={() => {
        increaseCounter();
        clickCounter(counter, name);
      }}
    >
      <img src={image} className="rounded-lg"></img>
      <h2>{name}</h2>
    </button>
  );
}

export default CharacterCard;
