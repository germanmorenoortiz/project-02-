import React from "react";

export const Informacion = (space) => {
  let text = "";
  if (space.success === true) text = "Yes";
  else text = "No";
  return (
    <article>
      <hr />
      <h2>{space.name}</h2>

      <p>{space.details}</p>
      <h3>More Info</h3>
      <ul>
        <li>Success: {text}</li>
        <li>Fly Code: {space.flight_number}</li>
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
