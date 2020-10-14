import React, { useEffect, useState } from "react";
import { getAllNews, Informacion } from "../lib/api.js";

const All = () => {
  const [pack, setPack] = useState([]);

  const fetchSpace = async () => {
    const ultima = await getAllNews();
    setPack(ultima);
  };

  useEffect(() => {
    fetchSpace();
  }, []);

  return (
    <main>
      <h1>All News</h1>
      <hr />
      {pack.map((space) => (
        <Informacion {...space} />
      ))}
    </main>
  );
};

export default All;
