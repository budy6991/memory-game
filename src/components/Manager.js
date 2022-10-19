import React, { useEffect, useState } from "react";

function Manager() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const randomArray = Array.from({ length: 10 }, () =>
      Math.floor(Math.random() * 826)
    );
    const url = `https://rickandmortyapi.com/api/character/${randomArray}`;
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

  console.log(data);
  console.log(loading);

  return <div>Manager</div>;
}

//We should use a component for displaying the characters

export default Manager;
