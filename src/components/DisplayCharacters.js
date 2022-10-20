import React from "react";
import CharacterCard from "./CharacterCard";

function DisplayCharacters({ characters }) {
  const charactersCard = characters.map((character) => {
    return (
      <CharacterCard
        name={character.name}
        image={character.image}
        key={character.id}
        id={character.id}
      />
    );
  });
  return <div className="h-fit w-fit">{charactersCard};</div>;
}

export default DisplayCharacters;
