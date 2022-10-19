import React, { useEffect, useState } from "react";
import DisplayCharacters from "./DisplayCharacters";

function Manager() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [length, setLength] = useState(8);

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

  return (
    <div>
      <DisplayCharacters characters={data} />
    </div>
  );
}

//We should use a component for displaying the characters

export default Manager;
