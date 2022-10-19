import React from "react";

function DisplayCharacters({ characters }) {
  const charactersCard = characters.map((character) => {
    return (
      <button className="m-2 hover:scale-90 transition-all h-fit w-fit">
        <img src={character.image} className="rounded-lg"></img>
        <h2>{character.name}</h2>
      </button>
    );
  });
  return <div className="h-fit w-fit">{charactersCard};</div>;
}

export default DisplayCharacters;
