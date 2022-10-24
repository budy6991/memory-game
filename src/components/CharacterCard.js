import React, { useEffect, useState } from "react";

function CharacterCard({ name, image, clickCheck, id }) {
  const [clicked, setClicked] = useState(false);

  const toggleClick = () => {
    if (clicked === true) {
      setClicked(false);
    } else if (clicked === false) {
      setClicked(true);
    }
  };

  useEffect(() => {
    toggleClick();
  }, []);

  return (
    <button
      className="m-2 hover:scale-90 transition-all h-fit w-fit"
      onClick={() => {
        toggleClick();
        clickCheck(clicked, id);
      }}
    >
      <img src={image} className="rounded-lg"></img>
      <h2>{name}</h2>
    </button>
  );
}

export default CharacterCard;
