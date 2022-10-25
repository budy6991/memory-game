import React from "react";
import CharacterCard from "./CharacterCard";

function DisplayCharacters({ characters, clickCheck }) {
  const charactersCard = characters.map((character) => {
    return (
      <CharacterCard
        name={character.name}
        image={character.image}
        key={character.id}
        id={character.id}
        clickCheck={clickCheck}
      />
    );
  });
  return <div>{charactersCard};</div>;
}

export default DisplayCharacters;
