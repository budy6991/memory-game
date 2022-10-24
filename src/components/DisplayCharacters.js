import React from "react";
import CharacterCard from "./CharacterCard";

function DisplayCharacters({ characters, clickCounter }) {
  const charactersCard = characters.map((character) => {
    return (
      <CharacterCard
        name={character.name}
        image={character.image}
        key={character.id}
        id={character.id}
        clickCounter={clickCounter}
      />
    );
  });
  return <div className="h-fit w-fit">{charactersCard};</div>;
}

export default DisplayCharacters;
