import React, { useEffect, useState } from "react";
import DisplayCharacters from "./DisplayCharacters";
import NavBar from "./NavBar";
import LoadingPage from "./LoadingPage";

function Manager() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [length, setLength] = useState(5);
  const [score, setScore] = useState(0);
  const [record, setRecord] = useState(0);

  const normalizeData = (data) => {
    return data.map((character) => {
      return {
        name: character.name,
        image: character.image,
        id: character.id,
        clicked: false,
      };
    });
  };

  // If clicked is true, setScore to +1

  const shuffleArray = () => {
    setData(data.sort(() => 0.5 - Math.random()));
  };

  const clickCheck = (clicked, id) => {
    setData(
      data.map((character) => {
        if (character.id === id) {
          character.clicked = clicked;
          if (character.clicked) {
            // shuffleArray();
            setScore(score + 1);
          } else {
            setScore(0);
            setLength(5);
          }
        }
        return character;
      })
    );
  };

  const checkClicks = () => {
    const passedAll = data.every((character) => character.clicked === true);
    if (passedAll) {
      levelUp();
    }
  };

  const levelUp = () => {
    setLength(length + 1);
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
  }, [length]);

  useEffect(() => {
    checkClicks();
  }, [data]);

  if (loading) {
    return <LoadingPage />;
  } else
    return (
      <div>
        <NavBar score={score} record={record} />
        <DisplayCharacters characters={data} clickCheck={clickCheck} />
      </div>
    );
}

export default Manager;
