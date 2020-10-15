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

  // Espera que reciba los datos para evitar errores.
  if (pack.length === 0) return null;

  return (
    <main>
      <h1>All News</h1>
      {pack.map((space) => (
        <Informacion {...space} />
      ))}
    </main>
  );
};

export default All;
