import React from "react";

function NavBar({ score, record }) {
  return (
    <div className="bg-gradient-to-b from-brown-rick to-brown-700 flex justify-between p-8 text-white w-screen">
      <div>
        <h2>Record: {record}</h2>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className=" text-xl">MEMORY CARD</h1>
        <h1 className="font-bold text-4xl">Ricky and Morty</h1>
      </div>
      <div>
        <h2>Score: {score} </h2>
      </div>
    </div>
  );
}

export default NavBar;
