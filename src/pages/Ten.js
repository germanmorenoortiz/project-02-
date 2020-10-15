import React, { useEffect, useState } from "react";
import { getTenNews, Informacion } from "../lib/api.js";

const Ten = () => {
  const [pack, setPack] = useState([]);

  const fetchSpace = async () => {
    const ultima = await getTenNews();
    setPack(ultima);
  };

  useEffect(() => {
    fetchSpace();
  }, []);

  return (
    <main>
      <h1>Last 10 News</h1>
      {pack.map((space) => (
        <Informacion {...space} />
      ))}
    </main>
  );
};

export default Ten;
