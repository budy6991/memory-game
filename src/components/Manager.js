import React, { useEffect, useState } from "react";
import DisplayCharacters from "./DisplayCharacters";
import NavBar from "./NavBar";
import LoadingPage from "./LoadingPage";

function Manager() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [length, setLength] = useState(12);
  const [score, setScore] = useState(0);
  const [record, setRecord] = useState(0);

  useEffect(() => {
    const randomCharacters = Array.from({ length: length }, () =>
      Math.floor(Math.random() * 826)
    );
    const url = `https://rickandmortyapi.com/api/character/${randomCharacters}`;
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      } catch {
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getCounterClick = (clicks, card) => {
    console.log(`Card: ${card} Clicks: ${clicks}`);
  };

  if (loading) {
    return <LoadingPage />;
  } else
    return (
      <div>
        <NavBar score={score} record={record} />
        <DisplayCharacters characters={data} clickCounter={getCounterClick} />
      </div>
    );
}

export default Manager;
