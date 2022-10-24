import React from "react";

function NavBar({ score, record }) {
  return (
    <div className="bg-gradient-to-b from-brown-rick to-brown-700 flex justify-between p-8 text-white">
      <div>
        <h2>Record: {record}</h2>
      </div>
      <div>
        <h2>Score: {score} </h2>
      </div>
    </div>
  );
}

export default NavBar;
