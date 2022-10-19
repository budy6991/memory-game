import React from "react";

function DisplayCharacters({ characters }) {
  const charactersCard = characters.map((character) => {
    return (
      <button className="m-2 hover:scale-75 transition-all">
        <img src={character.image}></img>
        <h2>{character.name}</h2>
      </button>
    );
  });
  return <div>{charactersCard}</div>;
}

export default DisplayCharacters;
