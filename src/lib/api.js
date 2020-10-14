import React from "react";

export const Informacion = (space) => {
  let text = "";
  if (space.success == true) text = "Si";
  else text = "No";
  return (
    <article>
      <h2>{space.name}</h2>

      <p>{space.details}</p>
      <h3>Mas información</h3>
      <ul>
        <li>Exito: {text}</li>
        <li>Código de vuelo: {space.flight_number}</li>
        <li>ID: {space.id}</li>
      </ul>
    </article>
  );
};

export const getLastNew = async () => {
  const response = await fetch("https://api.spacexdata.com/v4/launches/latest");
  const data = await response.json();
  return data;
};

export const getAllNews = async () => {
  const response = await fetch("https://api.spacexdata.com/v4/launches");
  const data = await response.json();
  return data;
};

export const getTenNews = async () => {
  const response = await fetch("https://api.spacexdata.com/v4/launches");
  const data = await response.json();
  const corte = data.slice(0, 10);
  return corte;
};
