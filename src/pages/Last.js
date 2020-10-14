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

  return (
    <main>
      <h1>Last New</h1>
      <hr />
      <Informacion {...data} />
    </main>
  );
};

export default Last;
