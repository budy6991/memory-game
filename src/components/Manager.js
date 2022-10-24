import React, { useEffect, useState } from "react";
import DisplayCharacters from "./DisplayCharacters";
import NavBar from "./NavBar";
import LoadingPage from "./LoadingPage";

function Manager() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [length, setLength] = useState(6);
  const [score, setScore] = useState(0);
  const [record, setRecord] = useState(0);

  const normalizeData = (data) => {
    return data.map((character) => {
      return {
        name: character.name,
        image: character.image,
        id: character.id,
        clicks: 0,
      };
    });
  };

  const shuffleArray = () => {
    setData(data.sort(() => 0.5 - Math.random()));
  };

  const getCounterClick = (clicks, id) => {
    setData(
      data.filter((character) => {
        if (character.id === id) {
          character.clicks = clicks;
        }
        return character;
      })
    );
  };

  const checkForClicks = () => {
    data.map((character) => {
      if (character.clicks <= 1) {
        setScore(score + 1);
      } else if (character.clicks > 1) {
        setScore(0);
        return (character.clicks = 0);
      }
      return character;
    });
  };

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
        setData(normalizeData(data));
      } catch {
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    shuffleArray();
    checkForClicks();
    console.log(data);
  }, [data]);

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
