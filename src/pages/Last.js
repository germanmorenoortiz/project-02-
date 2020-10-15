import React, { useEffect, useState } from "react";
import { getLastNew, Informacion } from "../lib/api.js";

const Last = () => {
  const [data, setData] = useState([]);

  const fetchSpace = async () => {
    const ultima = await getLastNew();
    setData(ultima);
  };

  useEffect(() => {
    fetchSpace();
  }, []);

  // Espera que reciba los datos para evitar errores.
  if (data.length === 0) return null;

  return (
    <main>
      <h1>Last New</h1>
      <Informacion {...data} />
    </main>
  );
};

export default Last;
