import React from "react";

function CharacterCard({ name, image }) {
  return (
    <button className="m-2 hover:scale-90 transition-all h-fit w-fit">
      <img src={image} className="rounded-lg"></img>
      <h2>{name}</h2>
    </button>
  );
}

export default CharacterCard;
